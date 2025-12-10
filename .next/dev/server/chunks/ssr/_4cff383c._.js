module.exports = [
"[project]/hooks/use-spring-physics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpringPhysics",
    ()=>useSpringPhysics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useSpringPhysics = (initialParams)=>{
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialParams);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mutable refs for high-frequency updates without re-renders
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const historyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Derived constants
    const omega = Math.sqrt(params.k / params.mass);
    const period = 2 * Math.PI / omega;
    const frequency = omega / (2 * Math.PI);
    const vmax = omega * params.amplitude;
    const amax = omega * omega * params.amplitude;
    const deltaL0 = params.mass * 9.8 / params.k // Static extension (m)
    ;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
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
    }, [
        params,
        omega
    ]);
    const step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((dt)=>{
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
    }, [
        calculateState
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        historyRef.current = [];
    }, []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
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
        }), [
        params,
        isPlaying,
        time,
        calculateState,
        step,
        reset,
        omega,
        period,
        frequency,
        vmax,
        amax,
        deltaL0
    ]);
};
}),
"[project]/hooks/use-canvas-scale.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasScale",
    ()=>useCanvasScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useCanvasScale = (containerRef)=>{
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [pixelRatio, setPixelRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if we are in a browser environment
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const updateSize = undefined;
        const resizeObserver = undefined;
    }, [
        containerRef
    ]);
    return {
        width: size.width,
        height: size.height,
        pixelRatio
    };
};
}),
"[project]/hooks/use-simple-pendulum-physics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSimplePendulumPhysics",
    ()=>useSimplePendulumPhysics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useSimplePendulumPhysics = (initialParams)=>{
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialParams);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const historyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Derived Constants
    const lengthM = params.length / 100;
    const omega = Math.sqrt(params.gravity / lengthM);
    const period = 2 * Math.PI / omega;
    const frequency = 1 / period;
    // Note: initialAngle here acts as the Amplitude (ThetaMax)
    // In SHM approximation: theta = thetaMax * cos(omega * t + phi)
    // We assume release from max angle at t=0, so phi=0.
    const thetaMax = params.initialAngle * Math.PI / 180;
    const calculateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
        // SHM Approximation for small angles, but commonly used in HS physics for "Simple Pendulum" structure
        const theta = thetaMax * Math.cos(omega * t);
        const x = params.length * Math.sin(theta);
        // Energy & Velocity (Conservation approach for consistency)
        const h_current = lengthM * (1 - Math.cos(theta));
        const h_max = lengthM * (1 - Math.cos(thetaMax));
        // v = sqrt(2g(h_max - h_current))
        // Direction based on SHM derivative: -sin(omega*t)
        // If thetaMax > 0 (Right), v starts negative (Left).
        // If thetaMax < 0 (Left), v starts positive (Right).
        const v_mag = Math.sqrt(2 * params.gravity * Math.max(0, h_max - h_current));
        let sign = -Math.sin(omega * t) >= 0 ? 1 : -1;
        if (thetaMax < 0) sign *= -1;
        const v = sign * v_mag * 100 // cm/s
        ;
        // Acceleration (Tangential) = -g * sin(theta)
        // or approx -omega^2 * s
        const a = -params.gravity * Math.sin(theta) * 100 // cm/s²
        ;
        // Energies
        const wt = params.mass * params.gravity * h_current;
        const wTotal = params.mass * params.gravity * h_max;
        const wd = Math.max(0, wTotal - wt);
        return {
            t,
            theta,
            x,
            v,
            a,
            wt,
            wd,
            wTotal
        };
    }, [
        thetaMax,
        omega,
        params.length,
        params.gravity,
        params.mass,
        lengthM
    ]);
    const step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((dt)=>{
        timeRef.current += dt;
        if (timeRef.current < 0) timeRef.current = 0;
        const state = calculateState(timeRef.current);
        // Sync minimal state
        setTime(timeRef.current);
        return state;
    }, [
        calculateState
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsPlaying(false);
        timeRef.current = 0;
        setTime(0);
        historyRef.current = [];
    }, []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            params,
            setParams,
            isPlaying,
            setIsPlaying,
            time,
            timeRef,
            calculateState,
            step,
            reset,
            derived: {
                omega,
                period,
                frequency,
                lengthM
            }
        }), [
        params,
        isPlaying,
        time,
        calculateState,
        step,
        reset,
        omega,
        period,
        frequency,
        lengthM
    ]);
};
}),
"[project]/lib/canvas-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_4cff383c._.js.map