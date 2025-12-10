module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const API_KEY = process.env.GEMINI_API_KEY;
async function POST(req) {
    try {
        const { message, history, experimentId, context } = await req.json();
        if (!API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API Key not configured'
            }, {
                status: 500
            });
        }
        // Specific System Prompts for each Experiment
        const PROMPTS = {
            "spring-oscillator": `Bạn là "SpringBot", trợ lý ảo chuyên về thí nghiệm Con Lắc Lò Xo.
Nhiệm vụ: Giải thích về định luật Hooke, chu kỳ dao động T = 2π√(m/k), cơ năng và động năng của lò xo.
Phong cách: Chính xác, khoa học nhưng dễ hiểu. Luôn nhắc nhở học sinh về đơn vị đo (kg, N/m).
Chỉ trả lời câu hỏi liên quan đến con lắc lò xo.`,
            "simple-pendulum": `Bạn là "PendulumBot", chuyên gia về Con Lắc Đơn.
Nhiệm vụ: Hướng dẫn về công thức T = 2π√(l/g), ảnh hưởng của chiều dài dây và gia tốc trọng trường.
Lưu ý: Nhắc nhở về điều kiện dao động nhỏ (góc alpha < 10 độ).
Chỉ tập trung vào con lắc đơn.`,
            "sound-speed": `Bạn là "SonicBot", trợ lý thí nghiệm Đo Tốc Độ Âm Thanh.
Nhiệm vụ: Giải thích hiện tượng cộng hưởng trong cột khí.
Công thức quan trọng: Điều kiện cộng hưởng L = (2k+1)λ/4. Tốc độ âm v = λf.
Hướng dẫn học sinh cách tìm các vị trí nghe to nhất để đo bước sóng.`,
            "mechanical-waves": `Bạn là "WaveBot", chuyên về Sóng Cơ.
Nhiệm vụ: Phân biệt sóng ngang và sóng dọc, giải thích phương trình sóng, bước sóng, tần số và tốc độ truyền sóng.`,
            "standing-waves": `Bạn là "ResonanceBot", chuyên về Sóng Dừng trên dây.
Nhiệm vụ: Giải thích về nút sóng, bụng sóng, điều kiện xảy ra sóng dừng (L = kλ/2 hoặc L = (2k+1)λ/4).`,
            "default": `Bạn là trợ lý ảo phòng thí nghiệm Vật lý cho bài "${context}". Hãy giúp học sinh giải đáp thắc mắc liên quan đến bài này.`
        };
        // Select Prompt
        const specificPrompt = PROMPTS[experimentId] || PROMPTS["default"];
        const systemPrompt = `${specificPrompt}
Quy tắc chung:
1. Trả lời ngắn gọn, súc tích bằng tiếng Việt.
2. Nếu câu hỏi không liên quan đến bài thí nghiệm hiện tại, hãy lịch sự từ chối và hướng dẫn học sinh quay lại bài học.
3. Khuyến khích học sinh tự thao tác trên mô phỏng.`;
        // Construct content for Gemini
        const contents = [
            {
                role: "user",
                parts: [
                    {
                        text: systemPrompt
                    }
                ]
            },
            ...history.map((msg)=>({
                    role: msg.sender === 'user' ? 'user' : 'model',
                    parts: [
                        {
                            text: msg.text
                        }
                    ]
                })),
            {
                role: "user",
                parts: [
                    {
                        text: message
                    }
                ]
            }
        ];
        // Call Google Gemini API (REST)
        // Model: gemini-1.5-flash (Fast & Efficient)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 300
                }
            })
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Gemini API Error:", data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: data.error?.message || 'AI Error'
            }, {
                status: 500
            });
        }
        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi, tôi không thể trả lời lúc này.";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: botReply
        });
    } catch (error) {
        console.error("Server Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e4f28f0._.js.map