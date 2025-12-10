"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, Code, FileText, Type } from "lucide-react"

export default function NewModulePage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        language: "html",
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Hello Custom Module!</h1>
</body>
</html>`
    })

    const templates = {
        html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Hello Custom Module!</h1>
</body>
</html>`,
        python: `# Python Code running via Pyodide
import sys

print("Hello from Python!")
print("Version:", sys.version)

# You can use standard libraries
def factorial(n):
    return 1 if n == 0 else n * factorial(n-1)

print("Factorial of 5:", factorial(5))
`,
        react: `// React/TSX Component
// 'React' and 'ReactDOM' are available
// 'tailwind' is available for styling

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
      <h1 className="text-4xl font-bold mb-4 text-cyan-400">Hello React Module</h1>
      <p className="mb-6 text-slate-400">This is running dynamically!</p>
      
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-all"
      >
        Count is {count}
      </button>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
`
    }

    const handleLanguageChange = (lang: string) => {
        setFormData(prev => ({
            ...prev,
            language: lang,
            code: templates[lang as keyof typeof templates]
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch('/api/modules', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (res.ok) {
                router.push('/')
                router.refresh()
            } else {
                alert("Tạo module thất bại")
            }
        } catch (error) {
            console.error(error)
            alert("Đã xảy ra lỗi")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#02040a] text-slate-200 font-sans p-6 flex justify-center">
            <div className="w-full max-w-3xl space-y-6">

                {/* Header */}
                <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider">
                        Tạo Module Mới
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Metadata Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wide">
                                <Type size={16} /> Tên Module
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="Ví dụ: Con lắc hỗn loạn"
                                className="w-full bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wide">
                                <FileText size={16} /> Mô tả
                            </label>
                            <input
                                type="text"
                                placeholder="Mô tả ngắn gọn về bài thí nghiệm..."
                                className="w-full bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                                value={formData.description}
                                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wide">
                                <Code size={16} /> Ngôn ngữ / Loại File
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                <button
                                    type="button"
                                    onClick={() => handleLanguageChange('html')}
                                    className={`p-3 rounded-lg border font-bold text-sm transition-all ${formData.language === 'html' ? 'bg-cyan-950 border-cyan-500 text-cyan-400' : 'bg-[#1e293b] border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                >
                                    HTML Standard
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleLanguageChange('react')}
                                    className={`p-3 rounded-lg border font-bold text-sm transition-all ${formData.language === 'react' ? 'bg-cyan-950 border-cyan-500 text-cyan-400' : 'bg-[#1e293b] border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                >
                                    React (TSX)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleLanguageChange('python')}
                                    className={`p-3 rounded-lg border font-bold text-sm transition-all ${formData.language === 'python' ? 'bg-cyan-950 border-cyan-500 text-cyan-400' : 'bg-[#1e293b] border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                >
                                    Python (Pyodide)
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Code Editor Section */}
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-bold text-cyan-400 uppercase tracking-wide">
                            <Code size={16} /> Mã nguồn
                        </label>
                        <div className="relative">
                            <textarea
                                required
                                rows={15}
                                className="w-full bg-[#0f172a] border border-slate-700 rounded-lg p-4 font-mono text-sm leading-relaxed text-green-400 focus:outline-none focus:border-cyan-500 transition-all resize-y"
                                value={formData.code}
                                onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                            />
                            <div className="absolute top-2 right-2 text-[10px] text-slate-500 font-mono bg-black/50 px-2 py-1 rounded">HTML/JS/CSS</div>
                        </div>
                        <p className="text-xs text-slate-500 italic">
                            * HTML: Nhập đầy đủ thẻ. | React: KHÔNG dùng import, dùng React.useState. | Python: Dùng print() để xuất kết quả.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                        >
                            {loading ? "Đang tạo..." : <><Save size={18} /> Tạo Module</>}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
