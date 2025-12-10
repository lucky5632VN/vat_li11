import React, { useState, useRef, useCallback, useMemo } from "react"

export interface PendulumParams {
    length: number      // cm
    gravity: number     // m/s²
    initialAngle: number // degrees
    mass: number         // kg
}

export interface PendulumState {
    t: number
    theta: number // radians (angle from vertical)
    x: number     // cm (horizontal displacement approx)
    v: number     // cm/s (tangential velocity)
    a: number     // cm/s² (tangential acceleration)
    wd: number    // Joules (Kinetic)
    wt: number    // Joules (Potential)
    wTotal: number // Joules (Total)
}

export const useSimplePendulumPhysics = (initialParams: PendulumParams) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [params, setParams] = useState(initialParams)
    const [time, setTime] = useState(0)

    const timeRef = useRef(0)
    const historyRef = useRef<PendulumState[]>([])

    // Derived Constants
    const lengthM = params.length / 100
    const omega = Math.sqrt(params.gravity / lengthM)
    const period = (2 * Math.PI) / omega
    const frequency = 1 / period

    // Note: initialAngle here acts as the Amplitude (ThetaMax)
    // In SHM approximation: theta = thetaMax * cos(omega * t + phi)
    // We assume release from max angle at t=0, so phi=0.
    const thetaMax = (params.initialAngle * Math.PI) / 180

    const calculateState = useCallback(
        (t: number): PendulumState => {
            // SHM Approximation for small angles, but commonly used in HS physics for "Simple Pendulum" structure
            const theta = thetaMax * Math.cos(omega * t)
            const x = params.length * Math.sin(theta)

            // Energy & Velocity (Conservation approach for consistency)
            const h_current = lengthM * (1 - Math.cos(theta))
            const h_max = lengthM * (1 - Math.cos(thetaMax))

            // v = sqrt(2g(h_max - h_current))
            // Direction based on SHM derivative: -sin(omega*t)
            // If thetaMax > 0 (Right), v starts negative (Left).
            // If thetaMax < 0 (Left), v starts positive (Right).
            const v_mag = Math.sqrt(2 * params.gravity * Math.max(0, h_max - h_current))
            let sign = -Math.sin(omega * t) >= 0 ? 1 : -1
            if (thetaMax < 0) sign *= -1

            const v = sign * v_mag * 100 // cm/s

            // Acceleration (Tangential) = -g * sin(theta)
            // or approx -omega^2 * s
            const a = -params.gravity * Math.sin(theta) * 100 // cm/s²

            // Energies
            const wt = params.mass * params.gravity * h_current
            const wTotal = params.mass * params.gravity * h_max
            const wd = Math.max(0, wTotal - wt)

            return { t, theta, x, v, a, wt, wd, wTotal }
        },
        [thetaMax, omega, params.length, params.gravity, params.mass, lengthM]
    )

    const step = useCallback((dt: number) => {
        timeRef.current += dt
        if (timeRef.current < 0) timeRef.current = 0
        const state = calculateState(timeRef.current)

        // Sync minimal state
        setTime(timeRef.current)

        return state
    }, [calculateState])

    const reset = useCallback(() => {
        setIsPlaying(false)
        timeRef.current = 0
        setTime(0)
        historyRef.current = []
    }, [])

    return useMemo(() => ({
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
    }), [params, isPlaying, time, calculateState, step, reset, omega, period, frequency, lengthM])
}
