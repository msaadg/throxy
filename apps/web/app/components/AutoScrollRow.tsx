"use client"

import { motion } from "framer-motion"
import { ReactNode, useMemo } from "react"

interface AutoScrollRowProps<T> {
  items: T[]
  render: (item: T, idx: number) => ReactNode
  speed?: number // seconds per full cycle
  direction?: "left" | "right"
  className?: string
  repetitions?: number // how many times to duplicate to ensure seamless loop
}

// Generic infinitely scrolling row; duplicates children to create a loop.
export function AutoScrollRow<T>({
  items,
  render,
  speed = 30,
  direction = "left",
  className = "",
  repetitions = 2
}: AutoScrollRowProps<T>) {
  const sequence = useMemo(() => Array.from({ length: repetitions }, () => items).flat(), [items, repetitions])
  const distance = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]

  return (
    <motion.div
      className={"flex gap-6 " + className}
      animate={{ x: distance }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {[...sequence, ...sequence].map((item, i) => (
        <div key={i} className="flex-shrink-0">
          {render(item, i)}
        </div>
      ))}
    </motion.div>
  )
}
