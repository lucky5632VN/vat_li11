"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative p-2.5 rounded-full border border-sky-200 dark:border-cyan-800/50 bg-white dark:bg-[#0a0f1c] hover:bg-sky-50 dark:hover:bg-cyan-950/30 hover:border-sky-400 dark:hover:border-cyan-500 text-sky-500 dark:text-cyan-400 shadow-sm hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 group"
            title="Toggle Theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 group-hover:text-amber-500" />
            <Moon className="absolute top-2.5 left-2.5 h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:group-hover:text-cyan-300" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
