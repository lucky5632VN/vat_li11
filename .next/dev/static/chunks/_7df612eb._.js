(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/harmonic-oscillation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HarmonicOscillation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_TIME = 20;
function HarmonicOscillation() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showGraph, setShowGraph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: true,
        v: false,
        a: false
    });
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        amplitude: 100,
        frequency: 0.5,
        phase: 0
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const omega = 2 * Math.PI * params.frequency;
    const dt = 0.016;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HarmonicOscillation.useCallback[calculateState]": (t)=>{
            const x = params.amplitude * Math.cos(omega * t + params.phase);
            const v = -params.amplitude * omega * Math.sin(omega * t + params.phase);
            const a = -params.amplitude * omega * omega * Math.cos(omega * t + params.phase);
            return {
                x,
                v,
                a
            };
        }
    }["HarmonicOscillation.useCallback[calculateState]"], [
        params.amplitude,
        omega,
        params.phase
    ]);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HarmonicOscillation.useCallback[draw]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            const centerX = width / 3;
            const centerY = height / 2;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
            // Grid
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            for(let i = 0; i < width; i += 40){
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
                ctx.stroke();
            }
            for(let i = 0; i < height; i += 40){
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
                ctx.stroke();
            }
            const state = calculateState(t);
            const angle = omega * t + params.phase;
            // Circle
            const radius = 80;
            ctx.strokeStyle = "#4ade80";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.stroke();
            // Axes
            ctx.strokeStyle = "#334155";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(centerX - radius - 20, centerY);
            ctx.lineTo(centerX + radius + 20, centerY);
            ctx.moveTo(centerX, centerY - radius - 20);
            ctx.lineTo(centerX, centerY + radius + 20);
            ctx.stroke();
            // Vector
            const vectorX = centerX + radius * Math.cos(angle);
            const vectorY = centerY - radius * Math.sin(angle);
            ctx.strokeStyle = "#f97316";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(vectorX, vectorY);
            ctx.stroke();
            ctx.fillStyle = "#f97316";
            ctx.beginPath();
            ctx.arc(vectorX, vectorY, 6, 0, 2 * Math.PI);
            ctx.fill();
            // Projection
            const projX = centerX + radius * Math.cos(angle);
            ctx.strokeStyle = "#22d3ee";
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.beginPath();
            ctx.moveTo(vectorX, vectorY);
            ctx.lineTo(projX, centerY);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = "#22d3ee";
            ctx.beginPath();
            ctx.arc(projX, centerY, 6, 0, 2 * Math.PI);
            ctx.fill();
            // Wave graph
            const waveStartX = centerX + radius + 60;
            const waveWidth = width - waveStartX - 20;
            ctx.strokeStyle = "#334155";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(waveStartX, centerY);
            ctx.lineTo(width, centerY);
            ctx.stroke();
            const drawCurve = {
                "HarmonicOscillation.useCallback[draw].drawCurve": (color, getValue, scaleFactor = 1)=>{
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    for(let i = 0; i <= waveWidth; i++){
                        const waveT = t - i / waveWidth * 4 * Math.PI / omega;
                        const rawVal = getValue(waveT);
                        const y = centerY - rawVal * radius / 100 * scaleFactor;
                        if (i === 0) ctx.moveTo(waveStartX + i, y);
                        else ctx.lineTo(waveStartX + i, y);
                    }
                    ctx.stroke();
                }
            }["HarmonicOscillation.useCallback[draw].drawCurve"];
            if (showGraph.x) {
                drawCurve("#22d3ee", {
                    "HarmonicOscillation.useCallback[draw]": (wt)=>params.amplitude * Math.cos(omega * wt + params.phase)
                }["HarmonicOscillation.useCallback[draw]"]);
            }
            if (showGraph.v) {
                drawCurve("#4ade80", {
                    "HarmonicOscillation.useCallback[draw]": (wt)=>-params.amplitude * omega * Math.sin(omega * wt + params.phase)
                }["HarmonicOscillation.useCallback[draw]"], 1 / omega);
            }
            if (showGraph.a) {
                drawCurve("#f87171", {
                    "HarmonicOscillation.useCallback[draw]": (wt)=>-params.amplitude * omega * omega * Math.cos(omega * wt + params.phase)
                }["HarmonicOscillation.useCallback[draw]"], 1 / (omega * omega));
            }
            if (showGraph.x) {
                ctx.strokeStyle = "#22d3ee";
                ctx.setLineDash([
                    3,
                    3
                ]);
                ctx.beginPath();
                ctx.moveTo(projX, centerY);
                ctx.lineTo(waveStartX, centerY - state.x * radius / 100);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.fillStyle = "#22d3ee";
                ctx.beginPath();
                ctx.arc(waveStartX, centerY - state.x * radius / 100, 5, 0, 2 * Math.PI);
                ctx.fill();
            }
            // Labels
            ctx.fillStyle = "#94a3b8";
            ctx.font = "12px monospace";
            ctx.fillText("Vòng tròn lượng giác", centerX - 60, centerY + radius + 30);
            ctx.fillText("Đồ thị theo thời gian", waveStartX + waveWidth / 2 - 60, centerY + radius + 30);
            // Info panel
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(10, 10, 150, 90);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, 150, 90);
            ctx.font = "13px monospace";
            ctx.fillStyle = "#e2e8f0";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, 30);
            ctx.fillStyle = "#22d3ee";
            ctx.fillText(`x = ${state.x.toFixed(1)} cm`, 20, 50);
            if (showGraph.v) {
                ctx.fillStyle = "#4ade80";
                ctx.fillText(`v = ${state.v.toFixed(1)} cm/s`, 20, 70);
            }
            if (showGraph.a) {
                ctx.fillStyle = "#f87171";
                ctx.fillText(`a = ${state.a.toFixed(1)} cm/s²`, 20, 90);
            }
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.font = "12px monospace";
            ctx.textAlign = "right";
            ctx.fillText("Hô Hoàng Anh A1K50", width - 15, height - 15);
            ctx.textAlign = "left";
        }
    }["HarmonicOscillation.useCallback[draw]"], [
        params.amplitude,
        params.phase,
        omega,
        calculateState,
        showGraph
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HarmonicOscillation.useCallback[animate]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            timeRef.current += dt;
            if (timeRef.current > MAX_TIME) timeRef.current = MAX_TIME;
            setTime(timeRef.current);
            draw(ctx, timeRef.current);
            if (isPlaying && timeRef.current < MAX_TIME) {
                animationRef.current = requestAnimationFrame(animate);
            } else if (timeRef.current >= MAX_TIME) {
                setIsPlaying(false);
            }
        }
    }["HarmonicOscillation.useCallback[animate]"], [
        isPlaying,
        draw
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HarmonicOscillation.useEffect": ()=>{
            if (isPlaying) {
                animationRef.current = requestAnimationFrame(animate);
            }
            return ({
                "HarmonicOscillation.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["HarmonicOscillation.useEffect"];
        }
    }["HarmonicOscillation.useEffect"], [
        isPlaying,
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HarmonicOscillation.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            draw(ctx, timeRef.current);
        }
    }["HarmonicOscillation.useEffect"], [
        params,
        draw,
        showGraph
    ]);
    const handleStep = (direction)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, Math.min(MAX_TIME, timeRef.current + dt * direction * 10));
        setTime(timeRef.current);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, timeRef.current);
    };
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, 0);
    };
    const handleTimelineChange = (newTime)=>{
        setIsPlaying(false);
        timeRef.current = newTime;
        setTime(newTime);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, newTime);
    };
    const state = calculateState(time);
    const kineticEnergy = 0.5 * state.v * state.v / 10000;
    const potentialEnergy = 0.5 * omega * omega * state.x * state.x / 10000;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 flex gap-2 z-10 bg-[#0f172a]/80 p-1 rounded-lg backdrop-blur-sm border border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGraph((p)=>({
                                                    ...p,
                                                    x: !p.x
                                                })),
                                        className: `px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.x ? "bg-cyan-500 text-white" : "bg-slate-700 text-slate-400"}`,
                                        children: "x(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGraph((p)=>({
                                                    ...p,
                                                    v: !p.v
                                                })),
                                        className: `px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.v ? "bg-green-500 text-white" : "bg-slate-700 text-slate-400"}`,
                                        children: "v(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGraph((p)=>({
                                                    ...p,
                                                    a: !p.a
                                                })),
                                        className: `px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.a ? "bg-red-500 text-white" : "bg-slate-700 text-slate-400"}`,
                                        children: "a(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: 800,
                                height: 400,
                                className: "w-full rounded-lg bg-[#0f172a]"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Reset",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Lùi",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"} text-white`,
                                        title: isPlaying ? "Dừng" : "Chạy",
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 28,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 28,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Tiến",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-8",
                                children: "0s"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: MAX_TIME,
                                step: "0.01",
                                value: time,
                                onChange: (e)=>handleTimelineChange(Number(e.target.value)),
                                className: "flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-10 text-right",
                                children: [
                                    MAX_TIME,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-4 text-sm",
                                children: "Thông số dao động"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Biên độ A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.amplitude,
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "20",
                                                max: "150",
                                                value: params.amplitude,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        amplitude: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Tần số f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.frequency,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 382,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.1",
                                                max: "2",
                                                step: "0.1",
                                                value: params.frequency,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        frequency: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Pha ban đầu φ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.phase.toFixed(2),
                                                            " rad"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 397,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: Math.PI * 2,
                                                step: "0.1",
                                                value: params.phase,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        phase: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 366,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-amber-400 font-semibold mb-3 text-sm flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    " Năng lượng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400",
                                                        children: "Động năng Wđ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 font-mono",
                                                        children: [
                                                            kineticEnergy.toFixed(3),
                                                            " J"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-slate-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-green-500 transition-all duration-100",
                                                    style: {
                                                        width: `${kineticEnergy / (kineticEnergy + potentialEnergy || 1) * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 425,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-400",
                                                        children: "Thế năng Wt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-400 font-mono",
                                                        children: [
                                                            potentialEnergy.toFixed(3),
                                                            " J"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 433,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-slate-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-blue-500 transition-all duration-100",
                                                    style: {
                                                        width: `${potentialEnergy / (kineticEnergy + potentialEnergy || 1) * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 437,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-yellow-400",
                                                        children: "Cơ năng W"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-yellow-400 font-mono",
                                                        children: [
                                                            (kineticEnergy + potentialEnergy).toFixed(3),
                                                            " J"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-yellow-500/30 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 444,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-2 text-sm",
                                children: "Công thức"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-300 space-y-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "x = A·cos(ωt + φ)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-400",
                                                children: "Li độ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 459,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "v = -Aω·sin(ωt + φ)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400",
                                                children: "Vận tốc"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 462,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "a = -Aω²·cos(ωt + φ)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400",
                                                children: "Gia tốc"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 465,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[1px] bg-slate-700 my-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "ω = 2πf = ",
                                            omega.toFixed(2),
                                            " rad/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "T = 1/f = ",
                                            (1 / params.frequency).toFixed(2),
                                            " s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s(HarmonicOscillation, "hvatDKGuL9ekkPhkgVhWrWHi1Ns=");
_c = HarmonicOscillation;
var _c;
__turbopack_context__.k.register(_c, "HarmonicOscillation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/control-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ControlPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ControlPanel({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#16213e] rounded-lg p-4 border border-cyan-900/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-cyan-400 font-semibold mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/control-panel.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/control-panel.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ControlPanel;
var _c;
__turbopack_context__.k.register(_c, "ControlPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/spring-oscillator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpringOscillator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$control$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/control-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SpringOscillator() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const energyCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [layout, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("horizontal");
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mass: 0.5,
        springConstant: 20,
        amplitude: 80,
        phase: 0
    });
    const historyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const omega = Math.sqrt(params.springConstant / params.mass);
    const period = 2 * Math.PI / omega;
    const frequency = omega / (2 * Math.PI);
    const dt = 0.016;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpringOscillator.useCallback[calculateState]": (t)=>{
            const x = params.amplitude * Math.cos(omega * t + params.phase);
            const v = -params.amplitude * omega * Math.sin(omega * t + params.phase);
            const a = -params.amplitude * omega * omega * Math.cos(omega * t + params.phase);
            const force = -params.springConstant * (x / 100);
            const x_m = x / 100;
            const v_m = v / 100;
            const wt = 0.5 * params.springConstant * x_m * x_m;
            const wd = 0.5 * params.mass * v_m * v_m;
            const wTotal = wt + wd;
            return {
                x,
                v,
                a,
                force,
                wt,
                wd,
                wTotal
            };
        }
    }["SpringOscillator.useCallback[calculateState]"], [
        params,
        omega
    ]);
    const drawSpring = (ctx, startX, startY, endX, endY, coils = 12, width = 20)=>{
        const dx = endX - startX;
        const dy = endY - startY;
        const len = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        ctx.save();
        ctx.translate(startX, startY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(10, 0);
        const step = (len - 20) / coils;
        for(let i = 0; i < coils; i++){
            const x = 10 + i * step;
            ctx.lineTo(x + step * 0.25, width);
            ctx.lineTo(x + step * 0.75, -width);
        }
        ctx.lineTo(len - 10, 0);
        ctx.lineTo(len, 0);
        ctx.stroke();
        ctx.restore();
    };
    const drawArrow = (ctx, x, y, len, color, label)=>{
        if (Math.abs(len) < 5) return;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const angle = layout === "horizontal" ? len > 0 ? 0 : Math.PI : len > 0 ? Math.PI / 2 : -Math.PI / 2;
        const endX = x + (layout === "horizontal" ? len : 0);
        const endY = y + (layout === "vertical" ? len : 0);
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        const headLen = 6;
        ctx.translate(endX, endY);
        ctx.rotate(angle);
        ctx.moveTo(0, 0);
        ctx.lineTo(-headLen, -headLen / 2);
        ctx.lineTo(-headLen, headLen / 2);
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.font = "bold 12px sans-serif";
        ctx.fillText(label, len > 0 ? 5 : -15, -5);
        ctx.stroke();
        ctx.restore();
    };
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpringOscillator.useCallback[draw]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            const state = calculateState(t);
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let i = 0; i < width; i += 40){
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
            }
            for(let i = 0; i < height; i += 40){
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
            }
            ctx.stroke();
            if (layout === "horizontal") {
                const centerY = height / 2;
                const wallX = 60;
                const equilibriumX = width / 2;
                const massX = equilibriumX + state.x;
                ctx.fillStyle = "#64748b";
                ctx.fillRect(wallX - 10, centerY - 50, 10, 100);
                ctx.strokeStyle = "#475569";
                ctx.beginPath();
                ctx.moveTo(wallX, centerY + 30);
                ctx.lineTo(width, centerY + 30);
                ctx.stroke();
                ctx.strokeStyle = "rgba(250, 204, 21, 0.3)";
                ctx.setLineDash([
                    5,
                    5
                ]);
                ctx.beginPath();
                ctx.moveTo(equilibriumX - params.amplitude, centerY - 60);
                ctx.lineTo(equilibriumX - params.amplitude, centerY + 60);
                ctx.moveTo(equilibriumX + params.amplitude, centerY - 60);
                ctx.lineTo(equilibriumX + params.amplitude, centerY + 60);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.fillStyle = "rgba(250, 204, 21, 0.7)";
                ctx.font = "10px monospace";
                ctx.fillText("-A", equilibriumX - params.amplitude - 15, centerY - 65);
                ctx.fillText("+A", equilibriumX + params.amplitude - 5, centerY - 65);
                ctx.strokeStyle = "#4ade80";
                ctx.setLineDash([
                    5,
                    5
                ]);
                ctx.beginPath();
                ctx.moveTo(equilibriumX, centerY - 70);
                ctx.lineTo(equilibriumX, centerY + 70);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.fillStyle = "#4ade80";
                ctx.fillText("VTCB (O)", equilibriumX - 20, centerY - 75);
                ctx.strokeStyle = "#cbd5e1";
                ctx.lineWidth = 2;
                drawSpring(ctx, wallX, centerY, massX - 25, centerY, 15, 15);
                ctx.fillStyle = "#3b82f6";
                ctx.fillRect(massX - 25, centerY - 25, 50, 50);
                ctx.strokeStyle = "#60a5fa";
                ctx.strokeRect(massX - 25, centerY - 25, 50, 50);
                drawArrow(ctx, massX, centerY, state.v * 0.5, "#22c55e", "v");
                drawArrow(ctx, massX, centerY + 35, state.force * 5, "#ef4444", "F_kv");
            } else {
                const centerX = width / 2;
                const ceilingY = 40;
                const equilibriumY = height / 2;
                const deltaL_m = params.mass * 9.8 / params.springConstant;
                const deltaL_px = deltaL_m * 100 * 1.5;
                const naturalY = equilibriumY - deltaL_px;
                const massY = equilibriumY + state.x;
                ctx.fillStyle = "#64748b";
                ctx.fillRect(centerX - 50, ceilingY - 10, 100, 10);
                ctx.strokeStyle = "#fbbf24";
                ctx.setLineDash([
                    4,
                    4
                ]);
                ctx.beginPath();
                ctx.moveTo(centerX - 120, naturalY);
                ctx.lineTo(centerX + 120, naturalY);
                ctx.stroke();
                ctx.fillStyle = "#fbbf24";
                ctx.textAlign = "right";
                ctx.fillText("Lò xo không giãn (L0)", centerX - 130, naturalY + 4);
                ctx.strokeStyle = "#4ade80";
                ctx.beginPath();
                ctx.moveTo(centerX - 120, equilibriumY);
                ctx.lineTo(centerX + 120, equilibriumY);
                ctx.stroke();
                ctx.fillStyle = "#4ade80";
                ctx.fillText("VTCB (O)", centerX - 130, equilibriumY + 4);
                ctx.setLineDash([]);
                if (deltaL_px > 10) {
                    const measureX = centerX + 100;
                    ctx.strokeStyle = "#94a3b8";
                    ctx.beginPath();
                    ctx.moveTo(measureX, naturalY);
                    ctx.lineTo(measureX + 10, naturalY);
                    ctx.moveTo(measureX, equilibriumY);
                    ctx.lineTo(measureX + 10, equilibriumY);
                    ctx.moveTo(measureX + 5, naturalY);
                    ctx.lineTo(measureX + 5, equilibriumY);
                    ctx.stroke();
                    ctx.fillStyle = "#f8fafc";
                    ctx.textAlign = "left";
                    ctx.fillText(`Δl₀ = ${(deltaL_m * 100).toFixed(1)} cm`, measureX + 15, naturalY + deltaL_px / 2);
                }
                ctx.textAlign = "left";
                ctx.strokeStyle = "rgba(250, 204, 21, 0.2)";
                ctx.setLineDash([
                    2,
                    2
                ]);
                ctx.beginPath();
                ctx.moveTo(centerX - 60, equilibriumY - params.amplitude);
                ctx.lineTo(centerX + 60, equilibriumY - params.amplitude);
                ctx.moveTo(centerX - 60, equilibriumY + params.amplitude);
                ctx.lineTo(centerX + 60, equilibriumY + params.amplitude);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.fillStyle = "rgba(250, 204, 21, 0.5)";
                ctx.font = "10px monospace";
                ctx.fillText("-A", centerX + 65, equilibriumY - params.amplitude + 3);
                ctx.fillText("+A", centerX + 65, equilibriumY + params.amplitude + 3);
                ctx.strokeStyle = "#cbd5e1";
                ctx.lineWidth = 2;
                drawSpring(ctx, centerX, ceilingY, centerX, massY - 25, 12, 15);
                ctx.fillStyle = "#3b82f6";
                ctx.beginPath();
                ctx.arc(centerX, massY, 25, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#60a5fa";
                ctx.stroke();
                drawArrow(ctx, centerX + 30, massY, state.v * 0.5, "#22c55e", "v");
                drawArrow(ctx, centerX - 30, massY, state.force * 5, "#ef4444", "F");
            }
            ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
            ctx.fillRect(10, 10, 140, 70);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, 140, 70);
            ctx.fillStyle = "#4ade80";
            ctx.font = "13px monospace";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, 30);
            ctx.fillStyle = "#38bdf8";
            ctx.fillText(`x = ${state.x.toFixed(1)} cm`, 20, 50);
            ctx.fillStyle = "#facc15";
            ctx.fillText(`v = ${state.v.toFixed(1)} cm/s`, 20, 70);
        }
    }["SpringOscillator.useCallback[draw]"], [
        layout,
        calculateState,
        params.amplitude,
        params.mass,
        params.springConstant
    ]);
    const drawEnergyGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpringOscillator.useCallback[drawEnergyGraph]": (ctx)=>{
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            const history = historyRef.current;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for(let x = 0; x < w; x += 50){
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
            }
            for(let y = 0; y < h; y += 30){
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
            }
            ctx.stroke();
            if (history.length < 2) return;
            const maxEnergy = 0.5 * params.springConstant * Math.pow(params.amplitude / 100, 2);
            const yScale = h * 0.8 / (maxEnergy || 1);
            const drawLine = {
                "SpringOscillator.useCallback[drawEnergyGraph].drawLine": (key, color)=>{
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    const stepX = w / 300;
                    const dataSlice = history.slice(-300);
                    dataSlice.forEach({
                        "SpringOscillator.useCallback[drawEnergyGraph].drawLine": (pt, i)=>{
                            const x = i * stepX;
                            const y = h - pt[key] * yScale - 20;
                            if (i === 0) ctx.moveTo(x, y);
                            else ctx.lineTo(x, y);
                        }
                    }["SpringOscillator.useCallback[drawEnergyGraph].drawLine"]);
                    ctx.stroke();
                }
            }["SpringOscillator.useCallback[drawEnergyGraph].drawLine"];
            drawLine("wd", "#22c55e");
            drawLine("wt", "#3b82f6");
            drawLine("w", "#eab308");
        }
    }["SpringOscillator.useCallback[drawEnergyGraph]"], [
        params.springConstant,
        params.amplitude
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpringOscillator.useEffect": ()=>{
            const render = {
                "SpringOscillator.useEffect.render": ()=>{
                    if (isPlaying) {
                        timeRef.current += dt;
                        setTime(timeRef.current);
                        const state = calculateState(timeRef.current);
                        historyRef.current.push({
                            t: timeRef.current,
                            x: state.x,
                            wd: state.wd,
                            wt: state.wt,
                            w: state.wTotal
                        });
                        if (historyRef.current.length > 500) historyRef.current.shift();
                    }
                    if (canvasRef.current) {
                        const ctx = canvasRef.current.getContext("2d");
                        if (ctx) draw(ctx, timeRef.current);
                    }
                    if (energyCanvasRef.current) {
                        const ctx = energyCanvasRef.current.getContext("2d");
                        if (ctx) drawEnergyGraph(ctx);
                    }
                    animationRef.current = requestAnimationFrame(render);
                }
            }["SpringOscillator.useEffect.render"];
            render();
            return ({
                "SpringOscillator.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["SpringOscillator.useEffect"];
        }
    }["SpringOscillator.useEffect"], [
        isPlaying,
        draw,
        calculateState,
        drawEnergyGraph
    ]);
    const handleStepForward = ()=>{
        setIsPlaying(false);
        timeRef.current += dt;
        setTime(timeRef.current);
        const state = calculateState(timeRef.current);
        historyRef.current.push({
            t: timeRef.current,
            x: state.x,
            wd: state.wd,
            wt: state.wt,
            w: state.wTotal
        });
    };
    const handleStepBackward = ()=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, timeRef.current - dt);
        setTime(timeRef.current);
        if (historyRef.current.length > 0) historyRef.current.pop();
    };
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        historyRef.current = [];
    };
    const deltaL = params.mass * 9.8 / params.springConstant;
    const vmax = omega * params.amplitude;
    const amax = omega * omega * params.amplitude;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#16213e] rounded-xl overflow-hidden border border-cyan-900/50 shadow-lg relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: 800,
                                height: 400,
                                className: "w-full h-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 right-2 text-xs text-gray-400 pointer-events-none",
                                children: [
                                    "Mô phỏng lò xo ",
                                    layout === "horizontal" ? "nằm ngang" : "thẳng đứng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                title: "Reset",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleStepBackward,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                title: "Lùi",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsPlaying(!isPlaying),
                                className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20" : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30"} text-white`,
                                title: isPlaying ? "Dừng" : "Chạy",
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 28,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 28,
                                    fill: "currentColor",
                                    className: "ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleStepForward,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                title: "Tiến",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#16213e] rounded-xl p-4 border border-cyan-900/50 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-bold text-orange-400 mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    " Đồ thị Năng lượng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: energyCanvasRef,
                                width: 800,
                                height: 200,
                                className: "w-full h-40 bg-slate-900 rounded border border-slate-700/50"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-6 mt-2 text-xs font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-1 bg-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 466,
                                                columnNumber: 15
                                            }, this),
                                            " Cơ năng (W)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-1 bg-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            " Động năng (Wđ)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-1 bg-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this),
                                            " Thế năng (Wt)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$control$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Cấu hình hệ thống",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLayout("horizontal"),
                                        className: `flex-1 py-3 px-2 rounded-lg text-sm font-semibold transition-all border ${layout === "horizontal" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-gray-400 hover:bg-slate-700"}`,
                                        children: "Nằm ngang"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLayout("vertical"),
                                        className: `flex-1 py-3 px-2 rounded-lg text-sm font-semibold transition-all border ${layout === "vertical" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-gray-400 hover:bg-slate-700"}`,
                                        children: "Thẳng đứng"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-400 mb-1 block",
                                                children: "Khối lượng m"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0.1",
                                                        max: "2",
                                                        step: "0.1",
                                                        value: params.mass,
                                                        onChange: (e)=>setParams({
                                                                ...params,
                                                                mass: Number(e.target.value)
                                                            }),
                                                        className: "flex-1 accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-16 text-right font-mono text-cyan-400 text-sm",
                                                        children: [
                                                            params.mass,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 498,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-400 mb-1 block",
                                                children: "Độ cứng k"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "10",
                                                        max: "200",
                                                        step: "5",
                                                        value: params.springConstant,
                                                        onChange: (e)=>setParams({
                                                                ...params,
                                                                springConstant: Number(e.target.value)
                                                            }),
                                                        className: "flex-1 accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-16 text-right font-mono text-cyan-400 text-sm",
                                                        children: [
                                                            params.springConstant,
                                                            " N/m"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-400 mb-1 block",
                                                children: "Biên độ A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 527,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "10",
                                                        max: "100",
                                                        value: params.amplitude,
                                                        onChange: (e)=>setParams({
                                                                ...params,
                                                                amplitude: Number(e.target.value)
                                                            }),
                                                        className: "flex-1 accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-16 text-right font-mono text-cyan-400 text-sm",
                                                        children: [
                                                            params.amplitude,
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-0 border border-cyan-900/50 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/50 p-3 border-b border-slate-700 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "w-4 h-4 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 545,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-200",
                                        children: "Đại lượng dao động"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Chu kỳ (T)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-white",
                                                children: [
                                                    period.toFixed(2),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "s"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 551,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Tần số (f)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 556,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-white",
                                                children: [
                                                    frequency.toFixed(2),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "Hz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 557,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Vận tốc Max"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 562,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-green-400",
                                                children: [
                                                    vmax.toFixed(1),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "cm/s"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Gia tốc Max"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 568,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-red-400",
                                                children: [
                                                    amax.toFixed(0),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "cm/s²"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 569,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this),
                                    layout === "vertical" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 bg-slate-900 p-2 rounded border border-slate-700 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-yellow-500 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Độ giãn lò xo (Δl₀)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 575,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-yellow-400",
                                                children: [
                                                    (deltaL * 100).toFixed(1),
                                                    " cm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 574,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#16213e] rounded-lg p-4 border border-cyan-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-2",
                                children: "Công thức"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-300 space-y-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "ω = √(k/m) = ",
                                            omega.toFixed(2),
                                            " rad/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "T = 2π√(m/k) = ",
                                            period.toFixed(2),
                                            " s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "F = -kx (Định luật Hooke)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/spring-oscillator.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, this);
}
_s(SpringOscillator, "q0wqd5Lu8UVWohhR1ChKfgWRbUI=");
_c = SpringOscillator;
var _c;
__turbopack_context__.k.register(_c, "SpringOscillator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/simple-pendulum.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimplePendulum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- COMPONENT CON: BẢNG ĐIỀU KHIỂN ---
const ControlPanel = ({ title, icon: Icon, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-sm overflow-hidden flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800/50 px-4 py-3 border-b border-slate-700/50 flex items-center gap-2",
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        className: "text-cyan-400"
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 10,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-slate-300 font-bold text-xs uppercase tracking-wider",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4 flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/simple-pendulum.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ControlPanel;
// --- COMPONENT CON: Ô THÔNG SỐ NHỎ ---
const StatBox = ({ label, value, unit, color = "text-slate-200" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900/50 rounded-lg p-2 border border-slate-700/50 flex flex-col items-center justify-center min-w-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] text-slate-500 uppercase font-semibold mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-lg font-mono font-bold ${color}`,
                children: [
                    value,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-normal text-slate-500",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/simple-pendulum.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = StatBox;
function SimplePendulum() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const energyCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const MAX_TIME = 20;
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        length: 100,
        gravity: 9.8,
        initialAngle: 30,
        mass: 1.0 // kg
    });
    const traceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const energyHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // --- TÍNH TOÁN VẬT LÝ ---
    const lengthM = params.length / 100;
    const omega = Math.sqrt(params.gravity / lengthM);
    const period = 2 * Math.PI / omega;
    const frequency = 1 / period;
    const thetaMax = params.initialAngle * Math.PI / 180;
    const dt = 0.016;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[calculateState]": (t)=>{
            const theta = thetaMax * Math.cos(omega * t);
            const alphaDeg = theta * 180 / Math.PI;
            const omegaInst = -thetaMax * omega * Math.sin(omega * t);
            const v = lengthM * omegaInst // m/s
            ;
            return {
                theta,
                alphaDeg,
                v
            };
        }
    }["SimplePendulum.useCallback[calculateState]"], [
        thetaMax,
        omega,
        lengthM
    ]);
    // --- VẼ MÔ PHỎNG ---
    const drawSim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[drawSim]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            const centerX = width / 2;
            const pivotY = 40;
            ctx.clearRect(0, 0, width, height);
            // Grid
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for(let i = 0; i < width; i += 40){
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
            }
            for(let i = 0; i < height; i += 40){
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
            }
            ctx.stroke();
            // Trục đối xứng
            ctx.strokeStyle = "#475569";
            ctx.setLineDash([
                6,
                6
            ]);
            ctx.beginPath();
            ctx.moveTo(centerX, pivotY);
            ctx.lineTo(centerX, height - 30);
            ctx.stroke();
            ctx.setLineDash([]);
            const state = calculateState(t);
            const visualLength = Math.min(width, height) * 0.65;
            const bobX = centerX + visualLength * Math.sin(state.theta);
            const bobY = pivotY + visualLength * Math.cos(state.theta);
            // Trace
            if (traceRef.current.length > 1) {
                ctx.strokeStyle = "rgba(244, 63, 94, 0.4)"; // Rose
                ctx.lineWidth = 4;
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(traceRef.current[0].x, traceRef.current[0].y);
                for(let i = 1; i < traceRef.current.length; i++){
                    ctx.lineTo(traceRef.current[i].x, traceRef.current[i].y);
                }
                ctx.stroke();
            }
            // Con lắc
            ctx.fillStyle = "#64748b";
            ctx.fillRect(centerX - 40, pivotY - 10, 80, 10); // Giá treo
            ctx.strokeStyle = "#cbd5e1";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, pivotY);
            ctx.lineTo(bobX, bobY);
            ctx.stroke(); // Dây
            const gradient = ctx.createRadialGradient(bobX - 5, bobY - 5, 2, bobX, bobY, 25);
            gradient.addColorStop(0, "#fb923c");
            gradient.addColorStop(1, "#ea580c");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = "#fff7ed";
            ctx.lineWidth = 2;
            ctx.stroke();
            // Góc alpha
            ctx.fillStyle = "#4ade80";
            ctx.font = "bold 14px monospace";
            ctx.textAlign = "center";
            ctx.fillText(`α = ${state.alphaDeg.toFixed(1)}°`, bobX, bobY + 45);
            // INFO PANEL TRÊN CANVAS
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(10, height - 100, 160, 90);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, height - 100, 160, 90);
            ctx.textAlign = "left";
            ctx.font = "13px monospace";
            ctx.fillStyle = "#e2e8f0";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, height - 75);
            ctx.fillStyle = "#22d3ee";
            ctx.fillText(`α = ${state.alphaDeg.toFixed(1)}°`, 20, height - 55);
            ctx.fillStyle = "#facc15";
            ctx.fillText(`v = ${(state.v * 100).toFixed(1)} cm/s`, 20, height - 35);
            ctx.fillStyle = "#a78bfa";
            ctx.fillText(`ω = ${omega.toFixed(2)} rad/s`, 20, height - 15);
            // Tác giả (Đã chỉnh sửa: Nhỏ và mờ hơn)
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Opacity thấp hơn (0.1)
            ctx.font = "12px sans-serif"; // Font nhỏ hơn (12px), bỏ in đậm
            ctx.textAlign = "right";
            ctx.fillText("Hô Hoàng Anh A1K50", width - 15, height - 15);
        }
    }["SimplePendulum.useCallback[drawSim]"], [
        calculateState,
        omega
    ]);
    // --- VẼ ĐỒ THỊ ---
    const drawEnergyGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[drawEnergyGraph]": (ctx)=>{
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            const history = energyHistoryRef.current;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for(let x = 0; x < w; x += 50){
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
            }
            for(let y = 0; y < h; y += 25){
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
            }
            ctx.stroke();
            if (history.length < 2) return;
            const maxE = Math.max(...history.map({
                "SimplePendulum.useCallback[drawEnergyGraph]": (pt)=>pt.w
            }["SimplePendulum.useCallback[drawEnergyGraph]"])) || 1;
            const yScale = (h - 30) / (maxE * 1.2);
            const drawLine = {
                "SimplePendulum.useCallback[drawEnergyGraph].drawLine": (key, color, width = 2)=>{
                    ctx.strokeStyle = color;
                    ctx.lineWidth = width;
                    ctx.beginPath();
                    const dataToDraw = history.slice(-400);
                    const stepX = w / (dataToDraw.length - 1 || 1);
                    dataToDraw.forEach({
                        "SimplePendulum.useCallback[drawEnergyGraph].drawLine": (pt, i)=>{
                            const x = i * stepX;
                            const y = h - 15 - pt[key] * yScale;
                            if (i === 0) ctx.moveTo(x, y);
                            else ctx.lineTo(x, y);
                        }
                    }["SimplePendulum.useCallback[drawEnergyGraph].drawLine"]);
                    ctx.stroke();
                }
            }["SimplePendulum.useCallback[drawEnergyGraph].drawLine"];
            drawLine('wt', '#3b82f6');
            drawLine('wd', '#22c55e');
            drawLine('w', '#eab308', 2.5);
        }
    }["SimplePendulum.useCallback[drawEnergyGraph]"], []);
    // --- ANIMATION ---
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[animate]": ()=>{
            if (!canvasRef.current) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;
            if (isPlaying) {
                timeRef.current += dt;
                if (timeRef.current > MAX_TIME) timeRef.current = 0;
                setTime(timeRef.current);
                const state = calculateState(timeRef.current);
                const width = ctx.canvas.width;
                const height = ctx.canvas.height;
                const visualLength = Math.min(width, height) * 0.65;
                const bobX = width / 2 + visualLength * Math.sin(state.theta);
                const bobY = 40 + visualLength * Math.cos(state.theta);
                traceRef.current.push({
                    x: bobX,
                    y: bobY
                });
                if (traceRef.current.length > 200) traceRef.current.shift();
                const wt = params.mass * 9.8 * lengthM * (1 - Math.cos(state.theta));
                const wd = 0.5 * params.mass * state.v * state.v;
                const wTotal = wt + wd;
                energyHistoryRef.current.push({
                    t: timeRef.current,
                    wd,
                    wt,
                    w: wTotal
                });
                if (energyHistoryRef.current.length > 400) energyHistoryRef.current.shift();
            }
            drawSim(ctx, timeRef.current);
            if (energyCanvasRef.current) drawEnergyGraph(energyCanvasRef.current.getContext("2d"));
            animationRef.current = requestAnimationFrame(animate);
        }
    }["SimplePendulum.useCallback[animate]"], [
        isPlaying,
        drawSim,
        drawEnergyGraph,
        calculateState,
        params,
        lengthM
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplePendulum.useEffect": ()=>{
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "SimplePendulum.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["SimplePendulum.useEffect"];
        }
    }["SimplePendulum.useEffect"], [
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplePendulum.useEffect": ()=>{
            if (!isPlaying) {
                if (canvasRef.current) drawSim(canvasRef.current.getContext("2d"), timeRef.current);
                if (energyCanvasRef.current) drawEnergyGraph(energyCanvasRef.current.getContext("2d"));
            }
        }
    }["SimplePendulum.useEffect"], [
        params,
        isPlaying,
        drawSim,
        drawEnergyGraph
    ]);
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        traceRef.current = [];
        energyHistoryRef.current = [];
    };
    const handleStep = (dir)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, timeRef.current + dir * 0.1);
        setTime(timeRef.current);
    };
    const currState = calculateState(time);
    const currWt = params.mass * 9.8 * lengthM * (1 - Math.cos(currState.theta));
    const currWd = 0.5 * params.mass * currState.v * currState.v;
    const currW = currWt + currWd;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: 800,
                                height: 380,
                                className: "w-full h-[380px] cursor-crosshair bg-[#0f172a]"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700 text-xs font-mono text-cyan-400 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    " Mô phỏng thời gian thực"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 shadow-md flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 267,
                                            columnNumber: 191
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 268,
                                            columnNumber: 200
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${isPlaying ? 'bg-amber-500 hover:bg-amber-400 text-white' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`,
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 24,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 270,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 24,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 270,
                                            columnNumber: 75
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 272,
                                            columnNumber: 199
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-slate-400 w-8",
                                        children: "0s"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1 h-2 bg-slate-700 rounded-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 h-full bg-cyan-500 rounded-full",
                                                style: {
                                                    width: `${time / MAX_TIME * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 277,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-md border-2 border-slate-800",
                                                style: {
                                                    left: `calc(${time / MAX_TIME * 100}% - 8px)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 278,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: MAX_TIME,
                                                step: "0.01",
                                                value: time,
                                                onChange: (e)=>{
                                                    setIsPlaying(false);
                                                    timeRef.current = Number(e.target.value);
                                                    setTime(timeRef.current);
                                                    traceRef.current = [];
                                                },
                                                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 279,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-slate-400 w-8 text-right",
                                        children: [
                                            MAX_TIME,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-yellow-500 uppercase flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 288,
                                                columnNumber: 101
                                            }, this),
                                            " Đồ thị Năng lượng"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 text-[10px] font-bold uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-[#eab308]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full bg-[#eab308]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 77
                                                    }, this),
                                                    " Cơ năng"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 290,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-[#22c55e]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full bg-[#22c55e]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 77
                                                    }, this),
                                                    " Động năng"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 291,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-[#3b82f6]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full bg-[#3b82f6]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 77
                                                    }, this),
                                                    " Thế năng"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-32 bg-[#0f172a] rounded-lg border border-slate-700 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    ref: energyCanvasRef,
                                    width: 800,
                                    height: 128,
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-1 space-y-4 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanel, {
                        title: "Đại lượng đo đạc",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                        label: "Thời gian",
                                        value: time.toFixed(2),
                                        unit: "s"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                        label: "Vị trí (α)",
                                        value: currState.alphaDeg.toFixed(1),
                                        unit: "°",
                                        color: "text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                        label: "Chu kỳ",
                                        value: period.toFixed(2),
                                        unit: "s",
                                        color: "text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                        label: "Tần số",
                                        value: frequency.toFixed(2),
                                        unit: "Hz",
                                        color: "text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-900/20 px-3 py-1.5 rounded border border-green-500/20 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-green-500 font-bold uppercase",
                                                children: "Động năng"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-green-400",
                                                children: [
                                                    currWd.toFixed(3),
                                                    " J"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 313,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-900/20 px-3 py-1.5 rounded border border-blue-500/20 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-blue-500 font-bold uppercase",
                                                children: "Thế năng"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 316,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-blue-400",
                                                children: [
                                                    currWt.toFixed(3),
                                                    " J"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 317,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-900/20 px-3 py-2 rounded border border-yellow-500/20 flex justify-between items-center mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-yellow-500 font-bold uppercase",
                                                children: "Cơ năng"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-yellow-400 text-lg",
                                                children: [
                                                    currW.toFixed(3),
                                                    " J"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 321,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 319,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanel, {
                        title: "Cấu hình hệ thống",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 129
                                                            }, this),
                                                            " Chiều dài (l)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 87
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono font-bold",
                                                        children: [
                                                            params.length,
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 169
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 329,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "50",
                                                max: "250",
                                                value: params.length,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        length: Number(e.target.value)
                                                    });
                                                    traceRef.current = [];
                                                    energyHistoryRef.current = [];
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 330,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 129
                                                            }, this),
                                                            " Gia tốc (g)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 87
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono font-bold",
                                                        children: [
                                                            params.gravity,
                                                            " m/s²"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 168
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 333,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "1.6",
                                                max: "20",
                                                step: "0.1",
                                                value: params.gravity,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        gravity: Number(e.target.value)
                                                    });
                                                    traceRef.current = [];
                                                    energyHistoryRef.current = [];
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 334,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 129
                                                            }, this),
                                                            " Góc đầu (α₀)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 87
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono font-bold",
                                                        children: [
                                                            params.initialAngle,
                                                            "°"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 172
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 337,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "5",
                                                max: "60",
                                                value: params.initialAngle,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        initialAngle: Number(e.target.value)
                                                    });
                                                    traceRef.current = [];
                                                    energyHistoryRef.current = [];
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 338,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 129
                                                            }, this),
                                                            " Khối lượng (m)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 87
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono font-bold",
                                                        children: [
                                                            params.mass,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 168
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 341,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.1",
                                                max: "5",
                                                step: "0.1",
                                                value: params.mass,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        mass: Number(e.target.value)
                                                    });
                                                    energyHistoryRef.current = [];
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 342,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-400 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "T = 2π√(l/g)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "W = mgl(1-cos(α₀))"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/simple-pendulum.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(SimplePendulum, "qQKEGGfFDhfob7V6BBJObXla5y4=");
_c2 = SimplePendulum;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ControlPanel");
__turbopack_context__.k.register(_c1, "StatBox");
__turbopack_context__.k.register(_c2, "SimplePendulum");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/damped-oscillation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DampedOscillation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hexagon.js [app-client] (ecmascript) <export default as Hexagon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- CẤU HÌNH MÔI TRƯỜNG ---
const ENVIRONMENTS = {
    vacuum: {
        name: "Chân không",
        beta: 0,
        color: "#94a3b8",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    air: {
        name: "Không khí",
        beta: 0.05,
        color: "#38bdf8",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"]
    },
    water: {
        name: "Nước",
        beta: 0.3,
        color: "#3b82f6",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
    },
    oil: {
        name: "Dầu nhớt",
        beta: 0.8,
        color: "#eab308",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__["Hexagon"]
    }
};
// --- GRID BACKGROUND COMPONENT ---
const GridBackground = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                id: "smallGrid",
                width: "20",
                height: "20",
                patternUnits: "userSpaceOnUse",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 20 0 L 0 0 0 20",
                    fill: "none",
                    stroke: "#1e293b",
                    strokeWidth: "0.5"
                }, void 0, false, {
                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                id: "grid",
                width: "100",
                height: "100",
                patternUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100",
                        height: "100",
                        fill: "url(#smallGrid)"
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 100 0 L 0 0 0 100",
                        fill: "none",
                        stroke: "#334155",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 37,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/damped-oscillation.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = GridBackground;
function DampedOscillation() {
    _s();
    // --- STATE ---
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [env, setEnv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("air");
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        A: 80,
        f: 0.5,
        phi: 0
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dt = 0.02;
    // --- TÍNH TOÁN ---
    const beta = ENVIRONMENTS[env].beta;
    const omega = 2 * Math.PI * params.f;
    // Giá trị tức thời
    const envelope = params.A * Math.exp(-beta * time);
    const x = envelope * Math.cos(omega * time + params.phi);
    // --- ANIMATION LOOP ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DampedOscillation.useEffect": ()=>{
            const render = {
                "DampedOscillation.useEffect.render": ()=>{
                    if (isPlaying) {
                        timeRef.current += dt;
                        if (timeRef.current > 20) {
                            setIsPlaying(false);
                            timeRef.current = 20;
                        }
                        setTime(timeRef.current);
                    }
                    animationRef.current = requestAnimationFrame(render);
                }
            }["DampedOscillation.useEffect.render"];
            render();
            return ({
                "DampedOscillation.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["DampedOscillation.useEffect"];
        }
    }["DampedOscillation.useEffect"], [
        isPlaying
    ]);
    // --- HANDLERS ---
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
    };
    const handleStep = (dir)=>{
        setIsPlaying(false);
        const newTime = Math.max(0, Math.min(20, timeRef.current + dir * 0.5));
        timeRef.current = newTime;
        setTime(newTime);
    };
    // --- VISUAL CONSTANTS ---
    const width = 800;
    const height = 400;
    const centerY = height / 2;
    const timeScale = 40;
    // Generate Path Data for SVG
    const generatePaths = ()=>{
        const points = [];
        const envTop = [];
        const envBot = [];
        for(let i = 0; i <= width; i += 2){
            const t_plot = i / timeScale;
            const val_env = params.A * Math.exp(-beta * t_plot);
            const val_wave = val_env * Math.cos(omega * t_plot + params.phi);
            points.push(`${i},${centerY - val_wave}`);
            envTop.push(`${i},${centerY - val_env}`);
            envBot.push(`${i},${centerY + val_env}`);
        }
        return {
            wave: `M ${points.join(" L ")}`,
            envTop: `M ${envTop.join(" L ")}`,
            envBot: `M ${envBot.join(" L ")}`
        };
    };
    const paths = generatePaths();
    const cx = time * timeScale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col md:flex-row justify-between items-center border-b border-slate-700 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "w-8 h-8 text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                                            children: "DAO ĐỘNG TẮT DẦN"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs",
                                            children: "Mô Phỏng Dạng Sóng & Đường Bao Biên Độ"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-4 md:mt-0 items-center bg-slate-800/50 p-2 rounded-2xl border border-slate-700/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                    title: "Làm mới (Reset)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleStep(-1),
                                    className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                    title: "Lùi 0.5s",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (time >= 20) {
                                            timeRef.current = 0;
                                            setTime(0);
                                        }
                                        setIsPlaying(!isPlaying);
                                    },
                                    className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20" : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30"} text-white`,
                                    title: isPlaying ? "Dừng" : "Chạy",
                                    children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        size: 28,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 28,
                                        fill: "currentColor",
                                        className: "ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleStep(1),
                                    className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                    title: "Tiến 0.5s",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 rounded-xl border border-slate-700 relative overflow-hidden shadow-lg h-[400px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-3 left-4 bg-slate-900/80 px-2 py-1 rounded border border-slate-700 text-xs text-cyan-400 font-mono flex items-center gap-2 z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                " Đồ thị li độ x(t)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-3 right-4 flex gap-4 text-[10px] font-mono bg-slate-900/80 p-2 rounded border border-slate-700 z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-3 rounded-full",
                                                            style: {
                                                                background: ENVIRONMENTS[env].color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Li độ x"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-1 border-t border-dashed border-red-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Đường bao biên độ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "100%",
                                            height: "100%",
                                            viewBox: `0 0 ${width} ${height}`,
                                            className: "bg-[#0f172a]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GridBackground, {}, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "100%",
                                                    height: "100%",
                                                    fill: "url(#grid)",
                                                    opacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "0",
                                                    y1: centerY,
                                                    x2: width,
                                                    y2: centerY,
                                                    stroke: "#475569",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "0",
                                                    x2: "2",
                                                    y2: height,
                                                    stroke: "#475569",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this),
                                                beta > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: paths.envTop,
                                                            fill: "none",
                                                            stroke: "#ef4444",
                                                            strokeDasharray: "4 4",
                                                            strokeWidth: "1",
                                                            opacity: "0.6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: paths.envBot,
                                                            fill: "none",
                                                            stroke: "#ef4444",
                                                            strokeDasharray: "4 4",
                                                            strokeWidth: "1",
                                                            opacity: "0.6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: paths.wave,
                                                    fill: "none",
                                                    stroke: ENVIRONMENTS[env].color,
                                                    strokeWidth: "2.5",
                                                    filter: "drop-shadow(0 0 4px currentColor)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    transform: `translate(${cx}, ${centerY - x})`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            r: "6",
                                                            fill: "#facc15",
                                                            stroke: "white",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "0",
                                                            y1: "0",
                                                            x2: "0",
                                                            y2: x,
                                                            stroke: "#facc15",
                                                            strokeDasharray: "2 2",
                                                            opacity: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: cx,
                                                    y1: "0",
                                                    x2: cx,
                                                    y2: height,
                                                    stroke: "#facc15",
                                                    strokeWidth: "1",
                                                    opacity: "0.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 rounded-lg p-3 border border-slate-700 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400 w-12",
                                            children: "0s"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "20",
                                            step: "0.01",
                                            value: time,
                                            onChange: (e)=>{
                                                const t = Number(e.target.value);
                                                setIsPlaying(false);
                                                timeRef.current = t;
                                                setTime(t);
                                            },
                                            className: "flex-1 accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400 w-12 text-right",
                                            children: "20s"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-slate-200 mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                    size: 18,
                                                    className: "text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this),
                                                " Chọn Môi Trường"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3 mb-6",
                                            children: Object.entries(ENVIRONMENTS).map(([key, val])=>{
                                                const IconComponent = val.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEnv(key);
                                                        handleReset();
                                                    },
                                                    className: `p-3 rounded-lg border transition-all text-xs font-bold text-left flex flex-col gap-1
                            ${env === key ? "bg-cyan-900/30 border-cyan-500 text-white ring-1 ring-cyan-500" : "bg-slate-700 border-transparent text-slate-400 hover:bg-slate-600"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                    size: 16,
                                                                    style: {
                                                                        color: val.color
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: val.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-normal opacity-70",
                                                            children: [
                                                                "β = ",
                                                                val.beta
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs mb-1 text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Tần số (f)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-400 font-mono",
                                                                    children: [
                                                                        params.f,
                                                                        " Hz"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "0.1",
                                                            max: "2",
                                                            step: "0.1",
                                                            value: params.f,
                                                            onChange: (e)=>setParams({
                                                                    ...params,
                                                                    f: Number(e.target.value)
                                                                }),
                                                            className: "w-full h-2 bg-slate-700 rounded-lg accent-cyan-500 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs mb-1 text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Biên độ đầu (A)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-400 font-mono",
                                                                    children: [
                                                                        params.A,
                                                                        " px"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "20",
                                                            max: "150",
                                                            value: params.A,
                                                            onChange: (e)=>setParams({
                                                                    ...params,
                                                                    A: Number(e.target.value)
                                                                }),
                                                            className: "w-full h-2 bg-slate-700 rounded-lg accent-cyan-500 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs mb-1 text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Pha ban đầu (φ)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-cyan-400 font-mono",
                                                                    children: [
                                                                        params.phi.toFixed(2),
                                                                        " rad"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "0",
                                                            max: "6.28",
                                                            step: "0.1",
                                                            value: params.phi,
                                                            onChange: (e)=>setParams({
                                                                    ...params,
                                                                    phi: Number(e.target.value)
                                                                }),
                                                            className: "w-full h-2 bg-slate-700 rounded-lg accent-cyan-500 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-700/50 p-3 border-b border-slate-700 flex justify-between items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        size: 14,
                                                        className: "text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Trạng thái tức thời"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 grid grid-cols-2 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-3 rounded border border-slate-700/50 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-500 uppercase tracking-wider mb-1",
                                                            children: "Thời gian (t)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xl font-mono font-bold text-white",
                                                            children: [
                                                                time.toFixed(2),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-normal text-slate-500 ml-1",
                                                                    children: "s"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 p-3 rounded border border-slate-700/50 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-500 uppercase tracking-wider mb-1",
                                                            children: "Li độ x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xl font-mono font-bold",
                                                            style: {
                                                                color: ENVIRONMENTS[env].color
                                                            },
                                                            children: x.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2 bg-slate-900 p-3 rounded border border-slate-700/50 flex justify-between items-center px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-400",
                                                            children: "Biên độ còn lại (Envelope)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono font-bold text-red-400",
                                                            children: [
                                                                envelope.toFixed(1),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: "px"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 43
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl border border-dashed border-slate-700 text-xs text-slate-500 font-mono space-y-1.5 bg-slate-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "PT: x = A·e^(-βt)·cos(ωt + φ)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "β = ",
                                                beta,
                                                " (Hệ số tắt dần)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Tần số f = ",
                                                params.f,
                                                " Hz"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/experiments/damped-oscillation.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/experiments/damped-oscillation.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(DampedOscillation, "4u8/3LtFkGsho81xVvuEKnufqag=");
_c1 = DampedOscillation;
var _c, _c1;
__turbopack_context__.k.register(_c, "GridBackground");
__turbopack_context__.k.register(_c1, "DampedOscillation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/mechanical-waves.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MechanicalWaves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_TIME = 20;
function MechanicalWaves() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [waveType, setWaveType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("transverse");
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        amplitude: 40,
        wavelength: 150,
        frequency: 0.5
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const omega = 2 * Math.PI * params.frequency;
    const k = 2 * Math.PI / params.wavelength;
    const velocity = params.frequency * params.wavelength;
    const dt = 0.016;
    const numParticles = 40;
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MechanicalWaves.useCallback[draw]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
            // Grid
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            for(let i = 0; i < width; i += 40){
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
                ctx.stroke();
            }
            for(let i = 0; i < height; i += 40){
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
                ctx.stroke();
            }
            const centerY = height / 2;
            const startX = 50;
            const spacing = (width - 100) / numParticles;
            if (waveType === "transverse") {
                ctx.strokeStyle = "#4ade80";
                ctx.setLineDash([
                    5,
                    5
                ]);
                ctx.beginPath();
                ctx.moveTo(startX, centerY);
                ctx.lineTo(width - 50, centerY);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.strokeStyle = "#22d3ee";
                ctx.lineWidth = 2;
                ctx.beginPath();
                for(let x = startX; x < width - 50; x++){
                    const y = centerY - params.amplitude * Math.sin(k * (x - startX) - omega * t);
                    if (x === startX) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
                for(let i = 0; i < numParticles; i++){
                    const x = startX + i * spacing;
                    const displacement = params.amplitude * Math.sin(k * (x - startX) - omega * t);
                    const y = centerY - displacement;
                    const vy = -params.amplitude * omega * Math.cos(k * (x - startX) - omega * t);
                    ctx.fillStyle = "#3b82f6";
                    ctx.beginPath();
                    ctx.arc(x, y, 6, 0, 2 * Math.PI);
                    ctx.fill();
                    if (Math.abs(vy) > 1) {
                        ctx.strokeStyle = "#22c55e";
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x, y + vy * 0.3);
                        ctx.stroke();
                    }
                    ctx.fillStyle = "rgba(74, 222, 128, 0.3)";
                    ctx.beginPath();
                    ctx.arc(x, centerY, 3, 0, 2 * Math.PI);
                    ctx.fill();
                }
                ctx.fillStyle = "#f97316";
                ctx.font = "14px sans-serif";
                ctx.fillText("→ Hướng truyền sóng", width / 2 - 60, 40);
                ctx.fillText("↕ Hướng dao động", width / 2 - 60, 60);
            } else {
                ctx.strokeStyle = "#4ade80";
                ctx.setLineDash([
                    5,
                    5
                ]);
                ctx.beginPath();
                ctx.moveTo(startX, centerY);
                ctx.lineTo(width - 50, centerY);
                ctx.stroke();
                ctx.setLineDash([]);
                for(let i = 0; i < numParticles; i++){
                    const baseX = startX + i * spacing;
                    const displacement = params.amplitude * 0.5 * Math.sin(k * (baseX - startX) - omega * t);
                    const x = baseX + displacement;
                    const vx = params.amplitude * 0.5 * omega * Math.cos(k * (baseX - startX) - omega * t);
                    const density = Math.cos(k * (baseX - startX) - omega * t);
                    const alpha = 0.5 + 0.5 * Math.abs(density);
                    ctx.fillStyle = density > 0 ? `rgba(239, 68, 68, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(x, centerY, 8, 0, 2 * Math.PI);
                    ctx.fill();
                    if (Math.abs(vx) > 1) {
                        ctx.strokeStyle = "#22c55e";
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(x, centerY);
                        ctx.lineTo(x + vx * 0.3, centerY);
                        ctx.stroke();
                    }
                    ctx.fillStyle = "rgba(74, 222, 128, 0.3)";
                    ctx.beginPath();
                    ctx.arc(baseX, centerY + 40, 3, 0, 2 * Math.PI);
                    ctx.fill();
                }
                ctx.fillStyle = "#ef4444";
                ctx.font = "12px monospace";
                ctx.fillText("Nén", width / 2 - 100, centerY - 50);
                ctx.fillStyle = "#3b82f6";
                ctx.fillText("Dãn", width / 2 + 50, centerY - 50);
                ctx.fillStyle = "#f97316";
                ctx.font = "14px sans-serif";
                ctx.fillText("→ Hướng truyền sóng", width / 2 - 60, 40);
                ctx.fillText("↔ Hướng dao động", width / 2 - 60, 60);
            }
            // Info panel
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(10, height - 100, 180, 90);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, height - 100, 180, 90);
            ctx.fillStyle = "#4ade80";
            ctx.font = "13px monospace";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, height - 80);
            ctx.fillText(`λ = ${params.wavelength} px`, 20, height - 60);
            ctx.fillText(`f = ${params.frequency} Hz`, 20, height - 40);
            ctx.fillText(`v = ${velocity.toFixed(0)} px/s`, 20, height - 20);
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.font = "12px monospace";
            ctx.textAlign = "right";
            ctx.fillText("Hô Hoàng Anh A1K50", width - 15, height - 15);
            ctx.textAlign = "left";
        }
    }["MechanicalWaves.useCallback[draw]"], [
        waveType,
        params.amplitude,
        params.wavelength,
        params.frequency,
        omega,
        k,
        velocity
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MechanicalWaves.useCallback[animate]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            timeRef.current += dt;
            if (timeRef.current > MAX_TIME) timeRef.current = MAX_TIME;
            setTime(timeRef.current);
            draw(ctx, timeRef.current);
            if (isPlaying && timeRef.current < MAX_TIME) {
                animationRef.current = requestAnimationFrame(animate);
            } else if (timeRef.current >= MAX_TIME) {
                setIsPlaying(false);
            }
        }
    }["MechanicalWaves.useCallback[animate]"], [
        isPlaying,
        draw
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MechanicalWaves.useEffect": ()=>{
            if (isPlaying) {
                animationRef.current = requestAnimationFrame(animate);
            }
            return ({
                "MechanicalWaves.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["MechanicalWaves.useEffect"];
        }
    }["MechanicalWaves.useEffect"], [
        isPlaying,
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MechanicalWaves.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            draw(ctx, timeRef.current);
        }
    }["MechanicalWaves.useEffect"], [
        params,
        waveType,
        draw
    ]);
    const handleStep = (direction)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, Math.min(MAX_TIME, timeRef.current + dt * direction * 10));
        setTime(timeRef.current);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, timeRef.current);
    };
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, 0);
    };
    const handleTimelineChange = (newTime)=>{
        setIsPlaying(false);
        timeRef.current = newTime;
        setTime(newTime);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, newTime);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 800,
                            height: 400,
                            className: "w-full rounded-lg bg-[#0f172a]"
                        }, void 0, false, {
                            fileName: "[project]/components/experiments/mechanical-waves.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Reset",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Lùi",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"} text-white`,
                                        title: isPlaying ? "Dừng" : "Chạy",
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 28,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 28,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Tiến",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-8",
                                children: "0s"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: MAX_TIME,
                                step: "0.01",
                                value: time,
                                onChange: (e)=>handleTimelineChange(Number(e.target.value)),
                                className: "flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-10 text-right",
                                children: [
                                    MAX_TIME,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-3 text-sm",
                                children: "Loại sóng"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setWaveType("transverse"),
                                        className: `flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all border ${waveType === "transverse" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`,
                                        children: "Sóng ngang"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setWaveType("longitudinal"),
                                        className: `flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all border ${waveType === "longitudinal" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`,
                                        children: "Sóng dọc"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-4 text-sm",
                                children: "Thông số sóng"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Biên độ A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.amplitude,
                                                            " px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "10",
                                                max: "80",
                                                value: params.amplitude,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        amplitude: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Bước sóng λ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.wavelength,
                                                            " px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "50",
                                                max: "300",
                                                value: params.wavelength,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        wavelength: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Tần số f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.frequency,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.1",
                                                max: "2",
                                                step: "0.1",
                                                value: params.frequency,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        frequency: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-2 text-sm",
                                children: "Công thức"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-300 space-y-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "y = A·sin(kx - ωt)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "v = λf = ",
                                            velocity.toFixed(0),
                                            " px/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "k = 2π/λ = ",
                                            k.toFixed(3),
                                            " rad/px"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "ω = 2πf = ",
                                            omega.toFixed(2),
                                            " rad/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/mechanical-waves.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
_s(MechanicalWaves, "+noXVsTqyu/bXBlkPgiwP6yFBnA=");
_c = MechanicalWaves;
var _c;
__turbopack_context__.k.register(_c, "MechanicalWaves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/sound-waves.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SoundWaveLab = ()=>{
    _s();
    // --- STATE QUẢN LÝ ---
    // 1. Audio Core
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFrozen, setIsFrozen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 2. Thông số đo đạc thời gian thực
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [amplitude, setAmplitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 3. Môi trường & Vật lý
    const [medium, setMedium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('air');
    const [velocity, setVelocity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(343);
    // 4. Máy phát sóng (Generator)
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [genFreq, setGenFreq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(440);
    const [genType, setGenType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sine');
    const [genVolume, setGenVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    // --- REFS (Audio API & Canvas) ---
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const microphoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oscillatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Buffer data refs
    const timeDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Uint8Array(0));
    const freqDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Uint8Array(0)); // Vẫn giữ để tính Pitch (Tần số)
    const MEDIUMS = {
        air: {
            name: 'Không khí (20°C)',
            v: 343
        },
        water: {
            name: 'Nước (25°C)',
            v: 1493
        },
        soil: {
            name: 'Đất',
            v: 3000
        }
    };
    const WAVEFORMS = {
        sine: 'Hình Sin',
        square: 'Hình Vuông',
        sawtooth: 'Răng Cưa',
        triangle: 'Tam Giác'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundWaveLab.useEffect": ()=>{
            setVelocity(MEDIUMS[medium].v);
        }
    }["SoundWaveLab.useEffect"], [
        medium
    ]);
    // --- XỬ LÝ THAY ĐỔI MÔI TRƯỜNG ---
    const handleMediumChange = (e)=>{
        const newMediumKey = e.target.value;
        const newVelocity = MEDIUMS[newMediumKey].v;
        const oldVelocity = velocity;
        // Tự động đổi tần số theo vận tốc (Mô phỏng vật lý)
        if (oldVelocity > 0) {
            const ratio = newVelocity / oldVelocity;
            let newFreq = genFreq * ratio;
            if (newFreq > 20000) newFreq = 20000;
            if (newFreq < 20) newFreq = 20;
            setGenFreq(newFreq);
            if (isGenerating && audioContextRef.current && oscillatorRef.current) {
                oscillatorRef.current.frequency.setValueAtTime(newFreq, audioContextRef.current.currentTime);
            }
        }
        setMedium(newMediumKey);
    };
    // --- AUDIO ENGINE ---
    const initAudio = async ()=>{
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContextRef.current?.state === 'suspended') {
            await audioContextRef.current.resume();
        }
    };
    const startMicrophone = async ()=>{
        try {
            await initAudio();
            if (!audioContextRef.current) return;
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 8192;
            analyserRef.current.smoothingTimeConstant = 0.8;
            microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
            microphoneRef.current.connect(analyserRef.current);
            setIsListening(true);
            setIsGenerating(false);
            setIsFrozen(false);
            draw();
        } catch (err) {
            alert("Cần cấp quyền Micro để đo sóng âm!");
        }
    };
    const stopMicrophone = ()=>{
        if (microphoneRef.current) {
            microphoneRef.current.disconnect();
            microphoneRef.current = null;
        }
        setIsListening(false);
    };
    const toggleMicrophone = ()=>{
        if (isListening) stopMicrophone();
        else {
            if (isGenerating) stopGenerator();
            startMicrophone();
        }
    };
    const startGenerator = async ()=>{
        await initAudio();
        if (!audioContextRef.current) return;
        if (isListening) stopMicrophone();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 8192;
        analyserRef.current.smoothingTimeConstant = 0.8;
        oscillatorRef.current = audioContextRef.current.createOscillator();
        gainNodeRef.current = audioContextRef.current.createGain();
        oscillatorRef.current.type = genType;
        oscillatorRef.current.frequency.setValueAtTime(genFreq, audioContextRef.current.currentTime);
        gainNodeRef.current.gain.setValueAtTime(genVolume, audioContextRef.current.currentTime);
        oscillatorRef.current.connect(gainNodeRef.current);
        gainNodeRef.current.connect(analyserRef.current);
        gainNodeRef.current.connect(audioContextRef.current.destination);
        oscillatorRef.current.start();
        setIsGenerating(true);
        setIsListening(false);
        setIsFrozen(false);
        draw();
    };
    const stopGenerator = ()=>{
        if (oscillatorRef.current) {
            try {
                oscillatorRef.current.stop();
            } catch (e) {}
            oscillatorRef.current.disconnect();
            oscillatorRef.current = null;
        }
        setIsGenerating(false);
    };
    const toggleGenerator = ()=>{
        if (isGenerating) stopGenerator();
        else {
            if (isListening) stopMicrophone();
            startGenerator();
        }
    };
    const updateGeneratorParams = (freq, type, vol)=>{
        if (audioContextRef.current && oscillatorRef.current && gainNodeRef.current) {
            oscillatorRef.current.frequency.setValueAtTime(freq, audioContextRef.current.currentTime);
            oscillatorRef.current.type = type;
            gainNodeRef.current.gain.setValueAtTime(vol, audioContextRef.current.currentTime);
        }
        setGenFreq(freq);
        setGenType(type);
        setGenVolume(vol);
    };
    // Hàm tính tần số (Pitch Detection)
    const getPitch = (buffer, sampleRate)=>{
        if (!analyserRef.current) return 0;
        let maxVal = -Infinity;
        let maxIndex = -1;
        for(let i = 1; i < buffer.length / 2; i++){
            if (buffer[i] > maxVal) {
                maxVal = buffer[i];
                maxIndex = i;
            }
        }
        if (maxVal < 120) return 0;
        const prev = buffer[maxIndex - 1];
        const next = buffer[maxIndex + 1];
        const curr = buffer[maxIndex];
        // Parabolic interpolation để tăng độ chính xác
        const trueIndex = maxIndex + (next - prev) / (2 * (2 * curr - next - prev));
        return trueIndex * sampleRate / analyserRef.current.fftSize;
    };
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SoundWaveLab.useCallback[draw]": ()=>{
            if (!analyserRef.current || !audioContextRef.current) return;
            if (!isFrozen) {
                requestRef.current = requestAnimationFrame(draw);
                const bufferLength = analyserRef.current.frequencyBinCount;
                if (timeDataRef.current.length !== bufferLength) {
                    timeDataRef.current = new Uint8Array(bufferLength);
                    freqDataRef.current = new Uint8Array(bufferLength);
                }
                analyserRef.current.getByteTimeDomainData(timeDataRef.current);
                analyserRef.current.getByteFrequencyData(freqDataRef.current); // Vẫn lấy dữ liệu tần số để tính Pitch
                const sampleRate = audioContextRef.current.sampleRate;
                const detectedF = getPitch(freqDataRef.current, sampleRate);
                if (isGenerating) {
                    setFrequency(genFreq);
                } else {
                    setFrequency({
                        "SoundWaveLab.useCallback[draw]": (prev)=>{
                            if (detectedF === 0) return 0;
                            return Math.abs(prev - detectedF) > 2 ? detectedF : prev * 0.95 + detectedF * 0.05;
                        }
                    }["SoundWaveLab.useCallback[draw]"]);
                }
                let sum = 0;
                for(let i = 0; i < bufferLength; i++)sum += freqDataRef.current[i];
                setAmplitude(sum / bufferLength / 255);
            }
            // CHỈ VẼ TIME DOMAIN (DAO ĐỘNG SÓNG)
            const canvasTime = canvasTimeRef.current;
            if (canvasTime) {
                const ctx = canvasTime.getContext('2d');
                if (ctx) {
                    const w = canvasTime.width;
                    const h = canvasTime.height;
                    const bufferLength = timeDataRef.current.length;
                    // Xóa nền
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(0, 0, w, h);
                    // Vẽ lưới Grid (Oscilloscope style)
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#1e293b'; // Màu lưới tối
                    ctx.beginPath();
                    // Lưới dọc
                    for(let x = 0; x <= w; x += 50){
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, h);
                    }
                    // Lưới ngang
                    for(let y = 0; y <= h; y += 50){
                        ctx.moveTo(0, y);
                        ctx.lineTo(w, y);
                    }
                    ctx.stroke();
                    // Trục chính giữa
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#334155';
                    ctx.beginPath();
                    ctx.moveTo(0, h / 2);
                    ctx.lineTo(w, h / 2);
                    ctx.stroke();
                    // Vẽ sóng
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = '#38bdf8'; // Màu xanh cyan sáng
                    ctx.beginPath();
                    let triggerPoint = 0;
                    let armed = false;
                    // Tìm điểm trigger để sóng đứng yên (Zero-crossing trigger)
                    for(let i = 0; i < bufferLength / 2; i++){
                        const v = timeDataRef.current[i];
                        if (!armed && v < 120) armed = true;
                        if (armed && v >= 128) {
                            triggerPoint = i;
                            break;
                        }
                    }
                    if (!armed) triggerPoint = 0;
                    const drawCount = bufferLength / 4;
                    const sliceWidth = w * 1.0 / drawCount;
                    let x = 0;
                    for(let i = 0; i < drawCount; i++){
                        const index = triggerPoint + i;
                        if (index >= bufferLength) break;
                        const v = timeDataRef.current[index] / 128.0;
                        const y = v * h / 2;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                        x += sliceWidth;
                    }
                    ctx.stroke();
                }
            }
        }
    }["SoundWaveLab.useCallback[draw]"], [
        isFrozen,
        isGenerating,
        genFreq
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundWaveLab.useEffect": ()=>{
            if (!isFrozen) {
                requestRef.current = requestAnimationFrame(draw);
            }
            return ({
                "SoundWaveLab.useEffect": ()=>{
                    if (requestRef.current) cancelAnimationFrame(requestRef.current);
                }
            })["SoundWaveLab.useEffect"];
        }
    }["SoundWaveLab.useEffect"], [
        draw,
        isFrozen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col md:flex-row justify-between items-center border-b border-slate-700 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "w-8 h-8 text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                                            children: "LAB VẬT LÝ SÓNG ÂM"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs",
                                            children: "Mô Phỏng & Phân Tích Kỹ Thuật Số"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-waves.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsFrozen(!isFrozen),
                                    className: `flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all shadow-md ${isFrozen ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/20' : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'}`,
                                    children: [
                                        isFrozen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 20,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 322,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 20,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 322,
                                            columnNumber: 67
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isFrozen ? "Tiếp tục" : "Dừng hình"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleMicrophone,
                                    disabled: isGenerating,
                                    className: `flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all shadow-md border border-transparent ${isListening ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-900/20' : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-500/20'} ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`,
                                    children: [
                                        isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 334,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 334,
                                            columnNumber: 52
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isListening ? "Tắt Mic" : "Bật Mic"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-waves.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/sound-waves.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg relative overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 left-4 text-xs font-mono text-cyan-400 flex items-center gap-2 bg-slate-900/50 px-2 py-1 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Dao động sóng (Time Domain)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: canvasTimeRef,
                                            width: 800,
                                            height: 320,
                                            className: "w-full h-80 bg-slate-900 rounded border border-slate-700/50 shadow-inner"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-slate-800 rounded-xl p-6 border transition-all duration-300 ${isGenerating ? 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]' : 'border-slate-700'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `font-semibold text-lg flex items-center gap-2 ${isGenerating ? 'text-green-400' : 'text-slate-400'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Máy phát sóng mẫu"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: toggleGenerator,
                                                    disabled: isListening,
                                                    className: `px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-md ${isGenerating ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-900/20' : 'bg-green-600 hover:bg-green-500 text-white shadow-green-900/20'} ${isListening ? 'opacity-50' : ''}`,
                                                    children: isGenerating ? "TẮT MÁY PHÁT" : "BẬT MÁY PHÁT"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-400 mb-1",
                                                            children: "Tần số (Hz)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "20",
                                                            max: "20000",
                                                            step: "1",
                                                            value: genFreq,
                                                            onChange: (e)=>updateGeneratorParams(Number(e.target.value), genType, genVolume),
                                                            className: "w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 372,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: genFreq.toFixed(0),
                                                                    onChange: (e)=>updateGeneratorParams(Number(e.target.value), genType, genVolume),
                                                                    className: "bg-slate-900 border border-slate-600 rounded px-2 py-1 text-sm w-24 text-center text-green-400 font-mono"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 374,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "20Hz - 20kHz"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-400 mb-1",
                                                            children: "Dạng sóng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex bg-slate-900 rounded-lg p-1 border border-slate-600",
                                                            children: Object.entries(WAVEFORMS).map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateGeneratorParams(genFreq, key, genVolume),
                                                                    className: `flex-1 text-xs py-2 rounded-md capitalize transition-all ${genType === key ? 'bg-green-600 text-white shadow' : 'text-slate-400 hover:text-white'}`,
                                                                    children: label
                                                                }, key, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs text-slate-400 mb-1",
                                                            children: "Âm lượng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                    size: 16,
                                                                    className: "text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "range",
                                                                    min: "0",
                                                                    max: "1",
                                                                    step: "0.01",
                                                                    value: genVolume,
                                                                    onChange: (e)=>updateGeneratorParams(genFreq, genType, Number(e.target.value)),
                                                                    className: "w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-waves.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl text-center relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 animate-pulse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full ${frequency > 20 ? isGenerating ? 'bg-green-500' : 'bg-red-500' : 'bg-slate-600'}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 399,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-slate-400 text-sm uppercase tracking-wider mb-2",
                                            children: isGenerating ? "Tần số đang phát" : "Tần số đo được"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 402,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-6xl font-mono font-bold tracking-tighter tabular-nums ${isGenerating ? 'text-green-400' : 'text-cyan-400'}`,
                                            children: [
                                                frequency > 0 ? frequency.toFixed(1) : "--",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl text-slate-500 ml-2",
                                                    children: "Hz"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 405,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 rounded-xl p-0 border border-slate-700 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-750 p-4 border-b border-slate-700 flex justify-between items-center bg-slate-700/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        size: 16,
                                                        className: "text-orange-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/sound-waves.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Thông số & Công thức Vật lý"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                                lineNumber: 413,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 412,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-slate-400 flex items-center gap-1 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 92
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Môi trường truyền âm"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: medium,
                                                            onChange: handleMediumChange,
                                                            className: "w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:border-cyan-500 outline-none",
                                                            children: Object.entries(MEDIUMS).map(([key, val])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: key,
                                                                    children: [
                                                                        val.name,
                                                                        " (v = ",
                                                                        val.v,
                                                                        " m/s)"
                                                                    ]
                                                                }, key, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 p-3 rounded-lg border border-slate-700 flex flex-col justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500 mb-1 uppercase tracking-wide",
                                                                    children: "Chu kỳ (T)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-mono text-orange-400 font-bold text-lg",
                                                                    children: frequency > 0 ? (1 / frequency).toFixed(4) : "--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: "giây (s)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 p-3 rounded-lg border border-slate-700 flex flex-col justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500 mb-1 uppercase tracking-wide",
                                                                    children: "Bước sóng (λ)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-mono text-yellow-400 font-bold text-lg",
                                                                    children: frequency > 0 ? (velocity / frequency).toFixed(3) : "--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: "mét (m)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 444,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 p-3 rounded-lg border border-slate-700 flex flex-col justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500 mb-1 uppercase tracking-wide",
                                                                    children: "Tần số góc (ω)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-mono text-pink-400 font-bold text-lg",
                                                                    children: frequency > 0 ? (2 * Math.PI * frequency).toFixed(1) : "--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: "rad/s"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 p-3 rounded-lg border border-slate-700 flex flex-col justify-center items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500 mb-1 uppercase tracking-wide",
                                                                    children: "Số sóng (k)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 454,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-mono text-blue-400 font-bold text-lg",
                                                                    children: frequency > 0 ? (2 * Math.PI * frequency / velocity).toFixed(2) : "--"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: "rad/m"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t border-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-slate-300 mb-2 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " CÔNG THỨC & CHÚ THÍCH"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900/50 p-3 rounded text-xs space-y-2 border border-slate-700/50 font-mono text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "x = A·cos(ωt + φ)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600",
                                                                            children: "// PT Dao động"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 469,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "ω = 2πf"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 472,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600",
                                                                            children: "// Tần số góc"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "T = 1/f"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600",
                                                                            children: "// Chu kỳ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "λ = v/f = v·T"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600",
                                                                            children: "// Bước sóng"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 481,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 479,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "k = 2π/λ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 484,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-slate-600",
                                                                            children: "// Số sóng"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-yellow-500/80 pt-1 border-t border-slate-800",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "u = A·cos(ωt - kx)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "// PT Sóng"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 417,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-waves.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/sound-waves.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/experiments/sound-waves.tsx",
            lineNumber: 298,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/experiments/sound-waves.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SoundWaveLab, "628vuOC0EBg4fz70wNNuJ46zWoE=");
_c = SoundWaveLab;
const __TURBOPACK__default__export__ = SoundWaveLab;
var _c;
__turbopack_context__.k.register(_c, "SoundWaveLab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/wave-interference.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveInterference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_TIME = 20;
function WaveInterference() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showNodalLines, setShowNodalLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [view3D, setView3D] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        frequency: 0.8,
        amplitude: 1.0,
        sourceDistance: 120,
        wavelength: 40
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const omega = 2 * Math.PI * params.frequency;
    const k = 2 * Math.PI / params.wavelength;
    const dt = 1 / 60;
    const calculateWaveHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[calculateWaveHeight]": (x, y, s1x, s1y, s2x, s2y, t)=>{
            const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2);
            const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2);
            const amp1 = params.amplitude / Math.sqrt(1 + d1 * 0.02);
            const amp2 = params.amplitude / Math.sqrt(1 + d2 * 0.02);
            const wave1 = amp1 * Math.sin(k * d1 - omega * t);
            const wave2 = amp2 * Math.sin(k * d2 - omega * t);
            return wave1 + wave2;
        }
    }["WaveInterference.useCallback[calculateWaveHeight]"], [
        k,
        omega,
        params.amplitude
    ]);
    const getNodalLinePoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[getNodalLinePoints]": (width, height, s1x, s1y, s2x, s2y, order)=>{
            const points = [];
            const pathDiff = (order + 0.5) * params.wavelength;
            for(let x = 0; x < width; x += 3){
                for(let y = 0; y < height; y += 3){
                    const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2);
                    const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2);
                    const diff = Math.abs(d1 - d2);
                    if (Math.abs(diff - pathDiff) < 3) {
                        points.push({
                            x,
                            y
                        });
                    }
                }
            }
            return points;
        }
    }["WaveInterference.useCallback[getNodalLinePoints]"], [
        params.wavelength
    ]);
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[draw]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            const centerY = height / 2;
            const source1 = {
                x: 80,
                y: centerY - params.sourceDistance / 2
            };
            const source2 = {
                x: 80,
                y: centerY + params.sourceDistance / 2
            };
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;
            const resolution = view3D ? 3 : 2;
            if (view3D) {
                ctx.fillStyle = "#0f172a";
                ctx.fillRect(0, 0, width, height);
                const perspectiveScale = 0.6;
                const horizonY = height * 0.2;
                const gridSpacing = 8;
                for(let z = 0; z < height * 1.5; z += gridSpacing){
                    const perspY = horizonY + z * perspectiveScale;
                    if (perspY > height) continue;
                    const scale = 0.3 + z / (height * 1.5) * 0.7;
                    for(let x = 0; x < width; x += gridSpacing){
                        const worldX = (x - width / 2) / scale + width / 2;
                        const worldZ = z;
                        const waveHeight = calculateWaveHeight(worldX, worldZ, source1.x, source1.y, source2.x, source2.y, t);
                        const normalizedHeight = (waveHeight + 2 * params.amplitude) / (4 * params.amplitude);
                        const r = Math.floor(30 + normalizedHeight * 50);
                        const g = Math.floor(100 + normalizedHeight * 155);
                        const b = Math.floor(180 + normalizedHeight * 75);
                        const screenX = width / 2 + (x - width / 2) * scale;
                        const screenY = perspY - waveHeight * 15 * scale;
                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                        ctx.fillRect(screenX - 2, screenY - 2, 4, 4);
                    }
                }
            } else {
                for(let y = 0; y < height; y += resolution){
                    for(let x = 0; x < width; x += resolution){
                        const waveHeight = calculateWaveHeight(x, y, source1.x, source1.y, source2.x, source2.y, t);
                        const maxAmp = 2 * params.amplitude;
                        const normalizedHeight = (waveHeight + maxAmp) / (2 * maxAmp);
                        let r, g, b;
                        if (normalizedHeight > 0.5) {
                            const intensity = (normalizedHeight - 0.5) * 2;
                            r = Math.floor(50 + intensity * 205);
                            g = Math.floor(150 + intensity * 105);
                            b = Math.floor(200 + intensity * 55);
                        } else {
                            const intensity = normalizedHeight * 2;
                            r = Math.floor(5 + intensity * 45);
                            g = Math.floor(20 + intensity * 130);
                            b = Math.floor(60 + intensity * 140);
                        }
                        for(let dy = 0; dy < resolution && y + dy < height; dy++){
                            for(let dx = 0; dx < resolution && x + dx < width; dx++){
                                const idx = ((y + dy) * width + (x + dx)) * 4;
                                data[idx] = r;
                                data[idx + 1] = g;
                                data[idx + 2] = b;
                                data[idx + 3] = 255;
                            }
                        }
                    }
                }
                ctx.putImageData(imageData, 0, 0);
            }
            if (showNodalLines && !view3D) {
                ctx.strokeStyle = "rgba(255, 100, 100, 0.8)";
                ctx.lineWidth = 2;
                ctx.setLineDash([
                    5,
                    5
                ]);
                const maxOrder = Math.floor(params.sourceDistance / params.wavelength) + 2;
                for(let order = 0; order <= maxOrder; order++){
                    const points = getNodalLinePoints(width, height, source1.x, source1.y, source2.x, source2.y, order);
                    if (points.length > 0) {
                        const upperPoints = points.filter({
                            "WaveInterference.useCallback[draw].upperPoints": (p)=>p.y < centerY
                        }["WaveInterference.useCallback[draw].upperPoints"]).sort({
                            "WaveInterference.useCallback[draw].upperPoints": (a, b)=>a.x - b.x
                        }["WaveInterference.useCallback[draw].upperPoints"]);
                        const lowerPoints = points.filter({
                            "WaveInterference.useCallback[draw].lowerPoints": (p)=>p.y >= centerY
                        }["WaveInterference.useCallback[draw].lowerPoints"]).sort({
                            "WaveInterference.useCallback[draw].lowerPoints": (a, b)=>a.x - b.x
                        }["WaveInterference.useCallback[draw].lowerPoints"]);
                        if (upperPoints.length > 1) {
                            ctx.beginPath();
                            ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
                            for(let i = 1; i < upperPoints.length; i++){
                                ctx.lineTo(upperPoints[i].x, upperPoints[i].y);
                            }
                            ctx.stroke();
                        }
                        if (lowerPoints.length > 1) {
                            ctx.beginPath();
                            ctx.moveTo(lowerPoints[0].x, lowerPoints[0].y);
                            for(let i = 1; i < lowerPoints.length; i++){
                                ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y);
                            }
                            ctx.stroke();
                        }
                    }
                }
                ctx.strokeStyle = "rgba(100, 255, 100, 0.8)";
                ctx.setLineDash([
                    8,
                    4
                ]);
                ctx.beginPath();
                ctx.moveTo(source1.x, centerY);
                ctx.lineTo(width, centerY);
                ctx.stroke();
                ctx.setLineDash([]);
            }
            // Sources
            const gradient1 = ctx.createRadialGradient(source1.x, source1.y, 0, source1.x, source1.y, 20);
            gradient1.addColorStop(0, "rgba(255, 100, 100, 1)");
            gradient1.addColorStop(0.5, "rgba(255, 100, 100, 0.5)");
            gradient1.addColorStop(1, "rgba(255, 100, 100, 0)");
            ctx.fillStyle = gradient1;
            ctx.beginPath();
            ctx.arc(source1.x, source1.y, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "#ff6b6b";
            ctx.beginPath();
            ctx.arc(source1.x, source1.y, 8, 0, 2 * Math.PI);
            ctx.fill();
            const gradient2 = ctx.createRadialGradient(source2.x, source2.y, 0, source2.x, source2.y, 20);
            gradient2.addColorStop(0, "rgba(255, 100, 100, 1)");
            gradient2.addColorStop(0.5, "rgba(255, 100, 100, 0.5)");
            gradient2.addColorStop(1, "rgba(255, 100, 100, 0)");
            ctx.fillStyle = gradient2;
            ctx.beginPath();
            ctx.arc(source2.x, source2.y, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "#ff6b6b";
            ctx.beginPath();
            ctx.arc(source2.x, source2.y, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "bold 14px monospace";
            ctx.fillText("S₁", source1.x - 25, source1.y + 5);
            ctx.fillText("S₂", source2.x - 25, source2.y + 5);
            // Info panel
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(10, 10, 160, 100);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, 160, 100);
            ctx.fillStyle = "#4ade80";
            ctx.font = "13px monospace";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, 32);
            ctx.fillText(`f = ${params.frequency.toFixed(1)} Hz`, 20, 52);
            ctx.fillText(`λ = ${params.wavelength} px`, 20, 72);
            ctx.fillText(`d = ${params.sourceDistance} px`, 20, 92);
            // Legend
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(ctx.canvas.width - 170, 10, 160, 70);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(ctx.canvas.width - 170, 10, 160, 70);
            ctx.fillStyle = "#22d3ee";
            ctx.fillRect(ctx.canvas.width - 160, 25, 20, 12);
            ctx.fillStyle = "#fff";
            ctx.font = "12px monospace";
            ctx.fillText("Cực đại (sáng)", ctx.canvas.width - 135, 35);
            ctx.fillStyle = "#0a2540";
            ctx.fillRect(ctx.canvas.width - 160, 45, 20, 12);
            ctx.fillStyle = "#fff";
            ctx.fillText("Cực tiểu (tối)", ctx.canvas.width - 135, 55);
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.font = "12px monospace";
            ctx.textAlign = "right";
            ctx.fillText("Hô Hoàng Anh A1K50", width - 15, height - 15);
            ctx.textAlign = "left";
        }
    }["WaveInterference.useCallback[draw]"], [
        params.sourceDistance,
        params.frequency,
        params.wavelength,
        params.amplitude,
        view3D,
        showNodalLines,
        calculateWaveHeight,
        getNodalLinePoints
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[animate]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            timeRef.current += dt;
            if (timeRef.current > MAX_TIME) timeRef.current = MAX_TIME;
            setTime(timeRef.current);
            draw(ctx, timeRef.current);
            if (isPlaying && timeRef.current < MAX_TIME) {
                animationRef.current = requestAnimationFrame(animate);
            } else if (timeRef.current >= MAX_TIME) {
                setIsPlaying(false);
            }
        }
    }["WaveInterference.useCallback[animate]"], [
        isPlaying,
        draw,
        dt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveInterference.useEffect": ()=>{
            if (isPlaying) {
                animationRef.current = requestAnimationFrame(animate);
            }
            return ({
                "WaveInterference.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["WaveInterference.useEffect"];
        }
    }["WaveInterference.useEffect"], [
        isPlaying,
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveInterference.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            draw(ctx, timeRef.current);
        }
    }["WaveInterference.useEffect"], [
        params,
        view3D,
        showNodalLines,
        draw
    ]);
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, 0);
    };
    const handleStep = (direction)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, Math.min(MAX_TIME, timeRef.current + dt * direction * 10));
        setTime(timeRef.current);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, timeRef.current);
    };
    const handleTimelineChange = (newTime)=>{
        setIsPlaying(false);
        timeRef.current = newTime;
        setTime(newTime);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, newTime);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-3 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-1 border border-slate-700/50 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 800,
                            height: 450,
                            className: "w-full rounded-lg bg-[#0f172a]"
                        }, void 0, false, {
                            fileName: "[project]/components/experiments/wave-interference.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Reset",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Lùi",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"} text-white`,
                                        title: isPlaying ? "Dừng" : "Chạy",
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 28,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 383,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 28,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Tiến",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-8",
                                children: "0s"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: MAX_TIME,
                                step: "0.01",
                                value: time,
                                onChange: (e)=>handleTimelineChange(Number(e.target.value)),
                                className: "flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-10 text-right",
                                children: [
                                    MAX_TIME,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/wave-interference.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-bold mb-4 flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    "Thông số sóng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Tần số f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.frequency.toFixed(1),
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.3",
                                                max: "2.0",
                                                step: "0.1",
                                                value: params.frequency,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        frequency: Number(e.target.value)
                                                    }),
                                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 423,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Biên độ A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: params.amplitude.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 435,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.5",
                                                max: "2.0",
                                                step: "0.1",
                                                value: params.amplitude,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        amplitude: Number(e.target.value)
                                                    }),
                                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Bước sóng λ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.wavelength,
                                                            " px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 451,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "20",
                                                max: "80",
                                                step: "5",
                                                value: params.wavelength,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        wavelength: Number(e.target.value)
                                                    }),
                                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 450,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Khoảng cách nguồn d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.sourceDistance,
                                                            " px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "40",
                                                max: "200",
                                                step: "10",
                                                value: params.sourceDistance,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        sourceDistance: Number(e.target.value)
                                                    }),
                                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-bold mb-3 text-sm",
                                children: "Tùy chọn hiển thị"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-xs flex items-center gap-2",
                                                children: [
                                                    showNodalLines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 65
                                                    }, this),
                                                    "Đường nút (Nodal Lines)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setShowNodalLines(!showNodalLines),
                                                className: `w-10 h-5 rounded-full transition-all cursor-pointer ${showNodalLines ? "bg-cyan-600" : "bg-slate-600"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-0.5 ${showNodalLines ? "translate-x-5" : "translate-x-0.5"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-xs",
                                                children: "Chế độ 3D"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setView3D(!view3D),
                                                className: `w-10 h-5 rounded-full transition-all cursor-pointer ${view3D ? "bg-cyan-600" : "bg-slate-600"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-0.5 ${view3D ? "translate-x-5" : "translate-x-0.5"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-bold mb-3 text-sm",
                                children: "Điều kiện giao thoa"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-300 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-cyan-400 rounded-full mt-0.5 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-semibold",
                                                        children: "Cực đại:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[10px]",
                                                        children: "Δd = kλ (k = 0, ±1, ±2...)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-slate-600 rounded-full mt-0.5 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 536,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 font-semibold",
                                                        children: "Cực tiểu:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[10px]",
                                                        children: "Δd = (k+½)λ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 537,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/wave-interference.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/wave-interference.tsx",
        lineNumber: 351,
        columnNumber: 5
    }, this);
}
_s(WaveInterference, "Hpy5OYNXgty7M9iugr2IzFhodlY=");
_c = WaveInterference;
var _c;
__turbopack_context__.k.register(_c, "WaveInterference");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/standing-waves.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StandingWaves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_TIME = 20;
function StandingWaves() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [endType, setEndType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("fixed-fixed");
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        frequency: 1,
        amplitude: 50,
        harmonic: 3
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const omega = 2 * Math.PI * params.frequency;
    const dt = 0.016;
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StandingWaves.useCallback[draw]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
            // Grid
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            for(let i = 0; i < width; i += 40){
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
                ctx.stroke();
            }
            for(let i = 0; i < height; i += 40){
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
                ctx.stroke();
            }
            const centerY = height / 2;
            const startX = 80;
            const endX = width - 80;
            const stringLength = endX - startX;
            const n = params.harmonic;
            const A = params.amplitude;
            // End supports
            ctx.fillStyle = "#64748b";
            ctx.fillRect(startX - 15, centerY - 40, 15, 80);
            if (endType === "fixed-fixed") {
                ctx.fillRect(endX, centerY - 40, 15, 80);
            } else {
                ctx.strokeStyle = "#64748b";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(endX + 10, centerY, 15, 0, 2 * Math.PI);
                ctx.stroke();
            }
            // Equilibrium line
            ctx.strokeStyle = "#4ade80";
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.beginPath();
            ctx.moveTo(startX, centerY);
            ctx.lineTo(endX, centerY);
            ctx.stroke();
            ctx.setLineDash([]);
            // Calculate wavelength
            let wavelength;
            if (endType === "fixed-fixed") {
                wavelength = 2 * stringLength / n;
            } else {
                wavelength = 4 * stringLength / (2 * n - 1);
            }
            const k = 2 * Math.PI / wavelength;
            const getEnvelope = {
                "StandingWaves.useCallback[draw].getEnvelope": (relX)=>{
                    return A * Math.abs(Math.sin(k * relX));
                }
            }["StandingWaves.useCallback[draw].getEnvelope"];
            const getWaveY = {
                "StandingWaves.useCallback[draw].getWaveY": (relX, time)=>{
                    return A * Math.sin(k * relX) * Math.cos(omega * time);
                }
            }["StandingWaves.useCallback[draw].getWaveY"];
            // Envelope
            ctx.strokeStyle = "rgba(239, 68, 68, 0.6)";
            ctx.lineWidth = 2;
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.beginPath();
            for(let x = startX; x <= endX; x++){
                const relX = x - startX;
                const envelope = getEnvelope(relX);
                const y = centerY - envelope;
                if (x === startX) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.beginPath();
            for(let x = startX; x <= endX; x++){
                const relX = x - startX;
                const envelope = getEnvelope(relX);
                const y = centerY + envelope;
                if (x === startX) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.setLineDash([]);
            // Node and antinode positions
            const nodePositions = [];
            const antinodePositions = [];
            if (endType === "fixed-fixed") {
                for(let m = 0; m <= n; m++){
                    const nodeX = startX + m * (wavelength / 2);
                    if (nodeX <= endX + 1) nodePositions.push(nodeX);
                }
                for(let m = 0; m < n; m++){
                    const antinodeX = startX + (2 * m + 1) * (wavelength / 4);
                    if (antinodeX <= endX + 1) antinodePositions.push(antinodeX);
                }
            } else {
                for(let m = 0; m < n; m++){
                    const nodeX = startX + m * (wavelength / 2);
                    if (nodeX <= endX + 1) nodePositions.push(nodeX);
                }
                for(let m = 0; m < n; m++){
                    const antinodeX = startX + (2 * m + 1) * (wavelength / 4);
                    if (antinodeX <= endX + 1) antinodePositions.push(antinodeX);
                }
            }
            // Wave
            ctx.strokeStyle = "#22d3ee";
            ctx.lineWidth = 3;
            ctx.beginPath();
            for(let x = startX; x <= endX; x++){
                const relX = x - startX;
                const y = centerY - getWaveY(relX, t);
                if (x === startX) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            // Nodes (red) - STATIC at centerY
            ctx.fillStyle = "#ef4444";
            for (const nodeX of nodePositions){
                ctx.beginPath();
                ctx.arc(nodeX, centerY, 8, 0, 2 * Math.PI);
                ctx.fill();
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            // Antinodes (green) - MOVING with wave
            ctx.fillStyle = "#4ade80";
            for (const antinodeX of antinodePositions){
                const relX = antinodeX - startX;
                const antinodeY = centerY - getWaveY(relX, t);
                ctx.beginPath();
                ctx.arc(antinodeX, antinodeY, 8, 0, 2 * Math.PI);
                ctx.fill();
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            // Info panel
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(10, 10, 170, 100);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, 170, 100);
            ctx.fillStyle = "#fff";
            ctx.font = "13px monospace";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, 30);
            ctx.fillText(`Họa âm bậc n = ${n}`, 20, 50);
            ctx.fillText(`λ = ${wavelength.toFixed(0)} px`, 20, 70);
            ctx.fillText(endType === "fixed-fixed" ? `L = nλ/2` : `L = (2n-1)λ/4`, 20, 90);
            // Legend
            ctx.fillStyle = "#fff";
            ctx.font = "12px monospace";
            ctx.fillText(endType === "fixed-fixed" ? "Hai đầu cố định" : "Một đầu cố định - Một đầu tự do", startX, height - 45);
            ctx.fillStyle = "#ef4444";
            ctx.fillText("● Nút (N) - đứng yên", startX + 220, height - 45);
            ctx.fillStyle = "#4ade80";
            ctx.fillText("● Bụng (B) - dao động", startX + 420, height - 45);
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.font = "12px monospace";
            ctx.textAlign = "right";
            ctx.fillText("Hô Hoàng Anh A1K50", width - 15, height - 15);
            ctx.textAlign = "left";
        }
    }["StandingWaves.useCallback[draw]"], [
        endType,
        params.harmonic,
        params.amplitude,
        params.frequency,
        omega
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StandingWaves.useCallback[animate]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            timeRef.current += dt;
            if (timeRef.current > MAX_TIME) timeRef.current = MAX_TIME;
            setTime(timeRef.current);
            draw(ctx, timeRef.current);
            if (isPlaying && timeRef.current < MAX_TIME) {
                animationRef.current = requestAnimationFrame(animate);
            } else if (timeRef.current >= MAX_TIME) {
                setIsPlaying(false);
            }
        }
    }["StandingWaves.useCallback[animate]"], [
        isPlaying,
        draw
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandingWaves.useEffect": ()=>{
            if (isPlaying) {
                animationRef.current = requestAnimationFrame(animate);
            }
            return ({
                "StandingWaves.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["StandingWaves.useEffect"];
        }
    }["StandingWaves.useEffect"], [
        isPlaying,
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandingWaves.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            draw(ctx, timeRef.current);
        }
    }["StandingWaves.useEffect"], [
        params,
        endType,
        draw
    ]);
    const handleStep = (direction)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, Math.min(MAX_TIME, timeRef.current + dt * direction * 10));
        setTime(timeRef.current);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, timeRef.current);
    };
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, 0);
    };
    const handleTimelineChange = (newTime)=>{
        setIsPlaying(false);
        timeRef.current = newTime;
        setTime(newTime);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        draw(ctx, newTime);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 800,
                            height: 400,
                            className: "w-full rounded-lg bg-[#0f172a]"
                        }, void 0, false, {
                            fileName: "[project]/components/experiments/standing-waves.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/standing-waves.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Reset",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Lùi",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"} text-white`,
                                        title: isPlaying ? "Dừng" : "Chạy",
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 28,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 28,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                        title: "Tiến",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-8",
                                children: "0s"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: MAX_TIME,
                                step: "0.01",
                                value: time,
                                onChange: (e)=>handleTimelineChange(Number(e.target.value)),
                                className: "flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400 font-mono w-10 text-right",
                                children: [
                                    MAX_TIME,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/standing-waves.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/standing-waves.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-3 text-sm",
                                children: "Điều kiện biên"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEndType("fixed-fixed"),
                                        className: `py-3 px-4 rounded-lg text-sm font-semibold transition-all border ${endType === "fixed-fixed" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`,
                                        children: "Hai đầu cố định"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEndType("fixed-free"),
                                        className: `py-3 px-4 rounded-lg text-sm font-semibold transition-all border ${endType === "fixed-free" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`,
                                        children: "Một đầu cố định - Một đầu tự do"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/standing-waves.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-4 text-sm",
                                children: "Thông số"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Họa âm bậc n"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            "n = ",
                                                            params.harmonic
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "1",
                                                max: "7",
                                                value: params.harmonic,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        harmonic: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Biên độ A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.amplitude,
                                                            " px"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "20",
                                                max: "80",
                                                value: params.amplitude,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        amplitude: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: "Tần số f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: [
                                                            params.frequency,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.3",
                                                max: "2",
                                                step: "0.1",
                                                value: params.frequency,
                                                onChange: (e)=>setParams({
                                                        ...params,
                                                        frequency: Number(e.target.value)
                                                    }),
                                                className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/standing-waves.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-2 text-sm",
                                children: "Công thức sóng dừng"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-300 space-y-2 font-mono",
                                children: endType === "fixed-fixed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-yellow-400",
                                            children: "Hai đầu cố định:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "L = n·λ/2 (n = 1, 2, 3...)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "f_n = n·f₁"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Số bụng = n, Số nút = n + 1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-yellow-400",
                                            children: "Một đầu cố định:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "L = (2n-1)·λ/4 (n = 1, 2, 3...)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "f_n = (2n-1)·f₁"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Số bụng = n, Số nút = n"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/standing-waves.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/standing-waves.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/standing-waves.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
_s(StandingWaves, "Vz8q0hofxtyV/GyT39CLZneZomQ=");
_c = StandingWaves;
var _c;
__turbopack_context__.k.register(_c, "StandingWaves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/physics-lab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhysicsLab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$harmonic$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/harmonic-oscillation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$spring$2d$oscillator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/spring-oscillator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$simple$2d$pendulum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/simple-pendulum.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$damped$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/damped-oscillation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$mechanical$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/mechanical-waves.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$sound$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/sound-waves.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$wave$2d$interference$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/wave-interference.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$standing$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/standing-waves.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function PhysicsLab() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("harmonic");
    const experiments = [
        {
            id: "harmonic",
            label: "Dao động điều hòa",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$harmonic$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "spring",
            label: "Con lắc lò xo",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$spring$2d$oscillator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "pendulum",
            label: "Con lắc đơn",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$simple$2d$pendulum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "damped",
            label: "Dao động tắt dần",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$damped$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "mechanical",
            label: "Sóng cơ",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$mechanical$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "sound",
            label: "Sóng âm",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$sound$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "interference",
            label: "Giao thoa sóng",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$wave$2d$interference$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        },
        {
            id: "standing",
            label: "Sóng dừng",
            component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$standing$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#1a1a2e] text-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-cyan-900/50 bg-[#16213e] px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: "🔬 Phòng thí nghiệm Vật lý Ảo - Lớp 11"
                    }, void 0, false, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mt-1",
                        children: "Mô phỏng các thí nghiệm vật lý với công thức chính xác"
                    }, void 0, false, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/physics-lab.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                value: activeTab,
                onValueChange: setActiveTab,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#16213e] border-b border-cyan-900/50 px-4 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "bg-transparent h-12 gap-1",
                            children: experiments.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: exp.id,
                                    className: "data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-gray-300 hover:text-cyan-400 transition-colors px-4 py-2 rounded-t-lg",
                                    children: exp.label
                                }, exp.id, false, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/physics-lab.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "p-4",
                        children: experiments.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: exp.id,
                                className: "mt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(exp.component, {}, void 0, false, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, exp.id, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/physics-lab.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/physics-lab.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(PhysicsLab, "N0fVRcx+Ga9lakoyaAtmmcbrPtY=");
_c = PhysicsLab;
var _c;
__turbopack_context__.k.register(_c, "PhysicsLab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7df612eb._.js.map