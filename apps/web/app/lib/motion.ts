// Shared motion utilities & variants
// Centralizing animation primitives ensures consistency and simpler future tuning.

import { type Variants } from "framer-motion"

export const EASING: readonly [number, number, number, number] = [0.22, 0.65, 0.36, 1]

export const VIEWPORT = { once: true, amount: 0.5 } as const

export const fadeInUp = (delay = 0, distance = 28): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING, delay }
  }
})

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASING, delay } }
})

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASING, delay } }
})

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren }
  }
})

// Simple hover spring config for interactive elements.
export const hoverSpring = { type: "spring", stiffness: 240, damping: 18 }

// Helper list of common transitions
export const transitions = {
  springSoft: { type: "spring", stiffness: 140, damping: 18 },
  springSnappy: { type: "spring", stiffness: 300, damping: 24 },
  glide: { duration: 0.6, ease: EASING }
} as const

// Utility to create a subtle parallax translation variant
export const parallaxY = (distance = 40): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASING } }
})

// Glow pulse animation keyframes (for badges / highlights)
export const glowPulse = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: [0.85, 1, 0.85],
    scale: [0.98, 1.02, 0.98],
    transition: { duration: 6, repeat: Infinity }
  }
}

// Subtle float loop for icons
export const floatLoop = (distance = 8, duration = 5): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -distance, 0, distance * 0.4, 0],
    transition: { duration, repeat: Infinity, ease: "easeInOut" }
  }
})

// Shimmer gradient animation style helper
export const shimmerStyle = {
  backgroundImage:
    "linear-gradient(110deg, oklch(0.66 0.25 280 / 0.15) 0%, oklch(0.80 0.28 280 / 0.4) 40%, oklch(0.66 0.25 280 / 0.15) 80%)",
  backgroundSize: "200% 100%",
  WebkitBackgroundClip: "text" as const,
  color: "transparent"
}
