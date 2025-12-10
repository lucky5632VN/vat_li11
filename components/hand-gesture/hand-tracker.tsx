"use client"

import React, { useEffect, useRef, useState } from "react"
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision"
import { Loader2, Camera, CameraOff } from "lucide-react"

export interface HandData {
    landmarks: any[] // Normalized landmarks
    worldLandmarks: any[]
    handedness: any[]
    gesture: "IDLE" | "PINCH" | "OPEN"
    cursor: { x: number, y: number } // Normalized 0-1
}

interface HandTrackerProps {
    onHandUpdate: (data: HandData | null) => void
    showCamera?: boolean
}

export default function HandTracker({ onHandUpdate, showCamera = true }: HandTrackerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [cameraError, setCameraError] = useState<string | null>(null)
    const handLandmarkerRef = useRef<HandLandmarker | null>(null)
    const requestRef = useRef<number>()

    useEffect(() => {
        let mounted = true

        const init = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
                )

                if (!mounted) return

                const handLandmarker = await HandLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                })

                if (!mounted) return
                handLandmarkerRef.current = handLandmarker
                setIsLoaded(true)
                startCamera()
            } catch (err: any) {
                console.error(err)
                setCameraError("Failed to load AI model: " + err.message)
            }
        }

        init()

        return () => {
            mounted = false
            if (handLandmarkerRef.current) {
                handLandmarkerRef.current.close()
            }
        }
    }, [])

    const startCamera = async () => {
        if (!videoRef.current) return
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: 640,
                    height: 480
                }
            })
            if (videoRef.current) {
                videoRef.current.srcObject = stream
                videoRef.current.addEventListener("loadeddata", predictWebcam)
            }
        } catch (err: any) {
            setCameraError("Camera access denied or unavailable.")
        }
    }

    const predictWebcam = () => {
        if (!handLandmarkerRef.current || !videoRef.current) return

        const nowInMs = Date.now()
        const result = handLandmarkerRef.current.detectForVideo(videoRef.current, nowInMs)

        if (result.landmarks && result.landmarks.length > 0) {
            const landmarks = result.landmarks[0]
            // Detect Pinch
            // Thumb tip: 4, Index tip: 8
            const thumb = landmarks[4]
            const index = landmarks[8]
            const dist = Math.sqrt(
                Math.pow(thumb.x - index.x, 2) +
                Math.pow(thumb.y - index.y, 2)
            )

            const isPinch = dist < 0.05

            // Cursor is midpoint of pinch or index tip
            const cursorX = isPinch ? (thumb.x + index.x) / 2 : index.x
            const cursorY = isPinch ? (thumb.y + index.y) / 2 : index.y

            // Mirror X because webcam is mirrored
            const mirroredCursorX = 1 - cursorX

            onHandUpdate({
                landmarks,
                worldLandmarks: result.worldLandmarks[0],
                handedness: result.handedness[0],
                gesture: isPinch ? "PINCH" : "OPEN",
                cursor: { x: mirroredCursorX, y: cursorY }
            })
        } else {
            onHandUpdate(null)
        }

        requestRef.current = requestAnimationFrame(predictWebcam)
    }

    useEffect(() => {
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [])

    return (
        <div className="relative rounded-xl overflow-hidden bg-black border border-slate-800 w-[320px] shadow-lg">
            <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                {isLoaded ? <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> : <Loader2 className="animate-spin text-cyan-500" size={16} />}
                <span className="text-[10px] text-white font-mono uppercase tracking-widest">
                    {isLoaded ? "Tracking Active" : "Initializing AI..."}
                </span>
            </div>

            {cameraError && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 p-4 text-center">
                    <p className="text-white text-xs">{cameraError}</p>
                </div>
            )}

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-auto transform -scale-x-100 ${!showCamera ? 'opacity-0' : ''}`} // Mirror output
            />

            {!showCamera && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                    <CameraOff className="text-slate-600" />
                    <p className="text-xs text-slate-500 mt-2">Camera hidden</p>
                </div>
            )}
        </div>
    )
}
