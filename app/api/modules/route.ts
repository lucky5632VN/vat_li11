import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const publicDir = path.join(process.cwd(), 'public')
    const listPath = path.join(publicDir, 'modules.json')

    if (!fs.existsSync(listPath)) {
        return NextResponse.json([])
    }

    try {
        const fileContent = fs.readFileSync(listPath, 'utf8')
        const modules = JSON.parse(fileContent)
        return NextResponse.json(modules, {
            headers: {
                'Cache-Control': 'no-store, max-age=0'
            }
        })
    } catch (error) {
        return NextResponse.json([], { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const { name, description, code, language } = await request.json()

        if (!name || !code) {
            return NextResponse.json({ error: 'Name and Code are required' }, { status: 400 })
        }

        // Slugify name for filename
        const timestamp = Date.now()
        const cleanName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') || 'untitled'
        const slug = `${cleanName}-${timestamp}`
        const fileName = `${slug}.html`
        const publicDir = path.join(process.cwd(), 'public')
        const userModulesDir = path.join(publicDir, 'user-modules')
        const listPath = path.join(publicDir, 'modules.json')

        // Ensure directory exists
        if (!fs.existsSync(userModulesDir)) {
            fs.mkdirSync(userModulesDir, { recursive: true })
        }

        // Generate content based on language
        let finalCode = code
        const lang = language || 'html'

        if (lang === 'python') {
            finalCode = `<!DOCTYPE html>
<html>
<head>
    <title>${name}</title>
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>body { background-color: #0f172a; color: #e2e8f0; font-family: monospace; padding: 24px; }</style>
</head>
<body>
    <h1 class="text-xl font-bold text-cyan-400 mb-4">Python Output:</h1>
    <div id="output" class="whitespace-pre-wrap bg-slate-900 p-4 rounded-lg border border-slate-700 shadow-inner min-h-[200px]">Initializing Python environment...</div>
    <script>
        async function main() {
            try {
                const pyodide = await loadPyodide();
                const outputDiv = document.getElementById("output");
                outputDiv.innerText = "Python Ready.\\n------------------\\n";
                // Redirect stdout
                pyodide.setStdout({ batched: (msg) => outputDiv.innerText += msg + "\\n" });
                await pyodide.runPythonAsync(\`${code.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`);
            } catch (err) {
                 document.getElementById("output").innerText += "\\nError:\\n" + err;
            }
        }
        main();
    </script>
</body>
</html>`
        } else if (lang === 'react') {
            finalCode = `<!DOCTYPE html>
<html>
<head>
    <title>${name}</title>
    <meta charset="utf-8">
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>body { background-color: #0f172a; color: white; margin: 0; min-height: 100vh; }</style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        ${code}
    </script>
</body>
</html>`
        }

        // Write the HTML file
        const filePath = path.join(userModulesDir, fileName)
        fs.writeFileSync(filePath, finalCode, 'utf8')

        // Update list
        let modules = []
        if (fs.existsSync(listPath)) {
            try {
                const fileContent = fs.readFileSync(listPath, 'utf8')
                modules = JSON.parse(fileContent)
            } catch (e) {
                modules = []
            }
        }

        const newModule = {
            id: `user-${slug}`,
            label: name,
            description: description || '',
            type: 'iframe',
            path: `/user-modules/${fileName}`,
            language: lang,
            createdAt: new Date().toISOString()
        }

        modules.push(newModule)
        fs.writeFileSync(listPath, JSON.stringify(modules, null, 2), 'utf8')

        return NextResponse.json({ success: true, module: newModule })
    } catch (error) {
        console.error('Error creating module:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
export async function DELETE(request: Request) {
    try {
        const { id } = await request.json()

        if (!id) {
            return NextResponse.json({ error: 'Module ID is required' }, { status: 400 })
        }

        const publicDir = path.join(process.cwd(), 'public')
        const listPath = path.join(publicDir, 'modules.json')

        if (!fs.existsSync(listPath)) {
            return NextResponse.json({ error: 'Modules list not found' }, { status: 404 })
        }

        let modules = []
        try {
            const fileContent = fs.readFileSync(listPath, 'utf8')
            modules = JSON.parse(fileContent)
        } catch (e) {
            return NextResponse.json({ error: 'Invalid modules data' }, { status: 500 })
        }

        const moduleToDelete = modules.find((m: any) => m.id === id)
        if (!moduleToDelete) {
            return NextResponse.json({ error: 'Module not found' }, { status: 404 })
        }

        // Delete the HTML file
        if (moduleToDelete.path) {
            const filePath = path.join(publicDir, moduleToDelete.path) // path starts with /
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        }

        // Remove from list
        modules = modules.filter((m: any) => m.id !== id)
        fs.writeFileSync(listPath, JSON.stringify(modules, null, 2), 'utf8')

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Error deleting module:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
