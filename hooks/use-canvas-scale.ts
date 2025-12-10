
import { useEffect, useState, RefObject } from "react"

export const useCanvasScale = (containerRef: RefObject<HTMLDivElement | null>) => {
    const [size, setSize] = useState({ width: 0, height: 0 })
    const [pixelRatio, setPixelRatio] = useState(1)

    useEffect(() => {
        // Check if we are in a browser environment
        if (typeof window === "undefined" || !containerRef.current) return

        const updateSize = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current
                setSize({ width: clientWidth, height: clientHeight })
                setPixelRatio(window.devicePixelRatio || 1)
            }
        }

        // Initial size
        updateSize()

        const resizeObserver = new ResizeObserver(() => {
            updateSize()
        })

        resizeObserver.observe(containerRef.current)

        return () => {
            resizeObserver.disconnect()
        }
    }, [containerRef])

    return { width: size.width, height: size.height, pixelRatio }
}
