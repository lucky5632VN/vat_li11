(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/sci-fi-lab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataReadout",
    ()=>DataReadout,
    "HoloCard",
    ()=>HoloCard,
    "LabLayout",
    ()=>LabLayout,
    "MonitorScreen",
    ()=>MonitorScreen,
    "NeonButton",
    ()=>NeonButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LabLayout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#02040a] text-cyan-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none opacity-20",
                style: {
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1800px] mx-auto p-4 md:p-6 flex flex-col h-screen",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sci-fi-lab.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LabLayout;
const HoloCard = ({ children, className = "", title, icon: Icon, active = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
    relative backdrop-blur-md rounded-xl border transition-all duration-300 group
    ${active ? 'bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'bg-[#0a0f1c]/60 border-slate-800/60 hover:border-cyan-500/30 hover:bg-[#0f1629]/60'}
    ${className}
  `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50 rounded-tl opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50 rounded-tr opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50 rounded-bl opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50 rounded-br opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-4 py-3 border-b flex items-center gap-2 ${active ? 'border-cyan-500/30 bg-cyan-900/20' : 'border-slate-800/50 bg-slate-900/20'}`,
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        className: active ? 'text-cyan-400' : 'text-slate-500'
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sci-fi-lab.tsx",
                        lineNumber: 47,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-bold uppercase tracking-widest ${active ? 'text-cyan-300' : 'text-slate-400'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sci-fi-lab.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sci-fi-lab.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = HoloCard;
const MonitorScreen = ({ children, label = "SIMULATION VIEW" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative rounded-lg overflow-hidden border border-slate-700 bg-black shadow-inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-20 pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-30"
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 left-3 z-30 flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur rounded border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sci-fi-lab.tsx",
                        lineNumber: 71,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono text-green-500 tracking-wider",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sci-fi-lab.tsx",
                        lineNumber: 72,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 70,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sci-fi-lab.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MonitorScreen;
const NeonButton = ({ children, onClick, active = false, variant = 'cyan', className = "" })=>{
    const colors = {
        cyan: active ? "bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]" : "border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50",
        amber: active ? "bg-amber-500/20 text-amber-300 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]" : "border-slate-700 text-slate-400 hover:text-amber-400 hover:border-amber-500/50",
        red: active ? "bg-red-500/20 text-red-300 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]" : "border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-500/50"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `
        relative px-4 py-2 rounded border font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200
        active:scale-95 flex items-center justify-center gap-2
        ${colors[variant]}
        ${className}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/sci-fi-lab.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = NeonButton;
const DataReadout = ({ label, value, unit, color = "text-cyan-400" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col border-l-2 border-slate-800 pl-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-slate-500 uppercase font-semibold mb-0.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xl font-mono font-bold leading-none ${color}`,
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sci-fi-lab.tsx",
                        lineNumber: 107,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-600 font-mono",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sci-fi-lab.tsx",
                        lineNumber: 108,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sci-fi-lab.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sci-fi-lab.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DataReadout;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "LabLayout");
__turbopack_context__.k.register(_c1, "HoloCard");
__turbopack_context__.k.register(_c2, "MonitorScreen");
__turbopack_context__.k.register(_c3, "NeonButton");
__turbopack_context__.k.register(_c4, "DataReadout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/physics-intro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhysicsIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/aperture.js [app-client] (ecmascript) <export default as Aperture>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Infinity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/infinity.js [app-client] (ecmascript) <export default as Infinity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
// Sửa đường dẫn import cho đúng cấu trúc thư mục
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sci-fi-lab.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EXPERIMENTS = [
    {
        id: "spring-oscillator",
        title: "Con lắc lò xo",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        code: "EXP-01",
        desc: "Mô phỏng dao động điều hòa lò xo ngang/dọc."
    },
    {
        id: "simple-pendulum",
        title: "Con lắc đơn",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"],
        code: "EXP-02",
        desc: "Khảo sát chu kỳ và quỹ đạo con lắc đơn."
    },
    {
        id: "damped-oscillation",
        title: "Dao động tắt dần",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
        code: "EXP-03",
        desc: "Sự suy giảm năng lượng trong môi trường cản."
    },
    {
        id: "harmonic-oscillation",
        title: "Dao động điều hòa",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        code: "EXP-04",
        desc: "Mối liên hệ chuyển động tròn đều."
    },
    {
        id: "mechanical-waves",
        title: "Sóng cơ",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        code: "EXP-05",
        desc: "Truyền sóng ngang và dọc trong môi trường."
    },
    {
        id: "sound-waves",
        title: "Sóng âm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
        code: "EXP-06",
        desc: "Phân tích tần số và biên độ âm thanh."
    },
    {
        id: "wave-interference",
        title: "Giao thoa sóng",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__["Aperture"],
        code: "EXP-07",
        desc: "Hiện tượng giao thoa hai nguồn kết hợp."
    },
    {
        id: "standing-waves",
        title: "Sóng dừng",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Infinity$3e$__["Infinity"],
        code: "EXP-08",
        desc: "Bụng sóng và nút sóng trên dây."
    },
    {
        id: "sound-speed",
        title: "Đo tốc độ truyền âm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
        code: "EXP-09",
        desc: "Đo tốc độ âm bằng cột khí cộng hưởng."
    }
];
function PhysicsIntro({ onSelectExperiment }) {
    _s();
    const [customModules, setCustomModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhysicsIntro.useEffect": ()=>{
            fetch('/api/modules').then({
                "PhysicsIntro.useEffect": (res)=>res.json()
            }["PhysicsIntro.useEffect"]).then({
                "PhysicsIntro.useEffect": (data)=>setCustomModules(data)
            }["PhysicsIntro.useEffect"]).catch({
                "PhysicsIntro.useEffect": (err)=>console.error(err)
            }["PhysicsIntro.useEffect"]);
        }
    }["PhysicsIntro.useEffect"], []);
    const handleDelete = async (e, id)=>{
        e.stopPropagation();
        if (!confirm("Bạn có chắc muốn xóa module này không?")) return;
        try {
            const res = await fetch('/api/modules', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            });
            if (res.ok) {
                setCustomModules((prev)=>prev.filter((m)=>m.id !== id));
            } else {
                alert("Xóa thất bại");
            }
        } catch (err) {
            console.error(err);
            alert("Có lỗi xảy ra");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-8 md:p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-4 opacity-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                            size: 200,
                            className: "text-cyan-500"
                        }, void 0, false, {
                            fileName: "[project]/components/experiments/physics-intro.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/physics-intro.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    "Phòng thí nghiệm ảo v2.0"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight",
                                children: [
                                    "Chào mừng đến với ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 122,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
                                        children: "PHÒNG THÍ NGHIỆM VẬT LÝ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-lg mb-8 leading-relaxed",
                                children: [
                                    "Hệ thống mô phỏng tương tác cao cấp dành cho Vật lý lớp 11. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 126,
                                        columnNumber: 73
                                    }, this),
                                    "Truy cập dữ liệu thời gian thực, đồ thị năng lượng và các tham số vật lý chính xác."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeonButton"], {
                                        onClick: ()=>onSelectExperiment && onSelectExperiment('harmonic-oscillation'),
                                        active: true,
                                        children: "Bắt đầu ngay"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeonButton"], {
                                        variant: "amber",
                                        onClick: ()=>window.open('https://github.com', '_blank'),
                                        children: "Tài liệu hướng dẫn"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/physics-intro.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/physics-intro.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-6 border-b border-slate-800 pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                size: 20,
                                className: "text-cyan-500"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-slate-200 uppercase tracking-widest",
                                children: "Danh mục thí nghiệm"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/physics-intro.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: EXPERIMENTS.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoloCard"], {
                                className: "h-full flex flex-col hover:-translate-y-1 hover:shadow-lg transition-transform",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded bg-slate-900/50 border border-slate-700 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/50 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(exp.icon, {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/physics-intro.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-slate-600 font-bold border border-slate-800 px-1.5 py-0.5 rounded group-hover:text-cyan-500 group-hover:border-cyan-900",
                                                children: exp.code
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-slate-200 mb-2 group-hover:text-cyan-400",
                                        children: exp.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 leading-relaxed mb-6 flex-1",
                                        children: exp.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onSelectExperiment && onSelectExperiment(exp.id),
                                        className: "w-full py-2 rounded border border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all flex items-center justify-center gap-2 group-hover:bg-slate-800",
                                        children: [
                                            "Truy cập ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                                lineNumber: 167,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/physics-intro.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, exp.id, true, {
                                fileName: "[project]/components/experiments/physics-intro.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/physics-intro.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/physics-intro.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/physics-intro.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(PhysicsIntro, "F+eTpf6m0HI3uZMZBLK5hVLjboc=");
_c = PhysicsIntro;
var _c;
__turbopack_context__.k.register(_c, "PhysicsIntro");
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
"[project]/hooks/use-spring-physics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpringPhysics",
    ()=>useSpringPhysics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useSpringPhysics = (initialParams)=>{
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialParams);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mutable refs for high-frequency updates without re-renders
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const historyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Derived constants
    const omega = Math.sqrt(params.k / params.mass);
    const period = 2 * Math.PI / omega;
    const frequency = omega / (2 * Math.PI);
    const vmax = omega * params.amplitude;
    const amax = omega * omega * params.amplitude;
    const deltaL0 = params.mass * 9.8 / params.k // Static extension (m)
    ;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpringPhysics.useCallback[calculateState]": (t)=>{
            // x = A cos(wt + phi)
            const x = params.amplitude * Math.cos(omega * t + params.phase);
            const v = -params.amplitude * omega * Math.sin(omega * t + params.phase);
            const a = -params.amplitude * omega * omega * Math.cos(omega * t + params.phase);
            // Force F = -kx (Hooke's law relative to equilibrium)
            // Note: x is in cm, so we divide by 100 for Force calc (N)
            const force = -params.k * (x / 100);
            // Energy
            const x_m = x / 100;
            const v_m = v / 100;
            const wt = 0.5 * params.k * x_m * x_m;
            const wd = 0.5 * params.mass * v_m * v_m;
            const wTotal = wt + wd;
            return {
                t,
                x,
                v,
                a,
                force,
                wt,
                wd,
                wTotal
            };
        }
    }["useSpringPhysics.useCallback[calculateState]"], [
        params,
        omega
    ]);
    const step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpringPhysics.useCallback[step]": (dt)=>{
            timeRef.current += dt;
            // Prevent negative time
            if (timeRef.current < 0) timeRef.current = 0;
            const state = calculateState(timeRef.current);
            // Update history
            historyRef.current.push(state);
            if (historyRef.current.length > 500) historyRef.current.shift();
            // Sync React state for low-frequency UI updates if needed
            // (For high-perf canvas, we usually read refs directly, but we setTime to trigger animation effects if needed)
            setTime(timeRef.current);
            return state;
        }
    }["useSpringPhysics.useCallback[step]"], [
        calculateState
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpringPhysics.useCallback[reset]": ()=>{
            setIsPlaying(false);
            timeRef.current = 0;
            setTime(0);
            historyRef.current = [];
        }
    }["useSpringPhysics.useCallback[reset]"], []);
    return {
        params,
        setParams,
        isPlaying,
        setIsPlaying,
        time,
        timeRef,
        historyRef,
        calculateState,
        step,
        reset,
        derived: {
            omega,
            period,
            frequency,
            vmax,
            amax,
            deltaL0
        }
    };
};
_s(useSpringPhysics, "NozZMhLauA3vfnDuoEfDTa49U0k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-canvas-scale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasScale",
    ()=>useCanvasScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useCanvasScale = (containerRef)=>{
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [pixelRatio, setPixelRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCanvasScale.useEffect": ()=>{
            // Check if we are in a browser environment
            if (("TURBOPACK compile-time value", "object") === "undefined" || !containerRef.current) return;
            const updateSize = {
                "useCanvasScale.useEffect.updateSize": ()=>{
                    if (containerRef.current) {
                        const { clientWidth, clientHeight } = containerRef.current;
                        setSize({
                            width: clientWidth,
                            height: clientHeight
                        });
                        setPixelRatio(window.devicePixelRatio || 1);
                    }
                }
            }["useCanvasScale.useEffect.updateSize"];
            // Initial size
            updateSize();
            const resizeObserver = new ResizeObserver({
                "useCanvasScale.useEffect": ()=>{
                    updateSize();
                }
            }["useCanvasScale.useEffect"]);
            resizeObserver.observe(containerRef.current);
            return ({
                "useCanvasScale.useEffect": ()=>{
                    resizeObserver.disconnect();
                }
            })["useCanvasScale.useEffect"];
        }
    }["useCanvasScale.useEffect"], [
        containerRef
    ]);
    return {
        width: size.width,
        height: size.height,
        pixelRatio
    };
};
_s(useCanvasScale, "g4vVWxmTJl5uuTqmH+3LYpBIr5g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/canvas-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCanvas",
    ()=>clearCanvas,
    "drawArrow",
    ()=>drawArrow,
    "drawGrid",
    ()=>drawGrid,
    "drawSpring",
    ()=>drawSpring
]);
const drawSpring = (ctx, startX, startY, endX, endY, coils = 12, width = 20, strokeStyle = "#cbd5e1", lineWidth = 2)=>{
    const dx = endX - startX;
    const dy = endY - startY;
    const len = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    ctx.save();
    ctx.translate(startX, startY);
    ctx.rotate(angle);
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
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
const drawArrow = (ctx, x, y, len, color, label = "", direction = "horizontal")=>{
    if (Math.abs(len) < 2) return; // Don't draw tiny arrows
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    // Calculate end points based on direction
    const endX = x + (direction === "horizontal" ? len : 0);
    const endY = y + (direction === "vertical" ? len : 0);
    // Determine angle for the arrow head
    let angle = 0;
    if (direction === "horizontal") {
        angle = len > 0 ? 0 : Math.PI;
    } else {
        angle = len > 0 ? Math.PI / 2 : -Math.PI / 2;
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    // Draw arrow head
    const headLen = 6;
    ctx.save();
    ctx.translate(endX, endY);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-headLen, -headLen / 2);
    ctx.lineTo(-headLen, headLen / 2);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.restore();
    // Draw label
    if (label) {
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let labelX = endX;
        let labelY = endY;
        if (direction === "horizontal") {
            labelX += len > 0 ? 15 : -15;
        } else {
            labelY += len > 0 ? 15 : -15;
        }
        ctx.fillStyle = color;
        ctx.fillText(label, labelX, labelY);
    }
    ctx.restore();
};
const drawGrid = (ctx, width, height, step = 40, color = "#1e293b")=>{
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = 0; i < width; i += step){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
    }
    for(let i = 0; i < height; i += step){
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }
    ctx.stroke();
    ctx.restore();
};
const clearCanvas = (ctx)=>{
    const { width, height } = ctx.canvas;
    ctx.clearRect(0, 0, width, height);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/oscillator-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OscillatorView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$canvas$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-canvas-scale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/canvas-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OscillatorView({ sysId, params, state, derived, layout, onParameterChange, onInteractionStart, onInteractionEnd, label, colorTheme = "blue" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localTime, setLocalTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Responsive Hooks
    const { width, height, pixelRatio } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$canvas$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasScale"])(containerRef);
    // Interaction Check
    const checkInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OscillatorView.useCallback[checkInteraction]": (clientX, clientY)=>{
            if (!canvasRef.current || !width || !height) return null;
            const rect = canvasRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            let massX, massY;
            if (layout === "horizontal") {
                massX = width / 2 + state.x;
                massY = height / 2;
            } else {
                massX = width / 2;
                massY = height / 2 + state.x;
            }
            const dist = Math.sqrt(Math.pow(x - massX, 2) + Math.pow(y - massY, 2));
            if (dist < 40) return true;
            return false;
        }
    }["OscillatorView.useCallback[checkInteraction]"], [
        layout,
        width,
        height,
        state.x
    ]);
    const handlePointerDown = (e)=>{
        if (checkInteraction(e.clientX, e.clientY)) {
            setIsDragging(true);
            onInteractionStart(); // Pause parent
            e.currentTarget.setPointerCapture(e.pointerId);
        }
    };
    const handlePointerMove = (e)=>{
        if (!isDragging || !width || !height) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        let delta = 0;
        if (layout === "horizontal") {
            const equilibriumX = width / 2;
            delta = x - equilibriumX;
        } else {
            const equilibriumY = height / 2;
            delta = y - equilibriumY;
        }
        const newAmp = Math.abs(delta);
        const newPhase = delta >= 0 ? 0 : Math.PI;
        const maxAmp = layout === "horizontal" ? width / 2 - 20 : height / 2 - 20;
        const clampedAmp = Math.min(Math.max(newAmp, 0), maxAmp);
        onParameterChange({
            amplitude: clampedAmp,
            phase: newPhase
        });
    };
    const handlePointerUp = (e)=>{
        setIsDragging(false);
        onInteractionEnd();
        e.currentTarget.releasePointerCapture(e.pointerId);
    };
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OscillatorView.useCallback[draw]": (ctx)=>{
            const currWidth = width;
            const currHeight = height;
            ctx.clearRect(0, 0, currWidth, currHeight);
            // Grid
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let i = 0; i < currWidth; i += 40){
                ctx.moveTo(i, 0);
                ctx.lineTo(i, currHeight);
            }
            for(let i = 0; i < currHeight; i += 40){
                ctx.moveTo(0, i);
                ctx.lineTo(currWidth, i);
            }
            ctx.stroke();
            const primaryColor = colorTheme === "blue" ? "#3b82f6" : "#f97316" // Orange for sys2
            ;
            const strokeColor = colorTheme === "blue" ? "#60a5fa" : "#fb923c";
            if (layout === "horizontal") {
                const centerY = currHeight / 2;
                const wallX = 60;
                const equilibriumX = currWidth / 2;
                const massX = equilibriumX + state.x;
                // Wall
                ctx.fillStyle = "#64748b";
                ctx.fillRect(wallX - 10, centerY - 50, 10, 100);
                ctx.strokeStyle = "#475569";
                ctx.beginPath();
                ctx.moveTo(wallX, centerY + 30);
                ctx.lineTo(currWidth, centerY + 30);
                ctx.stroke();
                // Limits -A, +A
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
                ctx.textAlign = "left";
                ctx.fillText("-A", equilibriumX - params.amplitude - 15, centerY - 65);
                ctx.fillText("+A", equilibriumX + params.amplitude - 5, centerY - 65);
                // Equilibrium Line
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
                ctx.textAlign = "right";
                ctx.fillText("VTCB (O)", equilibriumX - 10, centerY - 75);
                // Draw Spring
                ctx.strokeStyle = "#cbd5e1";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSpring"])(ctx, wallX, centerY, massX - 25, centerY, 15, 15);
                // Draw Mass
                ctx.fillStyle = isDragging ? strokeColor : primaryColor;
                ctx.fillRect(massX - 25, centerY - 25, 50, 50);
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = isDragging ? 3 : 1;
                ctx.strokeRect(massX - 25, centerY - 25, 50, 50);
                // Vectors
                if (!isDragging) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawArrow"])(ctx, massX, centerY, state.v * 0.5, "#22c55e", "v");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawArrow"])(ctx, massX, centerY + 35, state.force * 5, "#ef4444", "F_kv");
                }
            } else {
                // Vertical Layout
                const centerX = currWidth / 2;
                const ceilingY = 40;
                const equilibriumY = currHeight / 2;
                const deltaL_px = derived.deltaL0 * 100 * 1.5;
                const naturalY = equilibriumY - deltaL_px;
                const massY = equilibriumY + state.x;
                // Ceiling
                ctx.fillStyle = "#64748b";
                ctx.fillRect(centerX - 50, ceilingY - 10, 100, 10);
                // Natural Length Line
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
                // Equilibrium Line
                ctx.strokeStyle = "#4ade80";
                ctx.beginPath();
                ctx.moveTo(centerX - 120, equilibriumY);
                ctx.lineTo(centerX + 120, equilibriumY);
                ctx.stroke();
                ctx.fillStyle = "#4ade80";
                ctx.textAlign = "right";
                ctx.fillText("VTCB (O)", centerX - 130, equilibriumY + 4);
                ctx.setLineDash([]);
                // Delta L
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
                    ctx.fillText(`Δl₀ = ${(derived.deltaL0 * 100).toFixed(1)} cm`, measureX + 15, naturalY + deltaL_px / 2);
                }
                // Limits
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
                // Draw Spring
                ctx.strokeStyle = "#cbd5e1";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawSpring"])(ctx, centerX, ceilingY, centerX, massY - 25, 12, 15);
                // Draw Mass
                ctx.fillStyle = isDragging ? strokeColor : primaryColor;
                ctx.beginPath();
                ctx.arc(centerX, massY, 25, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = isDragging ? 3 : 1;
                ctx.stroke();
                if (!isDragging) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawArrow"])(ctx, centerX + 30, massY, state.v * 0.5, "#22c55e", "v", "vertical");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$canvas$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawArrow"])(ctx, centerX - 30, massY, state.force * 5, "#ef4444", "F", "vertical");
                }
            }
            // Info Box
            ctx.fillStyle = "rgba(15, 23, 42, 0.7)";
            ctx.fillRect(10, 10, 150, 70);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, 150, 70);
            ctx.textAlign = "left";
            ctx.textBaseline = "alphabetic";
            ctx.fillStyle = "#4ade80";
            ctx.font = "13px monospace";
            ctx.fillText(`t = ${state.t.toFixed(2)} s`, 20, 30);
            ctx.fillStyle = "#38bdf8";
            ctx.fillText(`x = ${state.x.toFixed(1)} cm`, 20, 50);
            ctx.fillStyle = "#facc15";
            ctx.fillText(`v = ${state.v.toFixed(1)} cm/s`, 20, 70);
            if (isDragging) {
                ctx.fillStyle = "#ffffff";
                ctx.font = "12px sans-serif";
                ctx.fillText("✋ Đang kéo...", 20, 95);
            } else if (label) {
                ctx.fillStyle = primaryColor;
                ctx.font = "bold 12px sans-serif";
                ctx.fillText(label, 20, 95);
            }
        }
    }["OscillatorView.useCallback[draw]"], [
        layout,
        state,
        params,
        derived,
        width,
        height,
        isDragging,
        label,
        colorTheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OscillatorView.useEffect": ()=>{
            // Only Redraw when state or props change
            if (canvasRef.current && width > 0 && height > 0) {
                const canvas = canvasRef.current;
                if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
                    canvas.width = width * pixelRatio;
                    canvas.height = height * pixelRatio;
                }
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.save();
                    ctx.scale(pixelRatio, pixelRatio);
                    draw(ctx);
                    ctx.restore();
                }
            }
        }
    }["OscillatorView.useEffect"], [
        draw,
        width,
        height,
        pixelRatio
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-[#16213e] rounded-xl overflow-hidden border border-cyan-900/50 shadow-lg relative w-full h-[300px] lg:h-[400px] touch-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "w-full h-full block touch-none cursor-move",
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerLeave: handlePointerUp
        }, void 0, false, {
            fileName: "[project]/components/experiments/oscillator-view.tsx",
            lineNumber: 335,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/experiments/oscillator-view.tsx",
        lineNumber: 331,
        columnNumber: 9
    }, this);
}
_s(OscillatorView, "AaqvMQl0CQchseyl3uDBRtyf2vk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$canvas$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasScale"]
    ];
});
_c = OscillatorView;
var _c;
__turbopack_context__.k.register(_c, "OscillatorView");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$split$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitSquareHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-split-horizontal.js [app-client] (ecmascript) <export default as SplitSquareHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$spring$2d$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-spring-physics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$oscillator$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/oscillator-view.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SpringOscillator() {
    _s();
    const energyCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [layout, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("horizontal");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("single");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("system1");
    // System 1 Physics
    const sys1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$spring$2d$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpringPhysics"])({
        mass: 0.5,
        k: 20,
        amplitude: 80,
        phase: 0
    });
    // System 2 Physics
    const sys2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$spring$2d$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpringPhysics"])({
        mass: 1.0,
        k: 40,
        amplitude: 60,
        phase: 0
    });
    // Unified Controls
    const togglePlay = ()=>{
        const newState = !sys1.isPlaying;
        sys1.setIsPlaying(newState);
        sys2.setIsPlaying(newState); // Sync playing state
    };
    const handleReset = ()=>{
        sys1.reset();
        sys2.reset();
    };
    const stepForward = ()=>{
        sys1.step(0.05);
        sys2.step(0.05);
    };
    const stepBackward = ()=>{
        sys1.step(-0.05);
        sys2.step(-0.05);
    };
    const activeSys = activeTab === "system1" ? sys1 : sys2;
    const isPlaying = sys1.isPlaying // Assuming synced
    ;
    // Energy Graph Drawing
    const drawEnergyGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpringOscillator.useCallback[drawEnergyGraph]": (ctx)=>{
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            const history = activeSys.historyRef.current;
            const params = activeSys.params;
            // Transparent Background for Overlay
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(15, 23, 42, 0.4)"; // Semi-transparent
            ctx.fillRect(0, 50, w, h - 50);
            // Grid
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for(let x = 0; x < w; x += 50){
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
            }
            for(let y = 50; y < h - 10; y += 30){
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
            }
            ctx.stroke();
            if (history.length < 2) return;
            // Use a fixed reference for max energy based on Max Amplitude (100cm)
            const maxAmpMeters = 1.0 // 100cm
            ;
            const maxRefEnergy = 0.5 * params.k * Math.pow(maxAmpMeters, 2);
            // Scale so that Max Ref Energy hits 90% of height
            const graphHeight = h - 60 // Total height for graph lines, leaving 50px for top label and 10px for bottom padding
            ;
            const yScale = maxRefEnergy > 0 ? graphHeight * 0.9 / maxRefEnergy : 1;
            const drawLine = {
                "SpringOscillator.useCallback[drawEnergyGraph].drawLine": (key, color)=>{
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    const stepX = w / 300;
                    const dataSlice = history.slice(-300);
                    dataSlice.forEach({
                        "SpringOscillator.useCallback[drawEnergyGraph].drawLine": (pt, i)=>{
                            const val = pt[key];
                            const x = i * stepX;
                            const y = h - 10 - val * yScale // 10px padding bottom, graph starts from bottom
                            ;
                            if (i === 0) ctx.moveTo(x, y);
                            else ctx.lineTo(x, y);
                        }
                    }["SpringOscillator.useCallback[drawEnergyGraph].drawLine"]);
                    ctx.stroke();
                }
            }["SpringOscillator.useCallback[drawEnergyGraph].drawLine"];
            drawLine("wd", "#22c55e");
            drawLine("wt", "#3b82f6");
            drawLine("wTotal", "#eab308");
            // Legend
            ctx.font = "10px monospace";
            ctx.fillStyle = "#eab308";
            ctx.fillText("Cơ năng", 10, h - 35);
            ctx.fillStyle = "#22c55e";
            ctx.fillText("Động năng", 70, h - 35);
            ctx.fillStyle = "#3b82f6";
            ctx.fillText("Thế năng", 140, h - 35);
        }
    }["SpringOscillator.useCallback[drawEnergyGraph]"], [
        activeSys,
        activeTab
    ]);
    // Stable Animation Loop Pattern
    const renderLogic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SpringOscillator.useCallback[renderLogic]": ()=>{
            if (sys1.isPlaying) {
                sys1.step(0.016);
                sys2.step(0.016);
            }
            if (energyCanvasRef.current) {
                const ctx = energyCanvasRef.current.getContext("2d");
                if (ctx) drawEnergyGraph(ctx);
            }
        }
    }["SpringOscillator.useCallback[renderLogic]"], [
        sys1.isPlaying,
        sys1.step,
        sys2.step,
        drawEnergyGraph
    ]);
    // Note: relying on sys1.step stable identity. using sys1.isPlaying value. 
    // If we used [sys1], it would change every frame.
    // sys1.step is stable. sys1.isPlaying changes only on user interaction.
    // drawEnergyGraph depends on activeSys params/history which are stable refs/state-setters, 
    // but activeSys object changes.
    // Actually drawEnergyGraph (lines 49-114) depends on [activeSys, activeTab].
    // activeSys changes every frame. So drawEnergyGraph changes every frame.
    // So renderLogic changes every frame.
    // So renderRef updates every frame.
    // Main loop calls separate function via ref. No cancel/restart. Correct.
    const renderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(renderLogic);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpringOscillator.useEffect": ()=>{
            renderRef.current = renderLogic;
        }
    }["SpringOscillator.useEffect"], [
        renderLogic
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpringOscillator.useEffect": ()=>{
            const loop = {
                "SpringOscillator.useEffect.loop": ()=>{
                    if (renderRef.current) renderRef.current();
                    animationRef.current = requestAnimationFrame(loop);
                }
            }["SpringOscillator.useEffect.loop"];
            animationRef.current = requestAnimationFrame(loop);
            return ({
                "SpringOscillator.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["SpringOscillator.useEffect"];
        }
    }["SpringOscillator.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid gap-4 ${mode === "compare" ? "grid-rows-2" : "grid-rows-1"} relative`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-20 flex flex-col justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    ref: energyCanvasRef,
                                    width: 800,
                                    height: 200,
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50",
                                children: [
                                    mode === "compare" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 z-10 text-xs font-bold text-blue-400 bg-black/50 px-2 py-1 rounded",
                                        children: "System 1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 173,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$oscillator$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sysId: "sys1",
                                        params: sys1.params,
                                        state: sys1.calculateState(sys1.timeRef.current),
                                        derived: sys1.derived,
                                        layout: layout,
                                        onParameterChange: (p)=>sys1.setParams((prev)=>({
                                                    ...prev,
                                                    ...p
                                                })),
                                        onInteractionStart: ()=>sys1.setIsPlaying(false),
                                        onInteractionEnd: ()=>{},
                                        colorTheme: "blue",
                                        label: mode === "single" ? "" : "Hệ 1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            mode === "compare" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative animate-in slide-in-from-top-4 duration-300 bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 z-10 text-xs font-bold text-orange-400 bg-black/50 px-2 py-1 rounded",
                                        children: "System 2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$oscillator$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sysId: "sys2",
                                        params: sys2.params,
                                        state: sys2.calculateState(sys2.timeRef.current),
                                        derived: sys2.derived,
                                        layout: layout,
                                        onParameterChange: (p)=>sys2.setParams((prev)=>({
                                                    ...prev,
                                                    ...p
                                                })),
                                        onInteractionStart: ()=>{
                                            sys1.setIsPlaying(false);
                                            sys2.setIsPlaying(false);
                                        },
                                        onInteractionEnd: ()=>{},
                                        colorTheme: "orange",
                                        label: "Hệ 2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stepBackward,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: togglePlay,
                                className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20" : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30"} text-white`,
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 28,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 226,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 28,
                                    fill: "currentColor",
                                    className: "ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 226,
                                    columnNumber: 68
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stepForward,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$control$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Cấu hình hệ thống",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-4 bg-slate-900/50 p-1 rounded-lg border border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMode("single"),
                                        className: `flex-1 py-2 rounded text-xs font-bold uppercase ${mode === "single" ? "bg-cyan-600 text-white shadow" : "text-slate-400 hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                size: 14,
                                                className: "inline mr-1 mb-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this),
                                            " Đơn"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMode("compare"),
                                        className: `flex-1 py-2 rounded text-xs font-bold uppercase ${mode === "compare" ? "bg-orange-600 text-white shadow" : "text-slate-400 hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$split$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SplitSquareHorizontal$3e$__["SplitSquareHorizontal"], {
                                                size: 14,
                                                className: "inline mr-1 mb-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this),
                                            " So sánh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLayout("horizontal"),
                                        className: `flex-1 py-2 rounded border text-xs font-bold uppercase ${layout === "horizontal" ? "bg-slate-700 border-slate-500 text-white" : "border-transparent bg-slate-800 text-slate-400"}`,
                                        children: "Nằm ngang"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLayout("vertical"),
                                        className: `flex-1 py-2 rounded border text-xs font-bold uppercase ${layout === "vertical" ? "bg-slate-700 border-slate-500 text-white" : "border-transparent bg-slate-800 text-slate-400"}`,
                                        children: "Thẳng đứng"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            mode === "compare" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 mb-4 border-b border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("system1"),
                                        className: `flex-1 py-2 text-xs font-bold uppercase border-b-2 transition-colors ${activeTab === "system1" ? "border-blue-500 text-blue-400" : "border-transparent text-slate-500 hover:text-slate-300"}`,
                                        children: "System 1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("system2"),
                                        className: `flex-1 py-2 text-xs font-bold uppercase border-b-2 transition-colors ${activeTab === "system2" ? "border-orange-500 text-orange-400" : "border-transparent text-slate-500 hover:text-slate-300"}`,
                                        children: "System 2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 animate-in fade-in slide-in-from-right-4 duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-400 mb-1 block",
                                                children: "Khối lượng m"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 266,
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
                                                        value: activeSys.params.mass,
                                                        onChange: (e)=>activeSys.setParams((p)=>({
                                                                    ...p,
                                                                    mass: Number(e.target.value)
                                                                })),
                                                        className: `flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer ${activeTab === 'system1' ? 'accent-cyan-500' : 'accent-orange-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-16 text-right font-mono text-sm ${activeTab === 'system1' ? 'text-cyan-400' : 'text-orange-400'}`,
                                                        children: [
                                                            activeSys.params.mass,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-400 mb-1 block",
                                                children: "Độ cứng k"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 281,
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
                                                        value: activeSys.params.k,
                                                        onChange: (e)=>activeSys.setParams((p)=>({
                                                                    ...p,
                                                                    k: Number(e.target.value)
                                                                })),
                                                        className: `flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer ${activeTab === 'system1' ? 'accent-cyan-500' : 'accent-orange-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-16 text-right font-mono text-sm ${activeTab === 'system1' ? 'text-cyan-400' : 'text-orange-400'}`,
                                                        children: [
                                                            activeSys.params.k,
                                                            " N/m"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-gray-400 mb-1 block",
                                                children: "Biên độ A"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "10",
                                                        max: "100",
                                                        value: activeSys.params.amplitude,
                                                        onChange: (e)=>activeSys.setParams((p)=>({
                                                                    ...p,
                                                                    amplitude: Number(e.target.value)
                                                                })),
                                                        className: `flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer ${activeTab === 'system1' ? 'accent-cyan-500' : 'accent-orange-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-16 text-right font-mono text-sm ${activeTab === 'system1' ? 'text-cyan-400' : 'text-orange-400'}`,
                                                        children: [
                                                            Math.round(activeSys.params.amplitude),
                                                            " cm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, activeTab, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 235,
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
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-200",
                                        children: [
                                            "Đại lượng (",
                                            mode === "compare" ? activeTab === "system1" ? "Sys 1" : "Sys 2" : "Sys 1",
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 313,
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
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-white",
                                                children: [
                                                    activeSys.derived.period.toFixed(2),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "s"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Tần số (f)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-white",
                                                children: [
                                                    activeSys.derived.frequency.toFixed(2),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "Hz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 58
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Vận tốc Max"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-green-400",
                                                children: [
                                                    activeSys.derived.vmax.toFixed(1),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "cm/s"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Gia tốc Max"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-red-400",
                                                children: [
                                                    activeSys.derived.amax.toFixed(0),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "cm/s²"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 336,
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
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Độ giãn lò xo (Δl₀)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-yellow-400",
                                                children: [
                                                    (activeSys.derived.deltaL0 * 100).toFixed(1),
                                                    " cm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 312,
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
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-300 space-y-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "ω = √(k/m) = ",
                                            activeSys.derived.omega.toFixed(2),
                                            " rad/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "T = 2π√(m/k) = ",
                                            activeSys.derived.period.toFixed(2),
                                            " s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "F = -kx (Định luật Hooke)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/spring-oscillator.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/spring-oscillator.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/spring-oscillator.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(SpringOscillator, "hyLYYdSuivf9M5EM1W+oZncoiJY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$spring$2d$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpringPhysics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$spring$2d$physics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpringPhysics"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$control$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/control-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SimplePendulum() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const energyCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showGraph, setShowGraph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: true,
        v: false,
        a: false
    });
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        length: 100,
        gravity: 9.8,
        initialAngle: 10,
        mass: 1.0 // kg
    });
    // History for Energy Graph
    const energyHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Physics Calculations
    const lengthM = params.length / 100;
    const omega = Math.sqrt(params.gravity / lengthM);
    const period = 2 * Math.PI / omega;
    const frequency = 1 / period;
    const thetaMax = params.initialAngle * Math.PI / 180;
    const dt = 0.016;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[calculateState]": (t)=>{
            const theta = thetaMax * Math.cos(omega * t);
            const x = params.length * Math.sin(theta) // Horizontal displacement approx
            ;
            // Calculate v using Energy Conservation to ensure W is constant for large angles
            const l_m = params.length / 100;
            const h_current = l_m * (1 - Math.cos(theta));
            const h_max = l_m * (1 - Math.cos(thetaMax));
            const v_mag = Math.sqrt(2 * params.gravity * Math.max(0, h_max - h_current));
            // Direction same as SHM approximation: -sin(omega*t)
            const sign = -Math.sin(omega * t) >= 0 ? 1 : -1;
            const v = sign * v_mag * 100 // Convert to cm/s
            ;
            // Acceleration (approx)
            const a = -params.length * omega * omega * thetaMax * Math.cos(omega * t);
            return {
                theta,
                x,
                v,
                a
            };
        }
    }["SimplePendulum.useCallback[calculateState]"], [
        thetaMax,
        omega,
        params.length,
        params.gravity
    ]);
    const drawSim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[drawSim]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
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
            const state = calculateState(t);
            const pivotX = width / 2;
            const pivotY = 40;
            const bobX = pivotX + params.length * Math.sin(state.theta);
            const bobY = pivotY + params.length * Math.cos(state.theta);
            // Support
            ctx.fillStyle = "#64748b";
            ctx.fillRect(pivotX - 40, pivotY - 10, 80, 10);
            // Vertical dashed line
            ctx.strokeStyle = "#334155";
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.beginPath();
            ctx.moveTo(pivotX, pivotY);
            ctx.lineTo(pivotX, pivotY + params.length + 40);
            ctx.stroke();
            ctx.setLineDash([]);
            // String
            ctx.strokeStyle = "#cbd5e1";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(pivotX, pivotY);
            ctx.lineTo(bobX, bobY);
            ctx.stroke();
            // Bob
            const gradient = ctx.createRadialGradient(bobX - 5, bobY - 5, 2, bobX, bobY, 20);
            gradient.addColorStop(0, "#fb923c");
            gradient.addColorStop(1, "#ea580c");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = "#fff7ed";
            ctx.lineWidth = 2;
            ctx.stroke();
            // Angle indicator
            ctx.fillStyle = "#facc15";
            ctx.font = "bold 14px monospace";
            ctx.fillText(`${state.theta > 0 ? '+' : ''}${(state.theta * 180 / Math.PI).toFixed(1)}°`, pivotX + 20, pivotY + 40);
            // Info overlay (Top Left)
            ctx.fillStyle = "rgba(15, 23, 42, 0.8)";
            ctx.fillRect(10, 10, 140, 80);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, 140, 80);
            ctx.font = "12px monospace";
            ctx.textAlign = "left";
            ctx.fillStyle = "#e2e8f0";
            ctx.fillText(`t = ${t.toFixed(2)} s`, 20, 30);
            ctx.fillStyle = "#22d3ee";
            ctx.fillText(`α = ${(state.theta * 180 / Math.PI).toFixed(1)}°`, 20, 50);
            ctx.fillStyle = "#4ade80";
            ctx.fillText(`v = ${state.v.toFixed(1)} cm/s`, 20, 70);
            // Signature
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.textAlign = "right";
            ctx.fillText("Simple Pendulum", width - 15, height - 15);
            ctx.textAlign = "left"; // Reset
        }
    }["SimplePendulum.useCallback[drawSim]"], [
        params.length,
        params.gravity,
        calculateState
    ]);
    const drawEnergyGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[drawEnergyGraph]": (ctx)=>{
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            const history = energyHistoryRef.current;
            // Clear instead of fill to allow overlay
            ctx.clearRect(0, 0, w, h);
            // Optional: Semi-transparent background for readability
            ctx.fillStyle = "rgba(15, 23, 42, 0.4)";
            ctx.fillRect(0, 50, w, h - 50);
            if (history.length < 2) return;
            const l_m = params.length / 100;
            // Auto-Scale based on CURRENT initialAngle (user preference)
            // This makes the graph always fill the view regardless of how small the angle is.
            const thetaMaxRad = params.initialAngle * Math.PI / 180;
            const maxRefPotential = params.mass * params.gravity * l_m * (1 - Math.cos(thetaMaxRad));
            // Scale to fit available height (leaving 50px top for overlay, 10px bottom padding)
            const graphHeight = h - 60;
            const yScale = maxRefPotential > 0 ? graphHeight * 0.9 / maxRefPotential : 1;
            const drawLine = {
                "SimplePendulum.useCallback[drawEnergyGraph].drawLine": (key, color)=>{
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    const dataToDraw = history.slice(-300);
                    const stepX = w / 300;
                    dataToDraw.forEach({
                        "SimplePendulum.useCallback[drawEnergyGraph].drawLine": (pt, i)=>{
                            const x = i * stepX;
                            const y = h - 10 - pt[key] * yScale;
                            if (i === 0) ctx.moveTo(x, y);
                            else ctx.lineTo(x, y);
                        }
                    }["SimplePendulum.useCallback[drawEnergyGraph].drawLine"]);
                    ctx.stroke();
                }
            }["SimplePendulum.useCallback[drawEnergyGraph].drawLine"];
            drawLine('wt', '#3b82f6');
            drawLine('wd', '#22c55e');
            drawLine('w', '#eab308');
            // Draw Leading Dots (Current Value Indicators)
            if (history.length > 0) {
                const lastPt = history[history.length - 1];
                const stepX = w / 300;
                const x = (history.length - 1) * stepX // Should be roughly w if full
                ;
                const drawDot = {
                    "SimplePendulum.useCallback[drawEnergyGraph].drawDot": (key, color)=>{
                        const y = h - 10 - lastPt[key] * yScale;
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.strokeStyle = "#ffffff";
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }["SimplePendulum.useCallback[drawEnergyGraph].drawDot"];
                drawDot('wt', '#3b82f6');
                drawDot('wd', '#22c55e');
                drawDot('w', '#eab308');
            }
            // Legend inside canvas
            ctx.font = "10px monospace";
            ctx.fillStyle = "#eab308";
            ctx.fillText("Cơ năng", 10, h - 35);
            ctx.fillStyle = "#22c55e";
            ctx.fillText("Động năng", 70, h - 35);
            ctx.fillStyle = "#3b82f6";
            ctx.fillText("Thế năng", 140, h - 35);
        }
    }["SimplePendulum.useCallback[drawEnergyGraph]"], [
        params.length,
        params.mass,
        params.gravity,
        params.initialAngle
    ]);
    const renderLogic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimplePendulum.useCallback[renderLogic]": ()=>{
            if (!canvasRef.current) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;
            if (isPlaying) {
                timeRef.current += dt;
                setTime(timeRef.current);
                const state = calculateState(timeRef.current);
                // Energy Calculation (Enforced Conservation)
                const l_m = params.length / 100;
                const thetaMaxRad = params.initialAngle * Math.PI / 180;
                // Total Energy is constant based on initial release angle (assuming v0=0)
                const h_max = l_m * (1 - Math.cos(thetaMaxRad));
                const W_total = params.mass * params.gravity * h_max;
                // Potential Energy
                const h_current = l_m * (1 - Math.cos(state.theta));
                const wt = params.mass * params.gravity * h_current;
                // Kinetic Energy (Derived to ensure sum is exactly W_total)
                const wd = Math.max(0, W_total - wt);
                energyHistoryRef.current.push({
                    t: timeRef.current,
                    wd,
                    wt,
                    w: W_total
                });
                if (energyHistoryRef.current.length > 300) energyHistoryRef.current.shift();
            }
            drawSim(ctx, timeRef.current);
            if (energyCanvasRef.current) drawEnergyGraph(energyCanvasRef.current.getContext("2d"));
        }
    }["SimplePendulum.useCallback[renderLogic]"], [
        isPlaying,
        drawSim,
        drawEnergyGraph,
        calculateState,
        params,
        dt
    ]);
    const renderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(renderLogic);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplePendulum.useEffect": ()=>{
            renderRef.current = renderLogic;
        }
    }["SimplePendulum.useEffect"], [
        renderLogic
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplePendulum.useEffect": ()=>{
            const loop = {
                "SimplePendulum.useEffect.loop": ()=>{
                    if (renderRef.current) renderRef.current();
                    animationRef.current = requestAnimationFrame(loop);
                }
            }["SimplePendulum.useEffect.loop"];
            animationRef.current = requestAnimationFrame(loop);
            return ({
                "SimplePendulum.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["SimplePendulum.useEffect"];
        }
    }["SimplePendulum.useEffect"], []);
    // Initial Draw
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplePendulum.useEffect": ()=>{
            if (!isPlaying && canvasRef.current && energyCanvasRef.current) {
                drawSim(canvasRef.current.getContext("2d"), timeRef.current);
                drawEnergyGraph(energyCanvasRef.current.getContext("2d"));
            }
        }
    }["SimplePendulum.useEffect"], [
        params,
        drawSim,
        drawEnergyGraph,
        isPlaying
    ]);
    const handleStep = (dir)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, timeRef.current + dir * 0.05);
        setTime(timeRef.current);
    // Draw will be updated by loop or effect
    };
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        energyHistoryRef.current = [];
    };
    // Current values for Stats Panel
    const currState = calculateState(time);
    const currH = lengthM * (1 - Math.cos(currState.theta));
    const currWt = params.mass * params.gravity * currH;
    const currWd = 0.5 * params.mass * (currState.v / 100) ** 2;
    const currW = currWt + currWd;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: 800,
                                height: 400,
                                className: "w-full h-[400px] block"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: energyCanvasRef,
                                width: 800,
                                height: 200,
                                className: "absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-10"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 285,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 281,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleStep(-1),
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 299,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 298,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsPlaying(!isPlaying),
                                className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent ${isPlaying ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20" : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30"} text-white`,
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 28,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 308,
                                    columnNumber: 38
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 28,
                                    fill: "currentColor",
                                    className: "ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 308,
                                    columnNumber: 80
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleStep(1),
                                className: "w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 311,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 310,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$control$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Cấu hình hệ thống",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-400 mb-1 block",
                                            children: "Chiều dài l"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 320,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "50",
                                                    max: "200",
                                                    value: params.length,
                                                    onChange: (e)=>{
                                                        setParams((p)=>({
                                                                ...p,
                                                                length: Number(e.target.value)
                                                            }));
                                                        energyHistoryRef.current = [];
                                                    },
                                                    className: "flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-16 text-right font-mono text-sm text-cyan-400",
                                                    children: [
                                                        params.length,
                                                        " cm"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 321,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 319,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-400 mb-1 block",
                                            children: "Gia tốc g"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 337,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "20",
                                                    step: "0.1",
                                                    value: params.gravity,
                                                    onChange: (e)=>{
                                                        setParams((p)=>({
                                                                ...p,
                                                                gravity: Number(e.target.value)
                                                            }));
                                                        energyHistoryRef.current = [];
                                                    },
                                                    className: "flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-16 text-right font-mono text-sm text-cyan-400",
                                                    children: [
                                                        params.gravity,
                                                        " m/s²"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 338,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 336,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-400 mb-1 block",
                                            children: "Góc ban đầu θ₀ (Lưu ý: ≤ 10° để dao động điều hòa)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 355,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "60",
                                                    value: params.initialAngle,
                                                    onChange: (e)=>{
                                                        setParams((p)=>({
                                                                ...p,
                                                                initialAngle: Number(e.target.value)
                                                            }));
                                                        energyHistoryRef.current = [];
                                                    },
                                                    className: "flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-16 text-right font-mono text-sm text-cyan-400",
                                                    children: [
                                                        params.initialAngle,
                                                        "°"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 356,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 354,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-400 mb-1 block",
                                            children: "Khối lượng m"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 372,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.1",
                                                    max: "5",
                                                    step: "0.1",
                                                    value: params.mass,
                                                    onChange: (e)=>{
                                                        setParams((p)=>({
                                                                ...p,
                                                                mass: Number(e.target.value)
                                                            }));
                                                        energyHistoryRef.current = [];
                                                    },
                                                    className: "flex-1 h-2 bg-slate-700 rounded-lg cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-16 text-right font-mono text-sm text-cyan-400",
                                                    children: [
                                                        params.mass,
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                            lineNumber: 373,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                    lineNumber: 371,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/simple-pendulum.tsx",
                            lineNumber: 318,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 317,
                        columnNumber: 17
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
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 395,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-200",
                                        children: "Đại lượng đo đạc"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 396,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 394,
                                columnNumber: 21
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
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 400,
                                                columnNumber: 29
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
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 401,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 399,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Tần số (f)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 406,
                                                columnNumber: 29
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
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 407,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 405,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Vận tốc (v)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 412,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-white",
                                                children: [
                                                    currState.v.toFixed(1),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "cm/s"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 58
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 413,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 411,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500 uppercase",
                                                children: "Gia tốc (a)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 418,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-white",
                                                children: [
                                                    currState.a.toFixed(1),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: "cm/s²"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 58
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 419,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 417,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 398,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 393,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-cyan-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-amber-400 font-semibold mb-3 text-sm flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 430,
                                        columnNumber: 25
                                    }, this),
                                    " Năng lượng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 429,
                                columnNumber: 21
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
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 font-mono",
                                                        children: [
                                                            currWd.toFixed(3),
                                                            " J"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 434,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-slate-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-green-500 transition-all duration-100",
                                                    style: {
                                                        width: `${currWd / (currW || 1) * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 438,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 433,
                                        columnNumber: 25
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
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-400 font-mono",
                                                        children: [
                                                            currWt.toFixed(3),
                                                            " J"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 443,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-slate-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-blue-500 transition-all duration-100",
                                                    style: {
                                                        width: `${currWt / (currW || 1) * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 447,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 442,
                                        columnNumber: 25
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
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-yellow-400 font-mono",
                                                        children: [
                                                            currW.toFixed(3),
                                                            " J"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 452,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-yellow-500/30 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                                lineNumber: 456,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 451,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 432,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 428,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#16213e] rounded-lg p-4 border border-cyan-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-cyan-400 font-semibold mb-2 flex items-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 463,
                                        columnNumber: 102
                                    }, this),
                                    " Công thức"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 463,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-300 space-y-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "l: Chiều dài từ điểm treo đến tâm vật"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 465,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500",
                                        children: "Điều kiện: α₀ ≤ 10°"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 466,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[1px] bg-slate-700 my-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 467,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "ω = √(g/l) = ",
                                            omega.toFixed(2),
                                            " rad/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 468,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "T = 2π/ω = ",
                                            period.toFixed(2),
                                            " s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 469,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "W = mgl(1-cos(α₀))"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                        lineNumber: 470,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                                lineNumber: 464,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/simple-pendulum.tsx",
                        lineNumber: 462,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/simple-pendulum.tsx",
                lineNumber: 315,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/simple-pendulum.tsx",
        lineNumber: 278,
        columnNumber: 9
    }, this);
}
_s(SimplePendulum, "BQPA6Fy/+ELcPdljSzw0NrZ1sW0=");
_c = SimplePendulum;
var _c;
__turbopack_context__.k.register(_c, "SimplePendulum");
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
// --- COMPONENT CON ---
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
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 10,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-slate-300 font-bold text-xs uppercase tracking-wider",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 11,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4 flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/damped-oscillation.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = ControlPanel;
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
                    stroke: "#334155",
                    strokeWidth: "0.5",
                    opacity: "0.3"
                }, void 0, false, {
                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                    lineNumber: 21,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 20,
                columnNumber: 9
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
                        lineNumber: 24,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 100 0 L 0 0 0 100",
                        fill: "none",
                        stroke: "#475569",
                        strokeWidth: "1",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/damped-oscillation.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GridBackground;
const ENVIRONMENTS = {
    vacuum: {
        name: 'Chân không',
        beta: 0,
        color: '#94a3b8',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    air: {
        name: 'Không khí',
        beta: 0.05,
        color: '#38bdf8',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"]
    },
    water: {
        name: 'Nước',
        beta: 0.3,
        color: '#3b82f6',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
    },
    oil: {
        name: 'Dầu nhớt',
        beta: 0.8,
        color: '#eab308',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__["Hexagon"]
    }
};
function DampedOscillation() {
    _s();
    const energyCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [env, setEnv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('air');
    const [graphMode, setGraphMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('x') // Chế độ hiển thị đồ thị
    ;
    const GRAPH_WINDOW = 20;
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        A: 80,
        f: 0.5,
        phi: 0,
        m: 1.0,
        k: 20 // N/m
    });
    const energyHistoryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dt = 0.02;
    // --- TÍNH TOÁN ---
    const beta = ENVIRONMENTS[env].beta;
    const omega = 2 * Math.PI * params.f;
    // Tính trạng thái x, v, a tại thời điểm t
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DampedOscillation.useCallback[calculateState]": (t)=>{
            // Phase
            const phase = omega * t + params.phi;
            const exp = Math.exp(-beta * t);
            // Li độ x
            const x = params.A * exp * Math.cos(phase);
            const envelope = params.A * exp;
            // Vận tốc v = dx/dt
            const v = -beta * x - params.A * exp * omega * Math.sin(phase);
            // Gia tốc a = dv/dt
            const a = -2 * beta * v - (beta * beta + omega * omega) * x;
            // Năng lượng (xấp xỉ)
            const w0 = 0.5 * params.k * (params.A / 100) ** 2;
            const w = w0 * Math.exp(-2 * beta * t);
            return {
                x,
                v,
                a,
                envelope,
                w
            };
        }
    }["DampedOscillation.useCallback[calculateState]"], [
        beta,
        omega,
        params.A,
        params.k,
        params.phi
    ]);
    // --- GENERATE SVG PATHS ---
    const width = 800;
    const height = 380;
    const centerY = height / 2;
    const shift = Math.max(0, time - GRAPH_WINDOW);
    const timeScale = width / GRAPH_WINDOW;
    const generatePaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DampedOscillation.useCallback[generatePaths]": ()=>{
            const points = [];
            const envTop = [];
            const envBot = [];
            const scaleV = omega > 0 ? 1 / omega : 1;
            const scaleA = omega > 0 ? 1 / (omega * omega) : 1;
            for(let i = 0; i <= width; i += 2){
                const t_plot = shift + i / timeScale;
                const state = calculateState(t_plot);
                let val = 0;
                if (graphMode === 'x') val = state.x;
                else if (graphMode === 'v') val = state.v * scaleV;
                else if (graphMode === 'a') val = state.a * scaleA;
                points.push(`${i},${centerY - val}`);
                if (graphMode === 'x') {
                    envTop.push(`${i},${centerY - state.envelope}`);
                    envBot.push(`${i},${centerY + state.envelope}`);
                }
            }
            return {
                wave: `M ${points.join(" L ")}`,
                envTop: graphMode === 'x' ? `M ${envTop.join(" L ")}` : "",
                envBot: graphMode === 'x' ? `M ${envBot.join(" L ")}` : ""
            };
        }
    }["DampedOscillation.useCallback[generatePaths]"], [
        calculateState,
        graphMode,
        timeScale,
        centerY,
        omega,
        shift
    ]);
    const paths = generatePaths();
    const cx = (time - shift) * timeScale;
    const currState = calculateState(time);
    // Value to display for the dot (normalized)
    let currentDisplayVal = currState.x;
    if (graphMode === 'v') currentDisplayVal = currState.v * (omega > 0 ? 1 / omega : 1);
    if (graphMode === 'a') currentDisplayVal = currState.a * (omega > 0 ? 1 / (omega * omega) : 1);
    // --- DRAW ENERGY GRAPH ---
    const drawEnergy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DampedOscillation.useCallback[drawEnergy]": (ctx)=>{
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for(let x = 0; x < w; x += w / 10){
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
            }
            ctx.stroke();
            const history = energyHistoryRef.current;
            if (history.length < 2) return;
            const maxE = history[0].w || 1;
            const yScale = (h - 20) / maxE;
            ctx.strokeStyle = "#eab308";
            ctx.lineWidth = 2;
            ctx.beginPath();
            let started = false;
            history.forEach({
                "DampedOscillation.useCallback[drawEnergy]": (pt)=>{
                    if (pt.t < shift) return;
                    const x = (pt.t - shift) * (w / GRAPH_WINDOW);
                    const y = h - 10 - pt.w * yScale;
                    if (!started) {
                        ctx.moveTo(x, y);
                        started = true;
                    } else ctx.lineTo(x, y);
                }
            }["DampedOscillation.useCallback[drawEnergy]"]);
            ctx.stroke();
            // Simplified Fill
            ctx.fillStyle = "rgba(234, 179, 8, 0.1)";
        // Need a closed path for fill, but simple stroke is enough for now or complex close
        }
    }["DampedOscillation.useCallback[drawEnergy]"], [
        shift
    ]);
    // --- LOOP ---
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DampedOscillation.useCallback[animate]": ()=>{
            if (isPlaying) {
                timeRef.current += dt;
                setTime(timeRef.current);
                const state = calculateState(timeRef.current);
                if (timeRef.current % 0.1 < dt) {
                    energyHistoryRef.current.push({
                        t: timeRef.current,
                        w: state.w
                    });
                    if (energyHistoryRef.current.length > 5000) energyHistoryRef.current.shift();
                }
            }
            if (energyCanvasRef.current) drawEnergy(energyCanvasRef.current.getContext('2d'));
            animationRef.current = requestAnimationFrame(animate);
        }
    }["DampedOscillation.useCallback[animate]"], [
        isPlaying,
        drawEnergy,
        calculateState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DampedOscillation.useEffect": ()=>{
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "DampedOscillation.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["DampedOscillation.useEffect"];
        }
    }["DampedOscillation.useEffect"], [
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DampedOscillation.useEffect": ()=>{
            if (!isPlaying && energyCanvasRef.current) {
                drawEnergy(energyCanvasRef.current.getContext('2d'));
            }
        }
    }["DampedOscillation.useEffect"], [
        params,
        env,
        drawEnergy,
        isPlaying
    ]);
    const handleReset = ()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        energyHistoryRef.current = [];
    };
    const handleStep = (dir)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, timeRef.current + dir * 0.5);
        setTime(timeRef.current);
    };
    // Màu sắc cho từng chế độ
    const getGraphColor = ()=>{
        if (graphMode === 'x') return ENVIRONMENTS[env].color;
        if (graphMode === 'v') return '#22c55e'; // Green
        if (graphMode === 'a') return '#ef4444'; // Red
        return '#fff';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden h-[380px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 z-20 flex bg-slate-900/80 backdrop-blur rounded-lg p-1 border border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setGraphMode('x'),
                                        className: `px-3 py-1 rounded text-xs font-bold transition-colors ${graphMode === 'x' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`,
                                        children: "x(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 214,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setGraphMode('v'),
                                        className: `px-3 py-1 rounded text-xs font-bold transition-colors ${graphMode === 'v' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'}`,
                                        children: "v(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 215,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setGraphMode('a'),
                                        className: `px-3 py-1 rounded text-xs font-bold transition-colors ${graphMode === 'a' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'}`,
                                        children: "a(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 216,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "100%",
                                height: "100%",
                                viewBox: `0 0 ${width} ${height}`,
                                className: "bg-[#0f172a] absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GridBackground, {}, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 221,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "url(#grid)",
                                        opacity: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
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
                                        lineNumber: 225,
                                        columnNumber: 25
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
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    beta > 0 && graphMode === 'x' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: paths.envTop,
                                                fill: "none",
                                                stroke: "#94a3b8",
                                                strokeDasharray: "4 4",
                                                strokeWidth: "1",
                                                opacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 231,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: paths.envBot,
                                                fill: "none",
                                                stroke: "#94a3b8",
                                                strokeDasharray: "4 4",
                                                strokeWidth: "1",
                                                opacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 232,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: paths.wave,
                                        fill: "none",
                                        stroke: getGraphColor(),
                                        strokeWidth: "3",
                                        filter: "drop-shadow(0 0 4px currentColor)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 237,
                                        columnNumber: 25
                                    }, this),
                                    cx < width && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
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
                                                lineNumber: 248,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                transform: `translate(${cx}, ${centerY - currentDisplayVal})`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        r: "6",
                                                        fill: "#facc15",
                                                        stroke: "white",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "0",
                                                        y1: "0",
                                                        x2: "0",
                                                        y2: currentDisplayVal,
                                                        stroke: "#facc15",
                                                        strokeDasharray: "2 2",
                                                        opacity: "0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 249,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 247,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700 text-xs font-mono flex gap-2",
                                style: {
                                    color: getGraphColor()
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 259,
                                        columnNumber: 25
                                    }, this),
                                    graphMode === 'x' && "Đồ thị Li độ x(t)",
                                    graphMode === 'v' && "Đồ thị Vận tốc v(t)",
                                    graphMode === 'a' && "Đồ thị Gia tốc a(t)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur p-3 rounded-lg border border-slate-700/50 text-xs font-mono shadow-lg min-w-[180px] z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "t:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 268,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: [
                                                    time.toFixed(2),
                                                    "s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 269,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 267,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "x:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 272,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-400",
                                                children: [
                                                    currState.x.toFixed(1),
                                                    " px"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 273,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "v:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 276,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400",
                                                children: currState.v.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 277,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 275,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "a:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 280,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400",
                                                children: currState.a.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 281,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, this),
                                    beta > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-t border-slate-700 mt-1 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500",
                                                children: "Env:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 285,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: currState.envelope.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 286,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 284,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 266,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 text-[10px] font-mono text-slate-600",
                                children: "Hô Hoàng Anh A1K50"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 211,
                        columnNumber: 17
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
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 300,
                                            columnNumber: 199
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 300,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 301,
                                            columnNumber: 208
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${isPlaying ? 'bg-amber-500 hover:bg-amber-400 text-white' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`,
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 24,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 303,
                                            columnNumber: 42
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 24,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 303,
                                            columnNumber: 84
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 302,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                            lineNumber: 305,
                                            columnNumber: 207
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 305,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 299,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 307,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 298,
                        columnNumber: 17
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 313,
                                                columnNumber: 109
                                            }, this),
                                            " Sự hao hụt cơ năng"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-mono text-yellow-400 font-bold",
                                        children: [
                                            "Năng lượng (W) = ",
                                            (currState.w * 1000).toFixed(2),
                                            " mJ"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 312,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-32 bg-[#0f172a] rounded-lg border border-slate-700 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    ref: energyCanvasRef,
                                    width: 800,
                                    height: 128,
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                    lineNumber: 319,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 318,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-1 space-y-4 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl border border-slate-700/50 p-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-slate-300 font-bold text-xs uppercase mb-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 328,
                                        columnNumber: 109
                                    }, this),
                                    " Môi trường cản"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: Object.entries(ENVIRONMENTS).map(([key, val])=>{
                                    const IconComp = val.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setEnv(key);
                                            handleReset();
                                        },
                                        className: `p-2 rounded-lg border text-xs font-bold flex items-center gap-2 transition-all ${env === key ? 'bg-cyan-900/40 border-cyan-500 text-cyan-400' : 'bg-slate-800 border-transparent text-slate-400 hover:bg-slate-700'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComp, {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 334,
                                                columnNumber: 37
                                            }, this),
                                            " ",
                                            val.name
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 333,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 329,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanel, {
                        title: "Cấu hình hệ thống",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Tần số (f)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 95
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
                                                        lineNumber: 345,
                                                        columnNumber: 119
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 345,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0.1",
                                                max: "2",
                                                step: "0.1",
                                                value: params.f,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        f: Number(e.target.value)
                                                    });
                                                    handleReset();
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 346,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 344,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Biên độ đầu (A)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 95
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
                                                        lineNumber: 349,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 349,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "20",
                                                max: "150",
                                                value: params.A,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        A: Number(e.target.value)
                                                    });
                                                    handleReset();
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 350,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 348,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Pha ban đầu (φ)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 95
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-cyan-400 font-mono",
                                                        children: params.phi.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 353,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "6.28",
                                                step: "0.1",
                                                value: params.phi,
                                                onChange: (e)=>{
                                                    setParams({
                                                        ...params,
                                                        phi: Number(e.target.value)
                                                    });
                                                    handleReset();
                                                },
                                                className: "w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                                lineNumber: 354,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 352,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 343,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-400 font-mono space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "x = A·e^(-βt)·cos(ωt + φ)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 358,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "β = ",
                                            beta,
                                            " (Hệ số tắt dần)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                        lineNumber: 359,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/damped-oscillation.tsx",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/damped-oscillation.tsx",
                lineNumber: 325,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/damped-oscillation.tsx",
        lineNumber: 206,
        columnNumber: 9
    }, this);
}
_s(DampedOscillation, "qVm7H7Q54hlrbnspzY87p14Eqxo=");
_c2 = DampedOscillation;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ControlPanel");
__turbopack_context__.k.register(_c1, "GridBackground");
__turbopack_context__.k.register(_c2, "DampedOscillation");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$canvas$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-canvas-scale.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Special angles in degrees within one circle (0 to 360)
const SPECIAL_ANGLES_DEG = [
    0,
    30,
    45,
    60,
    90,
    120,
    135,
    150,
    180,
    210,
    225,
    240,
    270,
    300,
    315,
    330
];
const SPECIAL_ANGLES_RAD = SPECIAL_ANGLES_DEG.map(_c = (d)=>d * Math.PI / 180);
_c1 = SPECIAL_ANGLES_RAD;
function HarmonicOscillation() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Use Responsive Canvas Hook
    const { width, height, pixelRatio } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$canvas$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasScale"])(containerRef);
    const [showGraph, setShowGraph] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: true,
        v: true,
        a: true
    });
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        amplitude: 10,
        frequency: 0.5,
        phase: 0
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const omega = 2 * Math.PI * params.frequency;
    const T = 1 / params.frequency;
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
            // Use dynamic width/height from hook
            const currWidth = width;
            const currHeight = height;
            // Determine Layout based on available width
            // If width is small (< 600), maybe reduce circle section or scaling
            const isSmallScreen = currWidth < 600;
            const circleSectionWidth = isSmallScreen ? currWidth * 0.4 : 300;
            const graphStartX = circleSectionWidth + 20;
            const graphWidth = currWidth - graphStartX - 20;
            const centerX = circleSectionWidth / 2;
            const centerY = currHeight / 2;
            ctx.clearRect(0, 0, currWidth, currHeight);
            // Background
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, currWidth, currHeight);
            // --- CIRCLE SECTION ---
            // Scale radius down if screen is small
            const maxRadius = isSmallScreen ? Math.min(80, circleSectionWidth / 2 - 20) : 80;
            const radius = maxRadius;
            const angle = omega * t + params.phase;
            // Circle Grid/Axes
            ctx.strokeStyle = "#1e293b";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - radius - 30);
            ctx.lineTo(centerX, centerY + radius + 30);
            ctx.moveTo(centerX - radius - 30, centerY);
            ctx.lineTo(centerX + radius + 30, centerY);
            ctx.stroke();
            // Main Circle
            ctx.strokeStyle = "#475569";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
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
            // --- GRAPH SECTION (MERGED) ---
            const graphTop = 20;
            const graphBottom = currHeight - 20;
            const graphHeight = graphBottom - graphTop;
            const graphCenterY = graphTop + graphHeight / 2;
            // Draw Axis Line
            ctx.strokeStyle = "#334155";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(graphStartX, graphCenterY);
            ctx.lineTo(graphStartX + graphWidth, graphCenterY);
            ctx.stroke();
            // Time Window (History length)
            const timeWindow = 2.5 * T;
            const quarterT = T / 4;
            const tEnd = t;
            const tStart = t - timeWindow;
            const kStart = Math.ceil(tStart / quarterT);
            const kEnd = Math.floor(tEnd / quarterT);
            // Draw Grid Lines (Time)
            ctx.textAlign = "center";
            ctx.font = "10px monospace";
            for(let k = kStart; k <= kEnd; k++){
                if (k < 0) continue;
                const tGrid = k * quarterT;
                const xPos = graphStartX + graphWidth - (tEnd - tGrid) / timeWindow * graphWidth;
                // Only draw inside graph area
                if (xPos < graphStartX || xPos > graphStartX + graphWidth) continue;
                // Grid Line
                ctx.strokeStyle = "#334155";
                ctx.lineWidth = 1;
                ctx.setLineDash([
                    2,
                    2
                ]);
                ctx.beginPath();
                ctx.moveTo(xPos, graphTop);
                ctx.lineTo(xPos, graphBottom);
                ctx.stroke();
                ctx.setLineDash([]);
                // Grid Label
                if (xPos > graphStartX + 10 && xPos < graphStartX + graphWidth + 10) {
                    ctx.fillStyle = "#94a3b8";
                    let gridLabel = "";
                    if (k === 0) gridLabel = "0";
                    else if (k % 4 === 0) gridLabel = `${k / 4}T`;
                    else if (k % 2 === 0) gridLabel = `${k / 2}T/2`;
                    else gridLabel = `${k}T/4`;
                    ctx.fillText(gridLabel, xPos, graphBottom + 10);
                }
            }
            const drawCurve = {
                "HarmonicOscillation.useCallback[draw].drawCurve": (getValue, maxValue, color)=>{
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    const step = 2;
                    let started = false;
                    for(let i = 0; i <= graphWidth; i += step){
                        const waveT = tStart + i / graphWidth * timeWindow;
                        if (waveT < 0) continue;
                        const val = getValue(waveT);
                        const scale = graphHeight / 2 * 0.8 // 80% of half height
                        ;
                        const y = graphCenterY - val / maxValue * scale;
                        if (!started) {
                            ctx.moveTo(graphStartX + i, y);
                            started = true;
                        } else {
                            ctx.lineTo(graphStartX + i, y);
                        }
                    }
                    ctx.stroke();
                    // Draw Current Value Dot
                    const currentVal = getValue(t);
                    const currentY = graphCenterY - currentVal / maxValue * (graphHeight / 2 * 0.8);
                    if (currentY >= graphTop - 10 && currentY <= graphBottom + 10) {
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(graphStartX + graphWidth, currentY, 4, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                }
            }["HarmonicOscillation.useCallback[draw].drawCurve"];
            // Draw Curves
            if (showGraph.x) {
                drawCurve({
                    "HarmonicOscillation.useCallback[draw]": (wt)=>params.amplitude * Math.cos(omega * wt + params.phase)
                }["HarmonicOscillation.useCallback[draw]"], params.amplitude, "#ef4444");
            }
            if (showGraph.v) {
                drawCurve({
                    "HarmonicOscillation.useCallback[draw]": (wt)=>-params.amplitude * omega * Math.sin(omega * wt + params.phase)
                }["HarmonicOscillation.useCallback[draw]"], params.amplitude * omega, "#22c55e");
            }
            if (showGraph.a) {
                drawCurve({
                    "HarmonicOscillation.useCallback[draw]": (wt)=>-params.amplitude * omega * omega * Math.cos(omega * wt + params.phase)
                }["HarmonicOscillation.useCallback[draw]"], params.amplitude * omega * omega, "#3b82f6");
            }
            // Signature
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.font = "12px monospace";
            ctx.textAlign = "right";
            ctx.fillText("Hô Hoàng Anh A1K50", currWidth - 15, currHeight - 15);
            // Info overlay (Updated)
            const currentState = calculateState(t);
            const infoWidth = 160;
            const infoHeight = 110 // Increased height
            ;
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
            ctx.fillRect(10, 10, infoWidth, infoHeight);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
            ctx.strokeRect(10, 10, infoWidth, infoHeight);
            ctx.font = "13px monospace";
            ctx.textAlign = "left";
            // Time
            ctx.fillStyle = "#e2e8f0";
            ctx.fillText(`t = ${t.toFixed(3)}s`, 20, 30);
            // Values
            ctx.fillStyle = "#ef4444"; // Red for x
            ctx.fillText(`x = ${currentState.x.toFixed(2)} cm`, 20, 55);
            ctx.fillStyle = "#22c55e"; // Green for v
            ctx.fillText(`v = ${currentState.v.toFixed(2)} cm/s`, 20, 75);
            ctx.fillStyle = "#3b82f6"; // Blue for a
            ctx.fillText(`a = ${currentState.a.toFixed(2)} cm/s²`, 20, 95);
        }
    }["HarmonicOscillation.useCallback[draw]"], [
        params.amplitude,
        params.phase,
        omega,
        calculateState,
        showGraph,
        T,
        width,
        height
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HarmonicOscillation.useCallback[animate]": ()=>{
            // Only animate if canvas is available
            if (!canvasRef.current || width === 0 || height === 0) return;
            // We can render directly using 'draw' since we have the context via ref or we can get it here
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Check pixel ratio scaling 
            if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
                canvas.width = width * pixelRatio;
                canvas.height = height * pixelRatio;
            }
            // Scale Context
            ctx.save();
            ctx.scale(pixelRatio, pixelRatio);
            if (isPlaying) {
                timeRef.current += dt;
                setTime(timeRef.current);
            }
            draw(ctx, timeRef.current);
            ctx.restore();
            if (isPlaying) {
                animationRef.current = requestAnimationFrame(animate);
            }
        }
    }["HarmonicOscillation.useCallback[animate]"], [
        isPlaying,
        draw,
        width,
        height,
        pixelRatio
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HarmonicOscillation.useEffect": ()=>{
            // Start animation loop
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
    // Need a separate effect to draw when NOT playing (paused or init)
    // And to handle resize (width/height change)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HarmonicOscillation.useEffect": ()=>{
            if (!isPlaying && canvasRef.current && width > 0 && height > 0) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;
                if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
                    canvas.width = width * pixelRatio;
                    canvas.height = height * pixelRatio;
                }
                ctx.save();
                ctx.scale(pixelRatio, pixelRatio);
                draw(ctx, timeRef.current);
                ctx.restore();
            }
        }
    }["HarmonicOscillation.useEffect"], [
        isPlaying,
        draw,
        width,
        height,
        pixelRatio
    ]); // Trigger on resize
    const handleManualUpdate = (newTime)=>{
        setIsPlaying(false);
        timeRef.current = Math.max(0, newTime);
        setTime(timeRef.current);
        // Draw will be triggered by useEffect due to state change? No, timeRef doesn't trigger effect
        // But setTime does trigger render. 
        // Wait, draw is in useEffect dep list because it depends on calculations? 
        // Ideally we force a redraw here.
        if (canvasRef.current && width > 0) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                ctx.save();
                ctx.scale(pixelRatio, pixelRatio);
                draw(ctx, timeRef.current);
                ctx.restore();
            }
        }
    };
    // Handle large jumps
    const handleSkip = (direction)=>{
        handleManualUpdate(timeRef.current + direction * 0.5);
    };
    const handleReset = ()=>{
        handleManualUpdate(0);
    };
    // Handle Micro Step (T/80)
    const handleMicroStep = (direction)=>{
        const stepTime = T / 80;
        const epsilon = 1e-4;
        const currentPhaseTotal = omega * timeRef.current + params.phase;
        const currentPhaseNorm = currentPhaseTotal % (2 * Math.PI);
        const currentPhasePos = currentPhaseNorm < 0 ? currentPhaseNorm + 2 * Math.PI : currentPhaseNorm;
        let targetTime = timeRef.current + direction * stepTime;
        const stepPhase = 2 * Math.PI / 80;
        if (direction > 0) {
            let nextSpecial = SPECIAL_ANGLES_RAD.find((a)=>a > currentPhasePos + epsilon);
            let distance = 0;
            if (nextSpecial !== undefined) distance = nextSpecial - currentPhasePos;
            else {
                nextSpecial = SPECIAL_ANGLES_RAD[0] + 2 * Math.PI;
                distance = nextSpecial - currentPhasePos;
            }
            if (distance <= stepPhase + epsilon) targetTime = timeRef.current + distance / omega;
        } else {
            const reversed = [
                ...SPECIAL_ANGLES_RAD
            ].reverse();
            let prevSpecial = reversed.find((a)=>a < currentPhasePos - epsilon);
            let distance = 0;
            if (prevSpecial !== undefined) distance = currentPhasePos - prevSpecial;
            else {
                prevSpecial = SPECIAL_ANGLES_RAD[SPECIAL_ANGLES_RAD.length - 1] - 2 * Math.PI;
                distance = currentPhasePos - prevSpecial;
            }
            if (distance <= stepPhase + epsilon) targetTime = timeRef.current - distance / omega;
        }
        handleManualUpdate(targetTime);
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
                        ref: containerRef,
                        className: "bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 relative w-full h-[400px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 flex gap-2 z-10 bg-[#0f172a]/80 p-1 rounded-lg backdrop-blur-sm border border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGraph((p)=>({
                                                    ...p,
                                                    x: !p.x
                                                })),
                                        className: `px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.x ? "bg-red-500 text-white" : "bg-slate-700 text-slate-400"}`,
                                        children: "x(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 404,
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
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGraph((p)=>({
                                                    ...p,
                                                    a: !p.a
                                                })),
                                        className: `px-2 py-1 text-[10px] font-bold rounded transition-all ${showGraph.a ? "bg-blue-500 text-white" : "bg-slate-700 text-slate-400"}`,
                                        children: "a(t)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                className: "w-full h-full block"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex flex-wrap items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1px] h-8 bg-slate-700 mx-1"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSkip(-1),
                                className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleMicroStep(-1),
                                className: "w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-cyan-400 flex items-center justify-center transition-all shadow-md active:scale-95 ring-1 ring-slate-700/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsPlaying(!isPlaying),
                                className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 border border-transparent mx-2 ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"} text-white`,
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    size: 28,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 443,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 28,
                                    fill: "currentColor",
                                    className: "ml-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 443,
                                    columnNumber: 68
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleMicroStep(1),
                                className: "w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-cyan-400 flex items-center justify-center transition-all shadow-md active:scale-95 ring-1 ring-slate-700/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSkip(1),
                                className: "w-10 h-10 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center justify-center transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                lineNumber: 396,
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
                                lineNumber: 456,
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
                                                        lineNumber: 460,
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
                                                        lineNumber: 461,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 459,
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
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-400",
                                                        children: [
                                                            "Tần số f (Chu kỳ T = ",
                                                            (1 / params.frequency).toFixed(2),
                                                            "s)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                        lineNumber: 467,
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
                                                        lineNumber: 468,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 466,
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
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 465,
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
                                                        lineNumber: 474,
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
                                                        lineNumber: 475,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 473,
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
                                                lineNumber: 477,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 472,
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
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this),
                                    " Năng lượng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 483,
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
                                                        lineNumber: 489,
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
                                                        lineNumber: 490,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 488,
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
                                                    lineNumber: 493,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 487,
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
                                                        lineNumber: 498,
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
                                                        lineNumber: 499,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 497,
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
                                                    lineNumber: 502,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 501,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 496,
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
                                                        lineNumber: 507,
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
                                                        lineNumber: 508,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-yellow-500/30 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 482,
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
                                lineNumber: 516,
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
                                                lineNumber: 518,
                                                columnNumber: 49
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400",
                                                children: "Li độ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 518,
                                                columnNumber: 80
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "v = -Aω·sin(ωt + φ)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 519,
                                                columnNumber: 49
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400",
                                                children: "Vận tốc"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 519,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "a = -Aω²·cos(ωt + φ)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 520,
                                                columnNumber: 49
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-400",
                                                children: "Gia tốc"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                                lineNumber: 520,
                                                columnNumber: 83
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[1px] bg-slate-700 my-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                        lineNumber: 521,
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
                                        lineNumber: 522,
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
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/harmonic-oscillation.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s(HarmonicOscillation, "ircRLMpqOvAJJPZ9oWMNFH7YtXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$canvas$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasScale"]
    ];
});
_c2 = HarmonicOscillation;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SPECIAL_ANGLES_RAD$SPECIAL_ANGLES_DEG.map");
__turbopack_context__.k.register(_c1, "SPECIAL_ANGLES_RAD");
__turbopack_context__.k.register(_c2, "HarmonicOscillation");
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
                        ctx.lineTo(x, y - vy * 0.3);
                        ctx.stroke();
                    }
                    ctx.fillStyle = "rgba(74, 222, 128, 0.3)";
                    ctx.beginPath();
                    ctx.arc(x, centerY, 3, 0, 2 * Math.PI);
                    ctx.fill();
                }
                ctx.fillStyle = "#f97316";
                ctx.font = "14px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("↕ Hướng dao động", width / 2, 40);
                ctx.fillText("→ Hướng truyền sóng", width / 2, 60);
                ctx.textAlign = "left"; // Reset alignment
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
                ctx.textAlign = "center";
                ctx.fillText("↔ Hướng dao động", width / 2, 40);
                ctx.fillText("→ Hướng truyền sóng", width / 2, 60);
                ctx.textAlign = "left"; // Reset alignment
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
            setTime(timeRef.current);
            draw(ctx, timeRef.current);
            if (isPlaying) {
                animationRef.current = requestAnimationFrame(animate);
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
        timeRef.current = Math.max(0, timeRef.current + dt * direction * 10);
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
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                    lineNumber: 255,
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
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                    lineNumber: 262,
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
                                    lineNumber: 269,
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
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                lineNumber: 248,
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
                                lineNumber: 296,
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
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setWaveType("longitudinal"),
                                        className: `flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all border ${waveType === "longitudinal" ? "bg-cyan-600 border-cyan-500 text-white shadow" : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"}`,
                                        children: "Sóng dọc"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 295,
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
                                lineNumber: 320,
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
                                                        lineNumber: 324,
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
                                                        lineNumber: 325,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                lineNumber: 323,
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
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 322,
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
                                                        lineNumber: 338,
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
                                                        children: "Tần số f"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                                        lineNumber: 352,
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
                                                lineNumber: 355,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 319,
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
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-300 space-y-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "y = A·sin(kx - ωt)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                        lineNumber: 371,
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
                                        lineNumber: 372,
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
                                        lineNumber: 373,
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
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/mechanical-waves.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/mechanical-waves.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/mechanical-waves.tsx",
        lineNumber: 247,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- COMPONENT CON ---
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
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 10,
                        columnNumber: 16
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-slate-300 font-bold text-xs uppercase tracking-wider",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/sound-waves.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4 flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/experiments/sound-waves.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/sound-waves.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ControlPanel;
const StatBox = ({ label, value, unit, color = "text-slate-200" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900/50 rounded-lg p-2 border border-slate-700/50 flex flex-col items-center justify-center min-w-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] text-slate-500 uppercase font-semibold mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/experiments/sound-waves.tsx",
                lineNumber: 19,
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
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/sound-waves.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/sound-waves.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = StatBox;
const SoundWaveLab = ()=>{
    _s();
    // --- STATE ---
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFrozen, setIsFrozen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Physics & Measurement
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Measured freq
    const [medium, setMedium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('air');
    const [velocity, setVelocity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(343);
    // Generator
    const [genFreq, setGenFreq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(440);
    const [genType, setGenType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sine');
    const [genVolume, setGenVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    // --- REFS ---
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const microphoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oscillatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Oscilloscope
    const canvasFreqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Spectrum
    const timeDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Uint8Array(0));
    const freqDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Uint8Array(0));
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
    // --- AUDIO LOGIC ---
    const initAudio = async ()=>{
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContextRef.current?.state === 'suspended') await audioContextRef.current.resume();
    };
    const startMicrophone = async ()=>{
        try {
            await initAudio();
            if (!audioContextRef.current) return;
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            setupAnalyser();
            microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
            microphoneRef.current.connect(analyserRef.current);
            setIsListening(true);
            setIsGenerating(false);
            setIsFrozen(false);
        } catch (err) {
            alert("Cần cấp quyền Micro!");
        }
    };
    const startGenerator = async ()=>{
        await initAudio();
        if (!audioContextRef.current) return;
        if (isListening) stopMicrophone();
        setupAnalyser();
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
    };
    const setupAnalyser = ()=>{
        if (!audioContextRef.current) return;
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 2048;
        analyserRef.current.smoothingTimeConstant = 0.8;
    };
    const stopMicrophone = ()=>{
        microphoneRef.current?.disconnect();
        microphoneRef.current = null;
        setIsListening(false);
    };
    const stopGenerator = ()=>{
        try {
            oscillatorRef.current?.stop();
        } catch (e) {}
        oscillatorRef.current?.disconnect();
        oscillatorRef.current = null;
        setIsGenerating(false);
    };
    const updateGen = (freq, type, vol)=>{
        if (audioContextRef.current && oscillatorRef.current && gainNodeRef.current) {
            oscillatorRef.current.frequency.setValueAtTime(freq, audioContextRef.current.currentTime);
            oscillatorRef.current.type = type;
            gainNodeRef.current.gain.setValueAtTime(vol, audioContextRef.current.currentTime);
        }
        setGenFreq(freq);
        setGenType(type);
        setGenVolume(vol);
    };
    const getPitch = (buffer, sampleRate)=>{
        let maxVal = -Infinity;
        let maxIndex = -1;
        for(let i = 1; i < buffer.length / 2; i++){
            if (buffer[i] > maxVal) {
                maxVal = buffer[i];
                maxIndex = i;
            }
        }
        if (maxVal < 100) return 0; // Noise gate
        // Interpolation
        const prev = buffer[maxIndex - 1];
        const next = buffer[maxIndex + 1];
        const curr = buffer[maxIndex];
        const trueIndex = maxIndex + (next - prev) / (2 * (2 * curr - next - prev));
        return trueIndex * sampleRate / (analyserRef.current?.fftSize || 2048);
    };
    // --- DRAW LOOP ---
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SoundWaveLab.useCallback[draw]": ()=>{
            if (!analyserRef.current || !audioContextRef.current) return;
            if (!isFrozen) {
                const bufferLength = analyserRef.current.frequencyBinCount;
                if (timeDataRef.current.length !== bufferLength) {
                    timeDataRef.current = new Uint8Array(bufferLength);
                    freqDataRef.current = new Uint8Array(bufferLength);
                }
                analyserRef.current.getByteTimeDomainData(timeDataRef.current);
                analyserRef.current.getByteFrequencyData(freqDataRef.current);
                // Update Freq Display
                if (isGenerating) setFrequency(genFreq);
                else {
                    const f = getPitch(freqDataRef.current, audioContextRef.current.sampleRate);
                    setFrequency({
                        "SoundWaveLab.useCallback[draw]": (prev)=>f > 0 && Math.abs(prev - f) > 5 ? f : prev
                    }["SoundWaveLab.useCallback[draw]"]); // Simple smoothing
                }
            }
            // 1. Draw Time Domain (Oscilloscope)
            const ctxTime = canvasTimeRef.current?.getContext('2d');
            if (ctxTime && canvasTimeRef.current) {
                const w = canvasTimeRef.current.width;
                const h = canvasTimeRef.current.height;
                ctxTime.fillStyle = '#0f172a';
                ctxTime.fillRect(0, 0, w, h);
                // Grid
                ctxTime.strokeStyle = '#1e293b';
                ctxTime.lineWidth = 1;
                ctxTime.beginPath();
                for(let x = 0; x <= w; x += w / 10){
                    ctxTime.moveTo(x, 0);
                    ctxTime.lineTo(x, h);
                }
                ctxTime.stroke();
                ctxTime.strokeStyle = '#334155';
                ctxTime.beginPath();
                ctxTime.moveTo(0, h / 2);
                ctxTime.lineTo(w, h / 2);
                ctxTime.stroke();
                // Wave
                ctxTime.lineWidth = 3;
                ctxTime.strokeStyle = '#38bdf8';
                ctxTime.beginPath();
                const sliceWidth = w * 1.0 / timeDataRef.current.length;
                let x = 0;
                for(let i = 0; i < timeDataRef.current.length; i++){
                    const v = timeDataRef.current[i] / 128.0;
                    const y = v * h / 2;
                    if (i === 0) ctxTime.moveTo(x, y);
                    else ctxTime.lineTo(x, y);
                    x += sliceWidth;
                }
                ctxTime.stroke();
                // Author
                ctxTime.fillStyle = "rgba(255,255,255,0.1)";
                ctxTime.font = "12px sans-serif";
                ctxTime.textAlign = "right";
                ctxTime.fillText("Hô Hoàng Anh A1K50", w - 10, h - 10);
            }
            // 2. Draw Frequency Domain (Spectrum)
            const ctxFreq = canvasFreqRef.current?.getContext('2d');
            if (ctxFreq && canvasFreqRef.current) {
                const w = canvasFreqRef.current.width;
                const h = canvasFreqRef.current.height;
                ctxFreq.fillStyle = '#0f172a';
                ctxFreq.fillRect(0, 0, w, h);
                const barWidth = w / freqDataRef.current.length * 2.5;
                let x = 0;
                for(let i = 0; i < freqDataRef.current.length; i++){
                    const barHeight = freqDataRef.current[i] / 255 * h;
                    ctxFreq.fillStyle = `rgb(${barHeight + 100},50,200)`;
                    ctxFreq.fillRect(x, h - barHeight, barWidth, barHeight);
                    x += barWidth + 1;
                }
            }
            requestRef.current = requestAnimationFrame(draw);
        }
    }["SoundWaveLab.useCallback[draw]"], [
        isFrozen,
        isGenerating,
        genFreq
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundWaveLab.useEffect": ()=>{
            requestRef.current = requestAnimationFrame(draw);
            return ({
                "SoundWaveLab.useEffect": ()=>{
                    if (requestRef.current) cancelAnimationFrame(requestRef.current);
                }
            })["SoundWaveLab.useEffect"];
        }
    }["SoundWaveLab.useEffect"], [
        draw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasTimeRef,
                                width: 800,
                                height: 380,
                                className: "w-full h-[380px] bg-[#0f172a]"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-2 rounded-lg border border-slate-700 text-xs font-mono text-cyan-400 flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/sound-waves.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Dao động ký điện tử"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-3 border border-slate-700/50 shadow-md flex items-center gap-4 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (isGenerating) stopGenerator();
                                            else startGenerator();
                                        },
                                        disabled: isListening,
                                        className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isGenerating ? 'bg-green-600 text-white shadow-lg' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'} ${isListening ? 'opacity-30' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            isGenerating ? "Tắt Máy Phát" : "Bật Máy Phát"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/sound-waves.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (isListening) stopMicrophone();
                                            else startMicrophone();
                                        },
                                        disabled: isGenerating,
                                        className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isListening ? 'bg-red-500 text-white shadow-lg' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'} ${isGenerating ? 'opacity-30' : ''}`,
                                        children: [
                                            isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                                lineNumber: 260,
                                                columnNumber: 36
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                                lineNumber: 260,
                                                columnNumber: 58
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            isListening ? "Tắt Mic" : "Bật Mic"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/sound-waves.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsFrozen(!isFrozen),
                                className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isFrozen ? 'bg-amber-500 text-white' : 'bg-cyan-600 text-white'}`,
                                children: [
                                    isFrozen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        size: 18,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/sound-waves.tsx",
                                        lineNumber: 268,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        size: 18,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/sound-waves.tsx",
                                        lineNumber: 268,
                                        columnNumber: 69
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    isFrozen ? "Tiếp tục" : "Dừng hình"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-bold text-purple-400 uppercase flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 275,
                                            columnNumber: 101
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Phổ Tần Số (FFT)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-32 bg-[#0f172a] rounded-lg border border-slate-700 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    ref: canvasFreqRef,
                                    width: 800,
                                    height: 128,
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 278,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/sound-waves.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-1 space-y-4 flex flex-col",
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
                                    lineNumber: 288,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 287,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-slate-400 text-sm uppercase tracking-wider mb-2",
                                children: isGenerating ? "Tần số đang phát" : "Tần số đo được"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 290,
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
                                        lineNumber: 295,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/sound-waves.tsx",
                                lineNumber: 293,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanel, {
                        title: "Cấu hình nguồn phát",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs text-slate-400 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Tần số phát (Hz)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 font-mono font-bold",
                                                    children: genFreq.toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 55
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 303,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "20",
                                            max: "5000",
                                            step: "1",
                                            value: genFreq,
                                            onChange: (e)=>updateGen(Number(e.target.value), genType, genVolume),
                                            className: "w-full accent-green-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 306,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 302,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs text-slate-400 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Biên độ (Volume)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 font-mono font-bold",
                                                    children: [
                                                        (genVolume * 100).toFixed(0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 55
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 309,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "1",
                                            step: "0.01",
                                            value: genVolume,
                                            onChange: (e)=>updateGen(genFreq, genType, Number(e.target.value)),
                                            className: "w-full accent-green-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 312,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-slate-400 mb-2 block",
                                            children: "Dạng sóng"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 315,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: Object.entries(WAVEFORMS).map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateGen(genFreq, key, genVolume),
                                                    className: `text-[10px] py-2 rounded border transition-all ${genType === key ? 'bg-green-600 border-green-500 text-white' : 'bg-slate-800 border-slate-600 text-slate-400 hover:text-white'}`,
                                                    children: label
                                                }, key, false, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 316,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-waves.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanel, {
                        title: "Thông số vật lý",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-400 mb-1 block",
                                            children: "Môi trường"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 329,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: medium,
                                            onChange: (e)=>setMedium(e.target.value),
                                            className: "w-full bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-slate-200 outline-none focus:border-cyan-500",
                                            children: Object.entries(MEDIUMS).map(([key, val])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: key,
                                                    children: [
                                                        val.name,
                                                        " (v=",
                                                        val.v,
                                                        "m/s)"
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 330,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                            label: "Bước sóng (λ)",
                                            value: frequency > 0 ? (velocity / frequency).toFixed(3) : "--",
                                            unit: "m",
                                            color: "text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 337,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                            label: "Chu kỳ (T)",
                                            value: frequency > 0 ? (1000 / frequency).toFixed(2) : "--",
                                            unit: "ms",
                                            color: "text-orange-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 336,
                                    columnNumber: 17
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
                                                    lineNumber: 342,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " CÔNG THỨC & CHÚ THÍCH"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 341,
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
                                                            lineNumber: 346,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-600",
                                                            children: "// PT Dao động"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "ω = 2πf"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-600",
                                                            children: "// Tần số góc"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "T = 1/f"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-600",
                                                            children: "// Chu kỳ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "λ = v/f = v·T"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-600",
                                                            children: "// Bước sóng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "k = 2π/λ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-600",
                                                            children: "// Số sóng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-yellow-500/80 pt-1 border-t border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "u = A·cos(ωt - kx)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "// PT Sóng"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-waves.tsx",
                                            lineNumber: 344,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-waves.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-waves.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/experiments/sound-waves.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/sound-waves.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/sound-waves.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SoundWaveLab, "+bopAv3lGpY4xoNSr3S4thUDfNs=");
_c2 = SoundWaveLab;
const __TURBOPACK__default__export__ = SoundWaveLab;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ControlPanel");
__turbopack_context__.k.register(_c1, "StatBox");
__turbopack_context__.k.register(_c2, "SoundWaveLab");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/disc.js [app-client] (ecmascript) <export default as Disc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rainbow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rainbow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rainbow.js [app-client] (ecmascript) <export default as Rainbow>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- CÁC HÀM BỔ TRỢ ---
// Polyfill cho hàm sinc
if (!Math.sinc) {
    Math.sinc = function(x) {
        return x === 0 ? 1 : Math.sin(x) / x;
    };
}
// Hàm chuyển đổi bước sóng (nm) sang màu RGB
const wavelengthToRGB = (wavelength)=>{
    let r, g, b, alpha;
    if (wavelength >= 380 && wavelength < 440) {
        r = -(wavelength - 440) / (440 - 380);
        g = 0;
        b = 1;
    } else if (wavelength >= 440 && wavelength < 490) {
        r = 0;
        g = (wavelength - 440) / (490 - 440);
        b = 1;
    } else if (wavelength >= 490 && wavelength < 510) {
        r = 0;
        g = 1;
        b = -(wavelength - 510) / (510 - 490);
    } else if (wavelength >= 510 && wavelength < 580) {
        r = (wavelength - 510) / (580 - 510);
        g = 1;
        b = 0;
    } else if (wavelength >= 580 && wavelength < 645) {
        r = 1;
        g = -(wavelength - 645) / (645 - 580);
        b = 0;
    } else if (wavelength >= 645 && wavelength < 781) {
        r = 1;
        g = 0;
        b = 0;
    } else {
        r = 0;
        g = 0;
        b = 0;
    }
    if (wavelength >= 380 && wavelength < 420) {
        alpha = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
    } else if (wavelength >= 420 && wavelength < 701) {
        alpha = 1.0;
    } else if (wavelength >= 701 && wavelength < 781) {
        alpha = 0.3 + 0.7 * (781 - wavelength) / (781 - 701);
    } else {
        alpha = 0;
    }
    return {
        r: Math.round(r * 255 * alpha),
        g: Math.round(g * 255 * alpha),
        b: Math.round(b * 255 * alpha),
        colorString: `rgb(${Math.round(r * 255 * alpha)}, ${Math.round(g * 255 * alpha)}, ${Math.round(b * 255 * alpha)})`
    };
};
function WaveInterference() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State chung
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mechanical');
    // State Sóng cơ
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showNodalLines, setShowNodalLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [view3D, setView3D] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mechParams, setMechParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        frequency: 0.8,
        amplitude: 1.0,
        sourceDistance: 120,
        wavelength: 40
    });
    // State Sóng ánh sáng
    const [lightMode, setLightMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mono');
    const [lightParams, setLightParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        wavelength1: 500,
        wavelength2: 650,
        slitDistance: 1.0,
        screenDistance: 2.0
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // --- LOGIC SÓNG CƠ ---
    const omega = 2 * Math.PI * mechParams.frequency;
    const k_mech = 2 * Math.PI / mechParams.wavelength;
    const dt = 1 / 60;
    const calculateWaveHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[calculateWaveHeight]": (x, y, s1x, s1y, s2x, s2y, t)=>{
            const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2);
            const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2);
            const amp1 = mechParams.amplitude / Math.sqrt(1 + d1 * 0.01);
            const amp2 = mechParams.amplitude / Math.sqrt(1 + d2 * 0.01);
            const wave1 = amp1 * Math.sin(k_mech * d1 - omega * t);
            const wave2 = amp2 * Math.sin(k_mech * d2 - omega * t);
            return wave1 + wave2;
        }
    }["WaveInterference.useCallback[calculateWaveHeight]"], [
        k_mech,
        omega,
        mechParams.amplitude
    ]);
    const getNodalLinePoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[getNodalLinePoints]": (width, height, s1x, s1y, s2x, s2y, order)=>{
            const points = [];
            const pathDiff = (order + 0.5) * mechParams.wavelength;
            for(let x = 0; x < width; x += 2){
                for(let y = 0; y < height; y += 2){
                    const d1 = Math.sqrt((x - s1x) ** 2 + (y - s1y) ** 2);
                    const d2 = Math.sqrt((x - s2x) ** 2 + (y - s2y) ** 2);
                    if (Math.abs(Math.abs(d1 - d2) - pathDiff) < 2.5) points.push({
                        x,
                        y
                    });
                }
            }
            return points;
        }
    }["WaveInterference.useCallback[getNodalLinePoints]"], [
        mechParams.wavelength
    ]);
    const drawMechanical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[drawMechanical]": (ctx, t)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            const centerY = height / 2;
            const source1 = {
                x: 80,
                y: centerY - mechParams.sourceDistance / 2
            };
            const source2 = {
                x: 80,
                y: centerY + mechParams.sourceDistance / 2
            };
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;
            const resolution = view3D ? 3 : 2;
            if (view3D) {
                // Gradient Background
                const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
                bgGrad.addColorStop(0, "#0f172a");
                bgGrad.addColorStop(1, "#1e293b");
                ctx.fillStyle = bgGrad;
                ctx.fillRect(0, 0, width, height);
                const perspectiveScale = 0.6;
                const horizonY = height * 0.2;
                const gridSpacing = 4; // High fidelity
                const zStart = 0;
                const zEnd = height * 1.5;
                // Render from Far (z=0) to Near (z=max)
                for(let z = zStart; z <= zEnd; z += gridSpacing){
                    const perspY = horizonY + z * perspectiveScale;
                    // Skip if off screen
                    if (perspY > height) break;
                    const scale = 0.2 + z / (height * 1.2) * 0.8;
                    // Generate points for this Z-slice
                    const points = [];
                    for(let x = 0; x <= width; x += gridSpacing){
                        const worldX = (x - width / 2) / scale + width / 2;
                        const worldZ = z;
                        // Calculate Wave Height
                        const waveHeight = calculateWaveHeight(worldX, worldZ, source1.x, source1.y, source2.x, source2.y, t);
                        const screenX = width / 2 + (x - width / 2); // Spread X based on perspective?
                        // Actually `x` loop is screen space X?
                        // In previous code: `worldX` was derived from `x`.
                        // `const screenX = width / 2 + (x - width / 2) * scale` ???
                        // Usually: x is projected.
                        // Let's stick to iterating screen X and unprojecting for sample is easier for filling screen.
                        // But simpler: Iterate Screen X.
                        // `const worldX = (x - width/2)/scale + width/2`.
                        // This assumes linear mapping.
                        // Display Logic
                        // Perspective Y shift based on height
                        const screenY = perspY - waveHeight * 12 * scale;
                        points.push({
                            x,
                            y: screenY
                        });
                    }
                    if (points.length < 2) continue;
                    // Draw Filled Polygon (Occlusion)
                    ctx.beginPath();
                    ctx.moveTo(points[0].x, points[0].y);
                    for(let i = 1; i < points.length; i++){
                        // Smooth curves
                        // ctx.lineTo(points[i].x, points[i].y);
                        // Quadratic for smoother look? 
                        // Simple lineTo is fast and fine for dense grid.
                        ctx.lineTo(points[i].x, points[i].y);
                    }
                    // Close shape downwards
                    ctx.lineTo(width, height);
                    ctx.lineTo(0, height);
                    ctx.closePath();
                    ctx.fillStyle = "#0f172a"; // Opaque dark fill
                    ctx.fill();
                    // Draw Stroke (The Water Surface Line)
                    ctx.beginPath();
                    ctx.moveTo(points[0].x, points[0].y);
                    for(let i = 1; i < points.length; i++){
                        ctx.lineTo(points[i].x, points[i].y);
                    }
                    // Distance based color fading
                    const distanceAlpha = 0.3 + 0.7 * (z / zEnd);
                    ctx.strokeStyle = `rgba(34, 211, 238, ${distanceAlpha})`; // Cyan-400
                    ctx.lineWidth = 1 + scale; // Lines thicker when near
                    ctx.stroke();
                }
            } else {
                // REALISTIC RIPPLE TANK SHADER (2D)
                for(let y = 0; y < height; y += resolution){
                    for(let x = 0; x < width; x += resolution){
                        const waveHeight = calculateWaveHeight(x, y, source1.x, source1.y, source2.x, source2.y, t);
                        // Ripple Tank Physics:
                        // Crests (Positive) act as convex lenses -> Focus light -> Bright Strips
                        // Troughs (Negative) act as concave lenses -> Diverge light -> Dark Strips
                        // Flat water -> Average Brightness
                        const maxAmp = 2 * mechParams.amplitude;
                        const val = Math.max(-1, Math.min(1, waveHeight / maxAmp)) // Clamp -1..1
                        ;
                        let r, g, b;
                        // Base Water Color (Deep Blue-Grey)
                        const baseR = 15, baseG = 113, baseB = 115;
                        if (val > 0) {
                            // Highlight (Crests) - Cyan/White
                            const intensity = Math.pow(val, 0.7); // Non-linear for sharper crests
                            r = 15 + (220 - 15) * intensity;
                            g = 113 + (255 - 113) * intensity;
                            b = 115 + (255 - 115) * intensity;
                        } else {
                            // Shadow (Troughs) - Darker
                            const intensity = Math.pow(Math.abs(val), 0.7);
                            r = 15 * (1 - intensity * 0.8); // Don't go pitch black
                            g = 113 * (1 - intensity * 0.8);
                            b = 115 * (1 - intensity * 0.8);
                        }
                        // Render Pixel (or Block)
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
                const maxOrder = Math.floor(mechParams.sourceDistance / mechParams.wavelength) + 2;
                for(let order = 0; order <= maxOrder; order++){
                    const points = getNodalLinePoints(width, height, source1.x, source1.y, source2.x, source2.y, order);
                    if (points.length > 0) {
                        const upperPoints = points.filter({
                            "WaveInterference.useCallback[drawMechanical].upperPoints": (p)=>p.y < centerY
                        }["WaveInterference.useCallback[drawMechanical].upperPoints"]).sort({
                            "WaveInterference.useCallback[drawMechanical].upperPoints": (a, b)=>a.x - b.x
                        }["WaveInterference.useCallback[drawMechanical].upperPoints"]);
                        const lowerPoints = points.filter({
                            "WaveInterference.useCallback[drawMechanical].lowerPoints": (p)=>p.y >= centerY
                        }["WaveInterference.useCallback[drawMechanical].lowerPoints"]).sort({
                            "WaveInterference.useCallback[drawMechanical].lowerPoints": (a, b)=>a.x - b.x
                        }["WaveInterference.useCallback[drawMechanical].lowerPoints"]);
                        if (upperPoints.length > 5) {
                            ctx.beginPath();
                            ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
                            for(let i = 1; i < upperPoints.length; i++)ctx.lineTo(upperPoints[i].x, upperPoints[i].y);
                            ctx.stroke();
                        }
                        if (lowerPoints.length > 5) {
                            ctx.beginPath();
                            ctx.moveTo(lowerPoints[0].x, lowerPoints[0].y);
                            for(let i = 1; i < lowerPoints.length; i++)ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y);
                            ctx.stroke();
                        }
                    }
                }
                ctx.strokeStyle = "rgba(100, 255, 100, 0.5)";
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
            if (!view3D) {
                const drawSource = {
                    "WaveInterference.useCallback[drawMechanical].drawSource": (x, y, label)=>{
                        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
                        gradient.addColorStop(0, "rgba(255, 50, 50, 1)");
                        gradient.addColorStop(1, "rgba(255, 50, 50, 0)");
                        ctx.fillStyle = gradient;
                        ctx.beginPath();
                        ctx.arc(x, y, 20, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.fillStyle = "#fff";
                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.fillStyle = "#fff";
                        ctx.font = "bold 14px monospace";
                        ctx.fillText(label, x - 25, y + 5);
                    }
                }["WaveInterference.useCallback[drawMechanical].drawSource"];
                drawSource(source1.x, source1.y, "S₁");
                drawSource(source2.x, source2.y, "S₂");
            }
        }
    }["WaveInterference.useCallback[drawMechanical]"], [
        mechParams,
        view3D,
        showNodalLines,
        calculateWaveHeight,
        getNodalLinePoints
    ]);
    // --- HÀM VẼ GIAO THOA ÁNH SÁNG ---
    const drawLight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[drawLight]": (ctx)=>{
            const width = ctx.canvas.width;
            const height = ctx.canvas.height;
            const centerX = width / 2;
            // Nền tối
            ctx.fillStyle = "#020617";
            ctx.fillRect(0, 0, width, height);
            const a = lightParams.slitDistance * 1e-3;
            const D = lightParams.screenDistance;
            const physicalScreenWidth = 0.04;
            const pixelsPerMeter = width / physicalScreenWidth;
            let wavelengths = [];
            if (lightMode === 'mono') {
                wavelengths.push({
                    wl: lightParams.wavelength1,
                    intensityScale: 1.0
                });
            } else if (lightMode === 'dual') {
                wavelengths.push({
                    wl: lightParams.wavelength1,
                    intensityScale: 0.8
                });
                wavelengths.push({
                    wl: lightParams.wavelength2,
                    intensityScale: 0.8
                });
            } else if (lightMode === 'white') {
                for(let w = 380; w <= 750; w += 10){
                    let scale = 0.5;
                    if (w > 450 && w < 650) scale = 0.8;
                    wavelengths.push({
                        wl: w,
                        intensityScale: scale * 0.15
                    });
                }
            }
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;
            for(let x = 0; x < width; x++){
                const xPhysical = (x - centerX) / pixelsPerMeter;
                let rTotal = 0, gTotal = 0, bTotal = 0;
                for (const src of wavelengths){
                    const lambda = src.wl * 1e-9;
                    const phaseDifference = 2 * Math.PI * a * xPhysical / (lambda * D);
                    let intensity = Math.cos(phaseDifference / 2) ** 2;
                    // SỬA LỖI: Đổi tên biến 'b' thành 'slitWidth' để không trùng với 'b' trong RGB
                    const slitWidth = a / 10;
                    const diffractionPhase = Math.PI * slitWidth * xPhysical / (lambda * D);
                    const diffractionFactor = Math.sinc(diffractionPhase) ** 2;
                    intensity = intensity * diffractionFactor * src.intensityScale;
                    const rgb = wavelengthToRGB(src.wl);
                    rTotal += rgb.r * intensity;
                    gTotal += rgb.g * intensity;
                    bTotal += rgb.b * intensity;
                }
                rTotal = Math.min(255, rTotal);
                gTotal = Math.min(255, gTotal);
                bTotal = Math.min(255, bTotal);
                // Môi phỏng Chùm tia Laser (Gaussian Beam)
                const beamRadius = height * 0.35;
                for(let y = 0; y < height; y++){
                    const idx = (y * width + x) * 4;
                    // Vertical Falloff (Beam Shape)
                    const distY = y - height / 2;
                    const beamFactor = Math.exp(-(distY * distY) / (2 * beamRadius * beamRadius));
                    // Apply Beam Profile
                    let r = rTotal * beamFactor;
                    let g = gTotal * beamFactor;
                    let b = bTotal * beamFactor;
                    // "Hot Spot" Bloom effect (Overexposure)
                    // Khi cường độ quá lớn, cảm biến/mắt bị bão hòa -> Trắng
                    const maxVal = Math.max(r, g, b);
                    if (maxVal > 220) {
                        const bloom = (maxVal - 220) * 0.8;
                        r += bloom;
                        g += bloom;
                        b += bloom;
                    }
                    // Laser Speckle Noise (Đốm ngẫu nhiên đặc trưng của laser)
                    // Noise tác động mạnh hơn ở vùng sáng
                    if (maxVal > 10) {
                        const speckle = (Math.random() - 0.5) * 30 * (maxVal / 255);
                        r += speckle;
                        g += speckle;
                        b += speckle;
                    }
                    data[idx] = Math.max(0, Math.min(255, r));
                    data[idx + 1] = Math.max(0, Math.min(255, g));
                    data[idx + 2] = Math.max(0, Math.min(255, b));
                    data[idx + 3] = 255;
                }
            }
            ctx.putImageData(imageData, 0, 0);
            // --- VẼ KÍ HIỆU VÂN TRUNG TÂM (k=0) ---
            ctx.save();
            // Kẻ đường đứt nét sáng rõ
            ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
            ctx.setLineDash([
                4,
                4
            ]);
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, height);
            ctx.stroke();
            ctx.textAlign = "center";
            const label = "Vân trung tâm (k=0)";
            ctx.font = "bold 13px monospace";
            const textWidth = ctx.measureText(label).width;
            // Hộp nhãn nổi bật
            const boxX = centerX - textWidth / 2 - 8;
            const boxY = 10;
            const boxW = textWidth + 16;
            const boxH = 26;
            ctx.fillStyle = "rgba(15, 23, 42, 0.9)"; // Slate-900 transparent
            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
            ctx.fillRect(boxX, boxY, boxW, boxH);
            ctx.strokeRect(boxX, boxY, boxW, boxH);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(label, centerX, boxY + 17);
            ctx.restore();
            // --- VẼ THƯỚC ĐO ---
            if (lightMode !== 'white') {
                const i1_meter = lightParams.wavelength1 * 1e-9 * D / a;
                const i1_pixel = i1_meter * pixelsPerMeter;
                ctx.textAlign = "center";
                const markerY = height / 2;
                if (i1_pixel > 15 && i1_pixel < width / 2) {
                    const firstBrightX = centerX + i1_pixel;
                    const color1 = wavelengthToRGB(lightParams.wavelength1).colorString;
                    ctx.strokeStyle = "rgba(255,255,255,0.9)";
                    ctx.fillStyle = "rgba(255,255,255,0.9)";
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(centerX, markerY);
                    ctx.lineTo(firstBrightX, markerY);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(centerX + 5, markerY - 4);
                    ctx.lineTo(centerX, markerY);
                    ctx.lineTo(centerX + 5, markerY + 4);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(firstBrightX - 5, markerY - 4);
                    ctx.lineTo(firstBrightX, markerY);
                    ctx.lineTo(firstBrightX - 5, markerY + 4);
                    ctx.fill();
                    ctx.font = "bold 14px monospace";
                    const text = `i₁ = ${(i1_meter * 1000).toFixed(2)}mm`;
                    const textWidth = ctx.measureText(text).width;
                    ctx.fillStyle = "rgba(0,0,0,0.8)";
                    ctx.fillRect(centerX + i1_pixel / 2 - textWidth / 2 - 4, markerY - 24, textWidth + 8, 20);
                    ctx.fillStyle = color1;
                    ctx.fillText(text, centerX + i1_pixel / 2, markerY - 10);
                }
            }
            ctx.textAlign = "left";
        }
    }["WaveInterference.useCallback[drawLight]"], [
        lightParams,
        lightMode
    ]);
    // --- ANIMATION LOOP ---
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WaveInterference.useCallback[animate]": ()=>{
            const ctx = canvasRef.current?.getContext("2d");
            if (!ctx) return;
            if (mode === 'mechanical') {
                timeRef.current += dt;
                setTime(timeRef.current);
                drawMechanical(ctx, timeRef.current);
                if (isPlaying) {
                    animationRef.current = requestAnimationFrame(animate);
                }
            } else {
                drawLight(ctx);
            }
        }
    }["WaveInterference.useCallback[animate]"], [
        isPlaying,
        drawMechanical,
        drawLight,
        mode,
        dt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveInterference.useEffect": ()=>{
            if (isPlaying && mode === 'mechanical') {
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
        animate,
        mode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveInterference.useEffect": ()=>{
            const ctx = canvasRef.current?.getContext("2d");
            if (!ctx) return;
            if (mode === 'mechanical') {
                drawMechanical(ctx, timeRef.current);
            } else {
                drawLight(ctx);
            }
        }
    }["WaveInterference.useEffect"], [
        mechParams,
        view3D,
        showNodalLines,
        lightParams,
        lightMode,
        mode,
        drawMechanical,
        drawLight
    ]);
    const handleReset = ()=>{
        if (mode !== 'mechanical') return;
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        canvasRef.current?.getContext("2d") && drawMechanical(canvasRef.current.getContext("2d"), 0);
    };
    const handleStep = (direction)=>{
        if (mode !== 'mechanical') return;
        setIsPlaying(false);
        timeRef.current = Math.max(0, timeRef.current + dt * direction * 5);
        setTime(timeRef.current);
        canvasRef.current?.getContext("2d") && drawMechanical(canvasRef.current.getContext("2d"), timeRef.current);
    };
    const calculateI = (wl)=>wl * 1e-9 * lightParams.screenDistance / (lightParams.slitDistance * 1e-3) * 1000;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-4 gap-4 font-sans items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-3 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 mb-2 p-1 bg-slate-800/50 rounded-xl w-fit backdrop-blur-sm border border-slate-700/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMode('mechanical');
                                    setIsPlaying(false);
                                },
                                className: `px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm ${mode === 'mechanical' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                        size: 18,
                                        className: mode === 'mechanical' ? 'animate-pulse' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this),
                                    " mặt nước"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMode('light');
                                    setIsPlaying(false);
                                },
                                className: `px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm ${mode === 'light' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25 scale-[1.02]' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        size: 18,
                                        className: mode === 'light' ? 'animate-spin-slow' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this),
                                    " Ánh Sáng"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b] rounded-xl border border-slate-700/50 shadow-xl overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 border-b border-slate-700/50 bg-slate-800/50 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-200 flex items-center gap-2",
                                        children: [
                                            mode === 'mechanical' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                                className: "w-4 h-4 text-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 516,
                                                columnNumber: 40
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rainbow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rainbow$3e$__["Rainbow"], {
                                                className: "w-4 h-4 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 516,
                                                columnNumber: 86
                                            }, this),
                                            mode === 'mechanical' ? 'Mô phỏng giao thoa mặt nước' : 'Mô phỏng giao thoa ánh sáng'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 520,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 521,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                                lineNumber: 522,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1 bg-[#0f172a] relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        width: 800,
                                        height: 340,
                                        className: "w-full rounded-b-lg block"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-2 right-4 text-[10px] text-slate-600 font-mono pointer-events-none group-hover:text-slate-500 transition-colors",
                                        children: "Hô Hoàng Anh A1K50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 528,
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
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    mode === 'mechanical' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e293b]/80 backdrop-blur rounded-xl p-3 border border-slate-700/50 flex items-center gap-4 animate-in fade-in slide-in-from-top-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(-1),
                                        className: "w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 542,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsPlaying(!isPlaying),
                                        className: `w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${isPlaying ? "bg-amber-500 hover:bg-amber-400 shadow-amber-900/20" : "bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30"} text-white`,
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                            size: 20,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 549,
                                            columnNumber: 30
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            size: 20,
                                            fill: "currentColor",
                                            className: "ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 549,
                                            columnNumber: 72
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 544,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleStep(1),
                                        className: "w-9 h-9 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 552,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/components/experiments/wave-interference.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/experiments/wave-interference.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/experiments/wave-interference.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: mode === 'mechanical' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 animate-in fade-in slide-in-from-right-4 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-cyan-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider border-b border-slate-700/50 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 566,
                                            columnNumber: 17
                                        }, this),
                                        " Thông số nguồn"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 565,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300",
                                                            children: "Tần số (f)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                mechParams.frequency.toFixed(1),
                                                                " Hz"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.5",
                                                    max: "2.0",
                                                    step: "0.1",
                                                    value: mechParams.frequency,
                                                    onChange: (e)=>setMechParams({
                                                            ...mechParams,
                                                            frequency: Number(e.target.value)
                                                        }),
                                                    className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300",
                                                            children: "Bước sóng (λ)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                mechParams.wavelength,
                                                                " px"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "20",
                                                    max: "80",
                                                    step: "5",
                                                    value: mechParams.wavelength,
                                                    onChange: (e)=>setMechParams({
                                                            ...mechParams,
                                                            wavelength: Number(e.target.value)
                                                        }),
                                                    className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 576,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300",
                                                            children: "Khoảng cách nguồn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                mechParams.sourceDistance,
                                                                " px"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "40",
                                                    max: "250",
                                                    step: "10",
                                                    value: mechParams.sourceDistance,
                                                    onChange: (e)=>setMechParams({
                                                            ...mechParams,
                                                            sourceDistance: Number(e.target.value)
                                                        }),
                                                    className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300",
                                                            children: "Biên độ nguồn"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: mechParams.amplitude.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.5",
                                                    max: "2.5",
                                                    step: "0.1",
                                                    value: mechParams.amplitude,
                                                    onChange: (e)=>setMechParams({
                                                            ...mechParams,
                                                            amplitude: Number(e.target.value)
                                                        }),
                                                    className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/wave-interference.tsx",
                            lineNumber: 564,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-cyan-400 font-bold mb-3 text-sm uppercase tracking-wider border-b border-slate-700/50 pb-2",
                                    children: "Hiển thị"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 601,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center justify-between cursor-pointer group hover:bg-slate-800/50 p-2 rounded transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300 text-xs flex items-center gap-2",
                                                    children: [
                                                        showNodalLines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-3 h-3 text-cyan-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 39
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            className: "w-3 h-3 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 83
                                                        }, this),
                                                        "Đường cực tiểu (Nodal)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setShowNodalLines(!showNodalLines),
                                                    className: `w-8 h-4 rounded-full transition-all cursor-pointer flex items-center px-0.5 border ${showNodalLines ? "bg-cyan-600 border-cyan-500" : "bg-slate-700 border-slate-600"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${showNodalLines ? "translate-x-4" : "translate-x-0"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center justify-between cursor-pointer group hover:bg-slate-800/50 p-2 rounded transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300 text-xs flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                            className: "w-3 h-3 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Chế độ 3D Surface"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setView3D(!view3D),
                                                    className: `w-8 h-4 rounded-full transition-all cursor-pointer flex items-center px-0.5 border ${view3D ? "bg-cyan-600 border-cyan-500" : "bg-slate-700 border-slate-600"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${view3D ? "translate-x-4" : "translate-x-0"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/wave-interference.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 602,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/wave-interference.tsx",
                            lineNumber: 600,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900 rounded-xl p-4 border border-slate-700 animate-in fade-in slide-in-from-right-4 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider border-b border-slate-700 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        " Điều Khiển"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 628,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/50 p-3 rounded-lg mb-4 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wide",
                                            children: "Chế độ"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 633,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-slate-700/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "lightMode",
                                                    checked: lightMode === 'mono',
                                                    onChange: ()=>setLightMode('mono'),
                                                    className: "accent-emerald-500 w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs ${lightMode === 'mono' ? 'text-white' : 'text-slate-400'}`,
                                                    children: [
                                                        "Đơn sắc (",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-serif italic",
                                                            children: "λ₁"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 114
                                                        }, this),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-slate-700/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "lightMode",
                                                    checked: lightMode === 'dual',
                                                    onChange: ()=>setLightMode('dual'),
                                                    className: "accent-emerald-500 w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs ${lightMode === 'dual' ? 'text-white' : 'text-slate-400'}`,
                                                    children: [
                                                        "Hai màu (",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-serif italic",
                                                            children: "λ₁, λ₂"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 114
                                                        }, this),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer p-1.5 rounded hover:bg-slate-700/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "lightMode",
                                                    checked: lightMode === 'white',
                                                    onChange: ()=>setLightMode('white'),
                                                    className: "accent-emerald-500 w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs ${lightMode === 'white' ? 'text-white' : 'text-slate-400'}`,
                                                    children: "Ánh sáng Trắng"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 632,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        (lightMode === 'mono' || lightMode === 'dual') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300",
                                                            children: "Bước sóng 1 (λ₁)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: wavelengthToRGB(lightParams.wavelength1).colorString
                                                            },
                                                            className: "font-mono font-bold text-xs bg-slate-800 px-1.5 rounded",
                                                            children: [
                                                                lightParams.wavelength1,
                                                                " nm"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "380",
                                                    max: "750",
                                                    step: "5",
                                                    value: lightParams.wavelength1,
                                                    onChange: (e)=>setLightParams({
                                                            ...lightParams,
                                                            wavelength1: Number(e.target.value)
                                                        }),
                                                    className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 650,
                                            columnNumber: 19
                                        }, this),
                                        lightMode === 'dual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-slate-300",
                                                            children: "Bước sóng 2 (λ₂)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: wavelengthToRGB(lightParams.wavelength2).colorString
                                                            },
                                                            className: "font-mono font-bold text-xs bg-slate-800 px-1.5 rounded",
                                                            children: [
                                                                lightParams.wavelength2,
                                                                " nm"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "380",
                                                    max: "750",
                                                    step: "5",
                                                    value: lightParams.wavelength2,
                                                    onChange: (e)=>setLightParams({
                                                            ...lightParams,
                                                            wavelength2: Number(e.target.value)
                                                        }),
                                                    className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 662,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 border-t border-slate-700/50 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-slate-300",
                                                                    children: "Khoảng cách a"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                                    lineNumber: 676,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400 font-mono text-xs",
                                                                    children: [
                                                                        lightParams.slitDistance.toFixed(2),
                                                                        " mm"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                                    lineNumber: 677,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 675,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "0.2",
                                                            max: "2.0",
                                                            step: "0.05",
                                                            value: lightParams.slitDistance,
                                                            onChange: (e)=>setLightParams({
                                                                    ...lightParams,
                                                                    slitDistance: Number(e.target.value)
                                                                }),
                                                            className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-slate-300",
                                                                    children: "Khoảng cách D"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-400 font-mono text-xs",
                                                                    children: [
                                                                        lightParams.screenDistance.toFixed(1),
                                                                        " m"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "1.0",
                                                            max: "4.0",
                                                            step: "0.1",
                                                            value: lightParams.screenDistance,
                                                            onChange: (e)=>setLightParams({
                                                                    ...lightParams,
                                                                    screenDistance: Number(e.target.value)
                                                                }),
                                                            className: "w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 648,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/wave-interference.tsx",
                            lineNumber: 627,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-emerald-600 rounded-xl p-3 border border-emerald-500 shadow-lg text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold mb-2 text-xs flex items-center gap-2 uppercase tracking-wide opacity-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__["Disc"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        " Kết Quả"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, this),
                                lightMode === 'white' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs space-y-1 opacity-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Dải màu cầu vồng."
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 700,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Vân trung tâm màu trắng."
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 701,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 699,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-end border-b border-emerald-500/50 pb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-emerald-100 opacity-80",
                                                    children: "i₁:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-lg font-bold leading-none",
                                                    children: [
                                                        calculateI(lightParams.wavelength1).toFixed(2),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-normal opacity-70",
                                                            children: "mm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 707,
                                                            columnNumber: 129
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 705,
                                            columnNumber: 19
                                        }, this),
                                        lightMode === 'dual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-end border-b border-emerald-500/50 pb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-emerald-100 opacity-80",
                                                    children: "i₂:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-lg font-bold leading-none",
                                                    children: [
                                                        calculateI(lightParams.wavelength2).toFixed(2),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-normal opacity-70",
                                                            children: "mm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 131
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/wave-interference.tsx",
                                            lineNumber: 710,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/wave-interference.tsx",
                                    lineNumber: 704,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/wave-interference.tsx",
                            lineNumber: 693,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/experiments/wave-interference.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/experiments/wave-interference.tsx",
        lineNumber: 493,
        columnNumber: 5
    }, this);
}
_s(WaveInterference, "2l4A0NctlBh0jLqEJ/IKzWQPmpo=");
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
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
;
var _s = __turbopack_context__.k.signature();
;
;
const StandingWaveSim = ()=>{
    _s();
    // --- State Configuration ---
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('fixed-fixed');
    // Physical parameters
    const [length, setLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.5); // Length (m)
    const [amplitude, setAmplitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5); // Amplitude (relative units)
    const [tension, setTension] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50); // Tension (N)
    const [linearDensity, setLinearDensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.01); // kg/m
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(40); // Frequency (Hz) - NEW INPUT
    // Simulation state
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Canvas Refs
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // --- Physics Calculations ---
    // v = sqrt(T / mu)
    const waveSpeed = Math.sqrt(tension / linearDensity);
    // lambda = v / f
    const wavelength = waveSpeed / frequency;
    // k_wave (angular wavenumber) = 2pi / lambda
    const kWave = 2 * Math.PI / wavelength;
    const omega = 2 * Math.PI * frequency;
    // Calculated Number of Antinodes (Real-time visual count) for the given Length
    // k_visible = 2L / lambda
    // If integer -> Resonance
    const currentK = 2 * length / wavelength;
    // Energy rough estimation
    const energy = 0.5 * linearDensity * length * Math.pow(omega * amplitude * 0.05, 2);
    // --- Animation Loop ---
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StandingWaveSim.useCallback[animate]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const width = canvas.width;
            const height = canvas.height;
            const centerY = height / 2;
            // Dark Theme Colors
            const colorBg = '#0f172a'; // slate-900
            const colorGrid = '#1e293b'; // slate-800
            const colorAxis = '#334155'; // slate-700
            const colorWave = '#22d3ee'; // cyan-400 (Neon)
            const colorNode = '#f472b6'; // pink-400
            const colorText = '#94a3b8'; // slate-400
            const padding = 60;
            const drawWidth = width - 2 * padding;
            const pxPerMeter = drawWidth / length;
            // Clear canvas
            ctx.fillStyle = colorBg;
            ctx.fillRect(0, 0, width, height);
            // 1. Draw Grid
            ctx.strokeStyle = colorGrid;
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let i = 0; i <= height; i += 40){
                ctx.moveTo(0, i);
                ctx.lineTo(width, i);
            }
            for(let i = 0; i <= width; i += 40){
                ctx.moveTo(i, 0);
                ctx.lineTo(i, height);
            }
            ctx.stroke();
            // 2. Draw Axes
            ctx.strokeStyle = colorAxis;
            ctx.setLineDash([
                5,
                5
            ]);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(padding, centerY);
            ctx.lineTo(width - padding, centerY);
            ctx.stroke();
            // Vertical Ref Lines
            ctx.setLineDash([]);
            ctx.strokeStyle = colorAxis;
            ctx.beginPath();
            ctx.moveTo(padding, 40);
            ctx.lineTo(padding, height - 40); // Sound Source
            ctx.moveTo(width - padding, 40);
            ctx.lineTo(width - padding, height - 40); // End Post
            ctx.stroke();
            // 3. Draw The Wave
            ctx.beginPath();
            ctx.moveTo(padding, centerY);
            let endPointY = centerY;
            // Simulate "Standing Wave" Pattern with Correct Boundary Conditions (Driven System)
            // We model the string driven at x=0 with amplitude A, and fixed/free at x=L.
            // Calculate Resonance Gain Factor (Denominator)
            // To avoid infinity, we add a small "damping" term imaginary or just clamp the denominator.
            // Simple approach: min(Limit, 1/sin(kL))
            let denominator = 0;
            if (mode === 'fixed-fixed') {
                // Condition: sin(kL)
                denominator = Math.sin(kWave * length);
            } else {
                // Condition: cos(kL) for Fixed-Free (Node at 0, Slope 0 at L... wait)
                // Driver at 0 is Displacment Source.
                // Fixed-Free means x=L is Free (Antinode of displacement, Node of Slope).
                // Form: y(x) ~ cos(k(L-x)) -> y'(L)=0 (Slope 0, Max Amp). 
                // y(0) = cos(kL).
                denominator = Math.cos(kWave * length);
            }
            // "Soft" resonance limit (Simulating Damping)
            const damping = 0.15; // Minimum value of denominator
            // If denominator is close to 0, wave blows up.
            // Effective Gain = 1 / sqrt(den^2 + damp^2)
            const gain = 1 / Math.sqrt(denominator * denominator + damping * damping);
            // Phase shift? At resonance, phase flips. 
            // cos(wt) term is fine. We just multiply by (1/den). 
            // If den < 0, it flips phase naturally.
            const maxVisualScale = 150;
            for(let px = 0; px <= drawWidth; px++){
                const xPhysical = px / pxPerMeter;
                let shape = 0;
                if (mode === 'fixed-fixed') {
                    // Wave function satisfying y(L)=0
                    // y(x) = sin(k(L-x))
                    // Amplitude scaled to match y(0) = A_source
                    shape = Math.sin(kWave * (length - xPhysical));
                } else {
                    // Wave function satisfying y'(L)=0 (Free End)
                    // y(x) = cos(k(L-x))
                    shape = Math.cos(kWave * (length - xPhysical));
                }
                // Resulting Wave
                const envelope = amplitude * gain * shape;
                const yPhysical = envelope * Math.cos(omega * time);
                // Actually, just scale by fixed constant, let it grow.
                // But limit screen space.
                const yDrawFinal = centerY - yPhysical * 60; // 60 is view scale
                ctx.lineTo(padding + px, yDrawFinal);
                if (px === drawWidth) endPointY = yDrawFinal;
            }
            // Helper to draw fixed end correctly visually
            // With sin(k(L-x)), at x_phys = length, sin(0) = 0. So yDraw = centerY.
            // So B is Fixed. Correct.
            // Neon Style Wave
            ctx.strokeStyle = colorWave;
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowBlur = 15;
            ctx.shadowColor = colorWave;
            ctx.stroke();
            ctx.shadowBlur = 0;
            // 4. Draw Nodes/Ends
            // Point A (Source)
            ctx.fillStyle = colorNode;
            ctx.beginPath();
            ctx.arc(padding, centerY, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = colorText;
            ctx.font = '600 14px "Courier New", monospace';
            ctx.fillText('A (Nguồn)', padding - 30, centerY - 20);
            // Point B (End)
            // If Fixed: Clamp. If Free: Ring.
            // We draw the clamp at the PHYSICAL location L. 
            // If the wave node doesn't match, it visually "passes through" or looks disconnected?
            // Let's draw the clamp rigidly.
            if (mode === 'fixed-fixed') {
                ctx.fillStyle = colorNode;
                ctx.beginPath();
                ctx.arc(width - padding, centerY, 6, 0, Math.PI * 2); // Clamp is always at 0 displacement
                ctx.fill();
                ctx.fillStyle = colorText;
                ctx.fillText('B (Cố định)', width - padding - 40, centerY - 20);
                // Visual feedback: If EndPointY is far from CenterY -> "Vibration at Clamp" (Bad)
                if (Math.abs(endPointY - centerY) > 5) {
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(width - padding, centerY);
                    ctx.lineTo(width - padding, endPointY);
                    ctx.stroke();
                }
            } else {
                // Fixed-Free: B is a ring on a pole
                ctx.strokeStyle = colorNode;
                ctx.lineWidth = 3;
                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.arc(width - padding, endPointY, 6, 0, Math.PI * 2); // Ring moves with wave
                ctx.fill();
                ctx.stroke();
                // Pole
                ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(width - padding, centerY - 100);
                ctx.lineTo(width - padding, centerY + 100);
                ctx.stroke();
                ctx.fillStyle = colorText;
                ctx.fillText('B (Tự do)', width - padding - 40, endPointY - 30);
            }
            // Draw Time
            ctx.fillStyle = '#fff';
            ctx.font = '16px "Courier New", monospace';
            ctx.fillText(`t = ${time.toFixed(3)}s`, 20, 30);
            // Update time
            const timeStep = 0.005;
            if (isPlaying) {
                setTime({
                    "StandingWaveSim.useCallback[animate]": (prev)=>prev + timeStep
                }["StandingWaveSim.useCallback[animate]"]);
            }
            animationRef.current = requestAnimationFrame(animate);
        }
    }["StandingWaveSim.useCallback[animate]"], [
        length,
        amplitude,
        kWave,
        omega,
        time,
        isPlaying,
        mode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StandingWaveSim.useEffect": ()=>{
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "StandingWaveSim.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["StandingWaveSim.useEffect"];
        }
    }["StandingWaveSim.useEffect"], [
        animate
    ]);
    const handleReset = ()=>{
        setTime(0);
        setIsPlaying(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-cyan-500/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-8 flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 right-4 z-10 flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `px-3 py-1 rounded-full text-xs font-bold border ${mode === 'fixed-fixed' ? 'border-cyan-500/50 text-cyan-400 bg-cyan-950/30' : 'border-slate-700 text-slate-400 bg-slate-900/50'}`,
                                            children: "2 ĐẦU CỐ ĐỊNH"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `px-3 py-1 rounded-full text-xs font-bold border ${mode === 'fixed-free' ? 'border-pink-500/50 text-pink-400 bg-pink-950/30' : 'border-slate-700 text-slate-400 bg-slate-900/50'}`,
                                            children: "1 ĐẦU TỰ DO"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                    ref: canvasRef,
                                    width: 900,
                                    height: 500,
                                    className: "w-full h-auto bg-[#0f172a]"
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/standing-waves.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f172a] rounded-2xl border border-slate-800 p-4 flex items-center justify-between shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleReset,
                                            className: "w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors",
                                            title: "Reset",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 w-[1px] bg-slate-700 mx-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsPlaying(!isPlaying),
                                            className: `w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all active:scale-95 ${isPlaying ? 'bg-cyan-500/20 text-cyan-400 ring-2 ring-cyan-500/50' : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'}`,
                                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                size: 28,
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 300,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                size: 28,
                                                fill: "currentColor",
                                                className: "ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 300,
                                                columnNumber: 72
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex gap-8 text-right font-mono text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            title: "Số bó sóng thực tế (k)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-500 text-xs uppercase mb-1",
                                                    children: "Harmonics (k)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `font-bold text-lg ${Math.abs(currentK - Math.round(currentK)) < 0.1 ? 'text-green-400' : 'text-slate-400'}`,
                                                    children: currentK.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-500 text-xs uppercase mb-1",
                                                    children: "Wavelength"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-pink-400 font-bold text-lg",
                                                    children: [
                                                        wavelength.toFixed(2),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-500",
                                                            children: "m"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 90
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/standing-waves.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-cyan-400 font-bold mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Công thức Sóng Dừng"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 font-mono leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between border-b border-slate-800 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Vận tốc (v):"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400",
                                                            children: [
                                                                "√(T/μ) = ",
                                                                waveSpeed.toFixed(1),
                                                                " m/s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between border-b border-slate-800 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Bước sóng (λ):"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400",
                                                            children: [
                                                                "v/f = ",
                                                                wavelength.toFixed(2),
                                                                " m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between border-b border-slate-800 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Số bó sóng (k):"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400",
                                                            children: [
                                                                "2L/λ = ",
                                                                currentK.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900/50 p-4 rounded-lg border border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-xs mb-2 uppercase tracking-wider",
                                                    children: [
                                                        "Điều kiện biên (",
                                                        mode === 'fixed-fixed' ? '2 Đầu Cố Định' : '1 Đầu Tự Do',
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg text-pink-300",
                                                    children: mode === 'fixed-fixed' ? 'L = k(λ/2)' : 'L = (2k-1)(λ/4)'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `mt-2 text-xs italic ${Math.abs(currentK - Math.round(currentK)) < 0.1 ? 'text-green-400' : 'text-slate-500'}`,
                                                    children: Math.abs(currentK - Math.round(currentK)) < 0.1 ? '✓ Đang cộng hưởng!' : '• Chưa cộng hưởng'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/standing-waves.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/standing-waves.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-4 flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold mb-6 text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            size: 20,
                                            className: "text-cyan-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Thông số dao động"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 p-1 bg-slate-900 rounded-lg flex border border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMode('fixed-fixed'),
                                            className: `flex-1 py-2 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${mode === 'fixed-fixed' ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`,
                                            children: "2 Đầu Cố Định"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMode('fixed-free'),
                                            className: `flex-1 py-2 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${mode === 'fixed-free' ? 'bg-pink-500 text-slate-900 shadow-lg shadow-pink-500/20' : 'text-slate-500 hover:text-slate-300'}`,
                                            children: "1 Đầu Tự Do"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 group-hover:text-cyan-400 transition-colors",
                                                            children: "Tần số (Hz)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                frequency,
                                                                " Hz"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "10",
                                                    max: "100",
                                                    step: "1",
                                                    value: frequency,
                                                    onChange: (e)=>setFrequency(parseInt(e.target.value)),
                                                    className: "w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 group-hover:text-cyan-400 transition-colors",
                                                            children: "Chiều dài dây (L)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                length.toFixed(1),
                                                                " m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.5",
                                                    max: "5.0",
                                                    step: "0.1",
                                                    value: length,
                                                    onChange: (e)=>setLength(Number(e.target.value)),
                                                    className: "w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 group-hover:text-cyan-400 transition-colors",
                                                            children: "Lực căng (T)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                tension,
                                                                " N"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "10",
                                                    max: "200",
                                                    step: "1",
                                                    value: tension,
                                                    onChange: (e)=>setTension(Number(e.target.value)),
                                                    className: "w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 group-hover:text-cyan-400 transition-colors",
                                                            children: "Biên độ nguồn (A)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                (amplitude * 2).toFixed(1),
                                                                " cm"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.1",
                                                    max: "1.0",
                                                    step: "0.1",
                                                    value: amplitude,
                                                    onChange: (e)=>setAmplitude(Number(e.target.value)),
                                                    className: "w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 group-hover:text-cyan-400 transition-colors",
                                                            children: "Mật độ dây (μ)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-400 font-mono",
                                                            children: [
                                                                linearDensity.toFixed(3),
                                                                " kg/m"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.001",
                                                    max: "0.05",
                                                    step: "0.001",
                                                    value: linearDensity,
                                                    onChange: (e)=>setLinearDensity(Number(e.target.value)),
                                                    className: "w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 385,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/standing-waves.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-yellow-400 font-bold mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Năng lượng sóng"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs text-slate-400 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Tốc độ truyền sóng (v)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-400 font-mono",
                                                            children: [
                                                                waveSpeed.toFixed(1),
                                                                " m/s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-full bg-slate-800 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-emerald-500 rounded-full transition-all duration-300",
                                                        style: {
                                                            width: `${Math.min(waveSpeed / 200 * 100, 100)}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs text-slate-400 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Ước lượng năng lượng (E)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-400 font-mono",
                                                            children: [
                                                                energy.toFixed(3),
                                                                " J"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-full bg-slate-800 rounded-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full bg-yellow-500 rounded-full transition-all duration-300",
                                                        style: {
                                                            width: `${Math.min(energy * 50, 100)}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/standing-waves.tsx",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 pt-4 border-t border-slate-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2 text-xs text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                size: 12,
                                                className: "mt-0.5 text-cyan-400 fill-cyan-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 496,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Điều chỉnh Tần số, Chiều dài, hoặc Lực căng để tìm điểm cộng hưởng (k nguyên)."
                                            }, void 0, false, {
                                                fileName: "[project]/components/experiments/standing-waves.tsx",
                                                lineNumber: 497,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experiments/standing-waves.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/standing-waves.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/standing-waves.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/standing-waves.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/experiments/standing-waves.tsx",
            lineNumber: 261,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/experiments/standing-waves.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StandingWaveSim, "PeYuc/nQ2r6SCylQOCethUqCyZ8=");
_c = StandingWaveSim;
const __TURBOPACK__default__export__ = StandingWaveSim;
var _c;
__turbopack_context__.k.register(_c, "StandingWaveSim");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experiments/sound-speed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
;
var _s = __turbopack_context__.k.signature();
;
;
const SoundSpeedExperiment = ()=>{
    _s();
    // --- State ---
    // Length of air column L (m)
    // We control the Water Level. Tube Length is fixed (say 1.2m).
    // waterLevel is distance from bottom. L = TubeHeight - waterLevel.
    // Actually simpler: Input is "Air Column Length L" directly (simulating moving reservoir).
    const [airLength, setAirLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5); // meters
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(440); // Hz
    const [temperature, setTemperature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20); // Celsius (affects V)
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5); // Simulation Volume
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // --- Physics ---
    // v = 331.5 + 0.6 * T
    const speedOfSound = 331.5 + 0.6 * temperature;
    const wavelength = speedOfSound / frequency;
    // Resonance condition for Closed Tube (water closed one end):
    // Resonance starts at L = lambda/4, 3lambda/4, 5lambda/4 ...
    // L_resonance = (2k + 1) * lambda / 4
    // Calculate resonance "intensity" (0 to 1) based on how close L is to resonance
    // A simple Lorentzian or Gaussian peak around resonance points.
    const calculateResonanceIntensity = (L, lambda)=>{
        // Find closest resonance mode
        // L = n * lambda/4 where n is odd integer
        const n_float = 4 * L / lambda;
        // We want n close to 1, 3, 5, 7...
        // Distance to closest odd integer:
        const n_round = Math.round(n_float);
        const isOdd = n_round % 2 !== 0;
        // If rounded is even, we are far from odd resonance? Be careful.
        // e.g. 2.0 -> Resonances at 1.0, 3.0.  2.0 is anti-resonance.
        // Distance to closest ODD integer:
        // math trick: distance(x, odd) = abs( (x-1)/2 - round((x-1)/2) ) * 2 ?? No.
        // Simpler: find closest k for (2k+1). 
        // Target = (2k+1). Closest match.
        // Scan typical modes (1, 3, 5, 7, 9)
        let minDiff = 1000;
        for(let k = 0; k < 10; k++){
            const targetN = 2 * k + 1;
            const diff = Math.abs(n_float - targetN);
            if (diff < minDiff) minDiff = diff;
        }
        // Width of resonance peak (Q factor simulation)
        const width = 0.15; // Tuning sharpness
        // Resonance shape: 1 / (1 + (diff/width)^2)
        return 1 / (1 + (minDiff / width) ** 2);
    };
    const resonanceIntensity = calculateResonanceIntensity(airLength, wavelength);
    // --- Audio Engine ---
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oscillatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainNodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize Audio Context on first play interact (or effect, but suspended)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundSpeedExperiment.useEffect": ()=>{
            if (!audioContextRef.current) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                audioContextRef.current = new AudioContextClass();
                // Master Gain
                const gainNode = audioContextRef.current.createGain();
                gainNode.connect(audioContextRef.current.destination);
                gainNodeRef.current = gainNode;
            }
            return ({
                "SoundSpeedExperiment.useEffect": ()=>{
                    if (audioContextRef.current) {
                        audioContextRef.current.close();
                        audioContextRef.current = null;
                    }
                }
            })["SoundSpeedExperiment.useEffect"];
        }
    }["SoundSpeedExperiment.useEffect"], []);
    // Handle Oscillator & Playback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundSpeedExperiment.useEffect": ()=>{
            const ctx = audioContextRef.current;
            if (!ctx) return;
            if (isPlaying && !isMuted) {
                // Resume if suspended (browser policy)
                if (ctx.state === 'suspended') ctx.resume();
                // Create Osc if needed
                if (!oscillatorRef.current) {
                    const osc = ctx.createOscillator();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
                    osc.connect(gainNodeRef.current);
                    osc.start();
                    oscillatorRef.current = osc;
                } else {
                    // Update freq smoothly
                    oscillatorRef.current.frequency.setTargetAtTime(frequency, ctx.currentTime, 0.1);
                }
            } else {
                // Stop
                if (oscillatorRef.current) {
                    oscillatorRef.current.stop();
                    oscillatorRef.current.disconnect();
                    oscillatorRef.current = null;
                }
            }
        }
    }["SoundSpeedExperiment.useEffect"], [
        isPlaying,
        isMuted,
        frequency
    ]);
    // Handle Volume / Resonance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundSpeedExperiment.useEffect": ()=>{
            const ctx = audioContextRef.current;
            const gainNode = gainNodeRef.current;
            if (ctx && gainNode) {
                if (!isPlaying || isMuted) {
                    gainNode.gain.setTargetAtTime(0, ctx.currentTime, 0.1);
                } else {
                    // Base volume (0.01) + Resonance Boost (up to 0.3)
                    // When resonant -> Loud. When not -> Quiet hum.
                    const targetGain = 0.01 + resonanceIntensity * 0.4;
                    gainNode.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.1);
                }
            }
        }
    }["SoundSpeedExperiment.useEffect"], [
        resonanceIntensity,
        isPlaying,
        isMuted
    ]);
    // --- Animation ---
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SoundSpeedExperiment.useCallback[animate]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            // Time update
            if (isPlaying) {
                timeRef.current += 0.01; // dt
            }
            const t = timeRef.current;
            // --- Draw ---
            ctx.clearRect(0, 0, width, height);
            // Background
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
            // 1. Draw Tube system
            const tubeWidth = 60;
            const tubeHeight = 400; // pixels
            const tubeBottomY = height - 50;
            const tubeTopY = tubeBottomY - tubeHeight;
            const tubeX = centerX;
            // Scale: 1.2m = tubeHeight (400px) => 1m = 333px
            const pxPerM = tubeHeight / 1.2;
            const airHeightPx = airLength * pxPerM;
            const waterLevelY = tubeTopY + airHeightPx;
            // Draw Water (Blue)
            ctx.fillStyle = "rgba(6, 182, 212, 0.6)"; // Cyan-500
            ctx.fillRect(tubeX - tubeWidth / 2, waterLevelY, tubeWidth, tubeBottomY - waterLevelY);
            // Draw Glass Tube Walls
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(tubeX - tubeWidth / 2, tubeTopY - 20); // Top flare
            ctx.lineTo(tubeX - tubeWidth / 2, tubeBottomY);
            ctx.lineTo(tubeX + tubeWidth / 2, tubeBottomY);
            ctx.lineTo(tubeX + tubeWidth / 2, tubeTopY - 20);
            ctx.stroke();
            // 2. Tuning Fork (Above Tube)
            const forkY = tubeTopY - 40;
            const forkAmp = isPlaying ? 3 : 0;
            const vib = Math.sin(t * frequency * 0.5) * forkAmp; // Fake visual freq
            // Stem
            ctx.strokeStyle = "#94a3b8"; // Slate-400
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(centerX, forkY);
            ctx.lineTo(centerX, forkY - 40);
            ctx.stroke();
            // Prongs (Vibrating)
            ctx.lineWidth = 4;
            ctx.beginPath();
            // Left Prong
            ctx.moveTo(centerX, forkY);
            ctx.quadraticCurveTo(centerX - 15 + vib, forkY + 30, centerX - 15 + vib, forkY + 60);
            // Right Prong
            ctx.moveTo(centerX, forkY);
            ctx.quadraticCurveTo(centerX + 15 - vib, forkY + 30, centerX + 15 - vib, forkY + 60);
            ctx.stroke();
            // 3. Sound Waves (Visualizing Resonance)
            // Standing Wave inside air column
            // Node at water (Closed end), Antinode at open top (approx).
            if (isPlaying) {
                ctx.strokeStyle = `rgba(244, 114, 182, ${0.3 + resonanceIntensity * 0.7})`; // Pink, brighter if resonant
                ctx.lineWidth = 2;
                ctx.beginPath();
                // Draw sine wave envelope vertical
                // y from tubeTopY to waterLevelY (0 to L)
                // Amplitude = Envelope
                const steps = 50;
                for(let i = 0; i <= steps; i++){
                    const yRel = i / steps * airHeightPx; // 0 (top) to H (bottom)
                    const yDraw = tubeTopY + yRel;
                    // Physics: Closed End at Bottom (Node), Open at Top (Antinode)
                    // WAIT! Standing wave shape:
                    // Bottom (Water): Displacement Node -> Amp = 0.
                    // Top (Open): Displacement Antinode -> Amp = Max.
                    // Function: sin(k * distance_from_bottom)
                    // distance_from_bottom = airHeightPx - yRel
                    const xPhys = airLength - yRel / pxPerM; // x=0 at bottom
                    // k * xPhys
                    // k = 2pi / lambda
                    const k = 2 * Math.PI / wavelength;
                    // Standing wave term: sin(kx) * cos(wt)
                    // Scale amplitude by resonanceIntensity!
                    const standingAmp = 15 * resonanceIntensity * Math.sin(k * xPhys);
                    // Visualize instantaneous
                    const displace = standingAmp * Math.cos(t * frequency * 0.2); // Slow visual freq
                    if (i === 0) ctx.moveTo(centerX + displace, yDraw);
                    else ctx.lineTo(centerX + displace, yDraw);
                }
                ctx.stroke();
                // Emit Sound Waves OUTSIDE (Arcs)
                // Intensity depends on Resonance
                if (resonanceIntensity > 0.1) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${resonanceIntensity - t % 1})`;
                    ctx.lineWidth = 2;
                    const rBase = t * 50 % 100;
                    for(let r = rBase; r < 200; r += 40){
                        const alpha = Math.max(0, 1 - r / 200) * resonanceIntensity;
                        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                        ctx.beginPath();
                        ctx.arc(centerX, forkY, r, Math.PI, 0); // Top semi-circles
                        ctx.stroke();
                    }
                }
            }
            // 4. Ruler / Measurement
            ctx.fillStyle = "#64748b";
            ctx.font = "12px monospace";
            ctx.textAlign = "right";
            for(let m = 0; m <= 1.2; m += 0.1){
                const yMark = tubeTopY + m * pxPerM;
                if (yMark > tubeBottomY) break;
                ctx.fillRect(tubeX - tubeWidth / 2 - 10, yMark, 8, 1);
                ctx.fillText(`${m.toFixed(1)}m`, tubeX - tubeWidth / 2 - 14, yMark + 4);
            }
            // Current Level Indicator
            ctx.strokeStyle = "#ef4444"; // Red
            ctx.setLineDash([
                4,
                4
            ]);
            ctx.beginPath();
            ctx.moveTo(tubeX - tubeWidth - 20, waterLevelY);
            ctx.lineTo(tubeX + tubeWidth + 20, waterLevelY);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = "#ef4444";
            ctx.fillText(`L = ${airLength.toFixed(3)}m`, tubeX - tubeWidth - 25, waterLevelY + 4);
            animationRef.current = requestAnimationFrame(animate);
        }
    }["SoundSpeedExperiment.useCallback[animate]"], [
        airLength,
        frequency,
        isPlaying,
        resonanceIntensity,
        wavelength
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SoundSpeedExperiment.useEffect": ()=>{
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "SoundSpeedExperiment.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                }
            })["SoundSpeedExperiment.useEffect"];
        }
    }["SoundSpeedExperiment.useEffect"], [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[#020617] font-sans text-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 bg-[#0f172a] rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 600,
                            height: 600,
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/components/experiments/sound-speed.tsx",
                            lineNumber: 304,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-4 bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2 text-pink-400 font-bold text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 309,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Cường độ âm (dB)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 308,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-32 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end border border-slate-700 mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 transition-all duration-100",
                                        style: {
                                            height: `${resonanceIntensity * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/experiments/sound-speed.tsx",
                                        lineNumber: 312,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 311,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-speed.tsx",
                            lineNumber: 307,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/sound-speed.tsx",
                    lineNumber: 303,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1e293b] rounded-2xl p-6 border border-slate-700 shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 324,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Thiết lập thí nghiệm"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 323,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400 text-sm",
                                                    children: "Tần số âm thoa (f)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMuted(!isMuted),
                                                    className: `p-2 rounded-full transition-colors flex items-center gap-2 text-xs font-bold ${!isMuted ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-slate-800 text-slate-400 border border-slate-700'}`,
                                                    children: [
                                                        !isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            size: 16,
                                                            className: "opacity-50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 73
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        !isMuted ? "ON" : "OFF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 329,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-400 font-mono",
                                                children: [
                                                    frequency,
                                                    " Hz"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experiments/sound-speed.tsx",
                                                lineNumber: 340,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 339,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "200",
                                            max: "1000",
                                            step: "10",
                                            value: frequency,
                                            onChange: (e)=>setFrequency(Number(e.target.value)),
                                            className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 342,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 328,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Chiều dài cột khí (L)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-400 font-mono",
                                                    children: [
                                                        (airLength * 100).toFixed(1),
                                                        " cm"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 352,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0.1",
                                            max: "1.0",
                                            step: "0.001",
                                            value: airLength,
                                            onChange: (e)=>setAirLength(Number(e.target.value)),
                                            className: "w-full accent-cyan-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 356,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-500 mt-1 flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-cyan-600 hover:text-cyan-400",
                                                    onClick: ()=>setAirLength(Math.max(0.1, airLength - 0.005)),
                                                    children: "- Fine"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-cyan-600 hover:text-cyan-400",
                                                    onClick: ()=>setAirLength(Math.min(1.0, airLength + 0.005)),
                                                    children: "+ Fine"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 362,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 351,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900/50 p-4 rounded-lg border border-slate-800 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Tốc độ âm (lý thuyết):"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-400 font-mono",
                                                    children: [
                                                        speedOfSound.toFixed(1),
                                                        " m/s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 370,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-400",
                                                    children: "Bước sóng (λ):"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-pink-400 font-mono",
                                                    children: [
                                                        wavelength.toFixed(3),
                                                        " m"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 374,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm font-bold pt-2 border-t border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "Cộng hưởng?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: resonanceIntensity > 0.8 ? "text-green-400 animate-pulse" : "text-slate-600",
                                                    children: resonanceIntensity > 0.8 ? "MAX (Nghe to nhất)" : "---"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-speed.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1e293b] rounded-2xl p-6 border border-slate-700 shadow-lg flex-grow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 390,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Hướng dẫn"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 389,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-slate-300 space-y-2 list-disc pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Điều chỉnh độ cao cột khí (mực nước) bằng thanh trượt L."
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 393,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Lắng nghe hoặc quan sát thanh đo cường độ âm."
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Khi cột khí có độ dài thích hợp ($L = (2k+1)\\lambda/4$), hiện tượng ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "cộng hưởng"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 101
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " xảy ra, âm thanh sẽ nghe to nhất."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 395,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Sử dụng các giá trị L cộng hưởng liên tiếp để tính bước sóng và tốc độ âm."
                                        }, void 0, false, {
                                            fileName: "[project]/components/experiments/sound-speed.tsx",
                                            lineNumber: 396,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/experiments/sound-speed.tsx",
                                    lineNumber: 392,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/experiments/sound-speed.tsx",
                            lineNumber: 388,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experiments/sound-speed.tsx",
                    lineNumber: 321,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/experiments/sound-speed.tsx",
            lineNumber: 300,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/experiments/sound-speed.tsx",
        lineNumber: 299,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SoundSpeedExperiment, "p+wflJURTPctNsBpiCUQboTWgdg=");
_c = SoundSpeedExperiment;
const __TURBOPACK__default__export__ = SoundSpeedExperiment;
var _c;
__turbopack_context__.k.register(_c, "SoundSpeedExperiment");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/aperture.js [app-client] (ecmascript) <export default as Aperture>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Infinity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/infinity.js [app-client] (ecmascript) <export default as Infinity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
// Import UI Library
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sci-fi-lab.tsx [app-client] (ecmascript)");
// Imports Experiments
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$physics$2d$intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/physics-intro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$spring$2d$oscillator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/spring-oscillator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$simple$2d$pendulum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/simple-pendulum.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$damped$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/damped-oscillation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$harmonic$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/harmonic-oscillation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$mechanical$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/mechanical-waves.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$sound$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/sound-waves.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$wave$2d$interference$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/wave-interference.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$standing$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/standing-waves.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$sound$2d$speed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/experiments/sound-speed.tsx [app-client] (ecmascript)");
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
;
;
;
// Tách mục Intro ra riêng để xử lý hiển thị đặc biệt
const INTRO_ITEM = {
    id: "intro",
    label: "Giới thiệu chung",
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
};
// Danh sách các bài thí nghiệm (Không bao gồm Intro)
const EXPERIMENTS = [
    {
        id: "harmonic-oscillation",
        label: "Dao động điều hòa",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        id: "spring-oscillator",
        label: "Con lắc lò xo",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
    },
    {
        id: "simple-pendulum",
        label: "Con lắc đơn",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"]
    },
    {
        id: "damped-oscillation",
        label: "Dao động tắt dần",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"]
    },
    {
        id: "mechanical-waves",
        label: "Sóng cơ",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"]
    },
    {
        id: "sound-waves",
        label: "Sóng âm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"]
    },
    {
        id: "wave-interference",
        label: "Giao thoa sóng",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$aperture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Aperture$3e$__["Aperture"]
    },
    {
        id: "sound-speed",
        label: "Đo tốc độ truyền âm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"]
    },
    {
        id: "standing-waves",
        label: "Sóng dừng",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Infinity$3e$__["Infinity"]
    }
];
function PhysicsLab() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customModules, setCustomModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const mainContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhysicsLab.useEffect": ()=>{
            // Scroll handling
            if (mainContentRef.current) {
                mainContentRef.current.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
            }
        }
    }["PhysicsLab.useEffect"], [
        activeTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhysicsLab.useEffect": ()=>{
            // Fetch user modules
            fetch('/api/modules').then({
                "PhysicsLab.useEffect": (res)=>res.json()
            }["PhysicsLab.useEffect"]).then({
                "PhysicsLab.useEffect": (data)=>setCustomModules(data)
            }["PhysicsLab.useEffect"]).catch({
                "PhysicsLab.useEffect": (err)=>console.error("Failed to load modules", err)
            }["PhysicsLab.useEffect"]);
        }
    }["PhysicsLab.useEffect"], []);
    const handleDeleteModule = async (e, id)=>{
        e.stopPropagation();
        if (!confirm("Bạn có chắc muốn xóa module này không?")) return;
        try {
            const res = await fetch('/api/modules', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            });
            if (res.ok) {
                setCustomModules((prev)=>prev.filter((m)=>m.id !== id));
                if (activeTab === id) setActiveTab('intro');
            } else {
                alert("Xóa thất bại");
            }
        } catch (err) {
            console.error("Failed to delete", err);
            alert("Có lỗi xảy ra");
        }
    };
    const currentItem = activeTab === 'intro' ? INTRO_ITEM : EXPERIMENTS.find((e)=>e.id === activeTab) || customModules.find((m)=>m.id === activeTab);
    const ActiveIcon = currentItem?.icon || (currentItem?.type === 'iframe' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]);
    const renderContent = ()=>{
        // Check built-in experiments
        switch(activeTab){
            case "intro":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$physics$2d$intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSelectExperiment: setActiveTab
                }, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 107,
                    columnNumber: 28
                }, this);
            case "spring-oscillator":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$spring$2d$oscillator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 108,
                    columnNumber: 40
                }, this);
            case "simple-pendulum":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$simple$2d$pendulum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 109,
                    columnNumber: 38
                }, this);
            case "damped-oscillation":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$damped$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 110,
                    columnNumber: 41
                }, this);
            case "harmonic-oscillation":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$harmonic$2d$oscillation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 111,
                    columnNumber: 43
                }, this);
            case "mechanical-waves":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$mechanical$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 112,
                    columnNumber: 39
                }, this);
            case "sound-waves":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$sound$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 113,
                    columnNumber: 34
                }, this);
            case "wave-interference":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$wave$2d$interference$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 114,
                    columnNumber: 40
                }, this);
            case "standing-waves":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$standing$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 115,
                    columnNumber: 37
                }, this);
            case "sound-speed":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$sound$2d$speed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 116,
                    columnNumber: 34
                }, this);
        }
        // Check custom modules
        const custom = customModules.find((m)=>m.id === activeTab);
        if (custom) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: custom.path,
                    className: "w-full h-full border-0",
                    title: custom.label,
                    sandbox: "allow-scripts allow-same-origin"
                }, void 0, false, {
                    fileName: "[project]/components/physics-lab.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/physics-lab.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$experiments$2f$physics$2d$intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onSelectExperiment: setActiveTab
        }, void 0, false, {
            fileName: "[project]/components/physics-lab.tsx",
            lineNumber: 134,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabLayout"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between mb-6 pb-4 border-b border-slate-800/60 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sci$2d$fi$2d$lab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeonButton"], {
                                onClick: ()=>setIsSidebarOpen(!isSidebarOpen),
                                className: "!px-3 !py-2",
                                children: isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 146,
                                    columnNumber: 30
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 146,
                                    columnNumber: 48
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-bold font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase",
                                        children: [
                                            "PHYSICS.LAB ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs align-top opacity-50 text-slate-400",
                                                children: "v2.1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/physics-lab.tsx",
                                                lineNumber: 151,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-[10px] text-slate-500 font-ans font-bold uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/physics-lab.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            "System Online"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-cyan-400 font-sans font-bold flex items-center justify-end gap-2",
                                    children: [
                                        currentItem?.label || "Unknown",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveIcon, {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/physics-lab.tsx",
                                            lineNumber: 163,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1px] h-8 bg-slate-800"
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-500 uppercase font-bold",
                                        children: "Chủ dự án"
                                    }, void 0, false, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-300 font-sans font-bold text-cyan-500",
                                        children: "Hồ Hoàng Anh"
                                    }, void 0, false, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/physics-lab.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden gap-6 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `
            fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#02040a]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-r border-slate-800/50 md:border-none
            transform transition-transform duration-300 ease-out flex flex-col gap-2 p-4 md:p-0
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}
          `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden flex justify-end mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsSidebarOpen(false),
                                    className: "text-slate-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 186,
                                        columnNumber: 88
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setActiveTab(INTRO_ITEM.id);
                                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                                    },
                                    className: `
                  w-full text-left px-4 py-3 rounded border font-sans text-xs font-bold uppercase tracking-wide flex items-center gap-3 transition-all
                  ${activeTab === INTRO_ITEM.id ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-900 hover:text-slate-300'}
                `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(INTRO_ITEM.icon, {
                                            size: 16,
                                            className: activeTab === INTRO_ITEM.id ? "animate-pulse" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/physics-lab.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        INTRO_ITEM.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/physics-lab.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold text-slate-600 uppercase tracking-widest mb-2 px-2",
                                children: "Danh mục thí nghiệm"
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 overflow-y-auto scrollbar-hide mb-4",
                                children: EXPERIMENTS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveTab(item.id);
                                            if (window.innerWidth < 768) setIsSidebarOpen(false);
                                        },
                                        className: `
                  w-full text-left px-4 py-3 rounded border font-sans text-xs font-bold uppercase tracking-wide flex items-center gap-3 transition-all
                  ${activeTab === item.id ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-900 hover:text-slate-300'}
                `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 16,
                                                className: activeTab === item.id ? "animate-pulse" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/components/physics-lab.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            item.label
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto pt-4 border-t border-slate-800/50 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-slate-900/40 border border-slate-800/60 text-center backdrop-blur-sm group hover:border-cyan-500/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-400 font-medium mb-1 font-sans",
                                                children: [
                                                    "Dev & Designer by : ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-200 font-bold",
                                                        children: "Hồ Hoàng Anh"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/physics-lab.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/physics-lab.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-cyan-400 font-sans font-bold mt-0.5",
                                                children: "Class: A1 - K50"
                                            }, void 0, false, {
                                                fileName: "[project]/components/physics-lab.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-slate-600 text-center font-medium pb-2",
                                        children: [
                                            "2025 © ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-500 hover:text-cyan-500 cursor-pointer transition-colors",
                                                children: "Metronic Physics Theme"
                                            }, void 0, false, {
                                                fileName: "[project]/components/physics-lab.tsx",
                                                lineNumber: 246,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/physics-lab.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        ref: mainContentRef,
                        className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent pr-2 pb-10",
                        children: [
                            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 bg-black/50 z-40 md:hidden",
                                onClick: ()=>setIsSidebarOpen(false)
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 256,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-in fade-in slide-in-from-bottom-4 duration-500 h-full",
                                children: renderContent()
                            }, void 0, false, {
                                fileName: "[project]/components/physics-lab.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/physics-lab.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/physics-lab.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/physics-lab.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(PhysicsLab, "Q8BbiiOqup0xp4MfWTKgyw4K6fE=");
_c = PhysicsLab;
var _c;
__turbopack_context__.k.register(_c, "PhysicsLab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3c5668be._.js.map