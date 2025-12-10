import React, { useState, useRef, useCallback } from "react"

export interface SpringParams {
    mass: number // kg
    k: number // N/m spring constant
    amplitude: number // cm (converted effectively to initial displacement)
    phase: number // radians
}

export interface PhysicsState {
    t: number
    x: number // cm
    v: number // cm/s
    a: number // cm/s^2
    force: number // N
    wd: number // Joules
    wt: number // Joules
    wTotal: number // Joules
}

export const useSpringPhysics = (initialParams: SpringParams) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [params, setParams] = useState(initialParams)
    const [time, setTime] = useState(0)

    // Mutable refs for high-frequency updates without re-renders
    const timeRef = useRef(0)
    const historyRef = useRef<PhysicsState[]>([])

    // Derived constants
    const omega = Math.sqrt(params.k / params.mass)
    const period = (2 * Math.PI) / omega
    const frequency = omega / (2 * Math.PI)
    const vmax = omega * params.amplitude
    const amax = omega * omega * params.amplitude
    const deltaL0 = (params.mass * 9.8) / params.k // Static extension (m)

    const calculateState = useCallback(
        (t: number): PhysicsState => {
            // x = A cos(wt + phi)
            const x = params.amplitude * Math.cos(omega * t + params.phase)
            const v = -params.amplitude * omega * Math.sin(omega * t + params.phase)
            const a = -params.amplitude * omega * omega * Math.cos(omega * t + params.phase)

            // Force F = -kx (Hooke's law relative to equilibrium)
            // Note: x is in cm, so we divide by 100 for Force calc (N)
            const force = -params.k * (x / 100)

            // Energy
            const x_m = x / 100
            const v_m = v / 100
            const wt = 0.5 * params.k * x_m * x_m
            const wd = 0.5 * params.mass * v_m * v_m
            const wTotal = wt + wd

            return { t, x, v, a, force, wt, wd, wTotal }
        },
        [params, omega]
    )

    const step = useCallback((dt: number) => {
        timeRef.current += dt
        // Prevent negative time
        if (timeRef.current < 0) timeRef.current = 0

        const state = calculateState(timeRef.current)

        // Update history
        historyRef.current.push(state)
        if (historyRef.current.length > 500) historyRef.current.shift()

        // Sync React state for low-frequency UI updates if needed
        // (For high-perf canvas, we usually read refs directly, but we setTime to trigger animation effects if needed)
        setTime(timeRef.current)

        return state
    }, [calculateState])

    const reset = useCallback(() => {
        setIsPlaying(false)
        timeRef.current = 0
        setTime(0)
        historyRef.current = []
    }, [])

    return React.useMemo(() => ({
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
    }), [params, isPlaying, time, calculateState, step, reset, omega, period, frequency, vmax, amax, deltaL0])
}
