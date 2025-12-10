
export const drawSpring = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    coils = 12,
    width = 20,
    strokeStyle = "#cbd5e1",
    lineWidth = 2
) => {
    const dx = endX - startX
    const dy = endY - startY
    const len = Math.sqrt(dx * dx + dy * dy)
    const angle = Math.atan2(dy, dx)

    ctx.save()
    ctx.translate(startX, startY)
    ctx.rotate(angle)

    ctx.strokeStyle = strokeStyle
    ctx.lineWidth = lineWidth
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(10, 0)

    const step = (len - 20) / coils
    for (let i = 0; i < coils; i++) {
        const x = 10 + i * step
        ctx.lineTo(x + step * 0.25, width)
        ctx.lineTo(x + step * 0.75, -width)
    }

    ctx.lineTo(len - 10, 0)
    ctx.lineTo(len, 0)

    ctx.stroke()
    ctx.restore()
}

export const drawArrow = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    len: number,
    color: string,
    label: string = "",
    direction: "horizontal" | "vertical" = "horizontal"
) => {
    if (Math.abs(len) < 2) return // Don't draw tiny arrows

    ctx.save()
    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.lineWidth = 2

    // Calculate end points based on direction
    const endX = x + (direction === "horizontal" ? len : 0)
    const endY = y + (direction === "vertical" ? len : 0)

    // Determine angle for the arrow head
    let angle = 0
    if (direction === "horizontal") {
        angle = len > 0 ? 0 : Math.PI;
    } else {
        angle = len > 0 ? Math.PI / 2 : -Math.PI / 2;
    }

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(endX, endY)
    ctx.stroke()

    // Draw arrow head
    const headLen = 6
    ctx.save()
    ctx.translate(endX, endY)
    ctx.rotate(angle)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(-headLen, -headLen / 2)
    ctx.lineTo(-headLen, headLen / 2)
    ctx.lineTo(0, 0)
    ctx.fill()
    ctx.restore()

    // Draw label
    if (label) {
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        let labelX = endX
        let labelY = endY

        if (direction === "horizontal") {
            labelX += len > 0 ? 15 : -15
        } else {
            labelY += len > 0 ? 15 : -15
        }

        ctx.fillStyle = color
        ctx.fillText(label, labelX, labelY)
    }

    ctx.restore()
}

export const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, step = 40, color = "#1e293b") => {
    ctx.save()
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let i = 0; i < width; i += step) {
        ctx.moveTo(i, 0)
        ctx.lineTo(i, height)
    }
    for (let i = 0; i < height; i += step) {
        ctx.moveTo(0, i)
        ctx.lineTo(width, i)
    }
    ctx.stroke()
    ctx.restore()
}

export const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    const { width, height } = ctx.canvas;
    ctx.clearRect(0, 0, width, height);
}
