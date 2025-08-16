"use client"
import { motion } from "framer-motion"
import { glowPulse } from "../lib/motion"

const YCombinatorBanner = () => {
  return (
    <div className="mt-28 flex justify-center relative">
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        variants={glowPulse}
        initial="initial"
        animate="animate"
      >
        <div className="w-60 h-16 rounded-full blur-3xl bg-primary/20" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22,0.65,0.36,1] }}
          className="rounded-full px-7 py-2.5 backdrop-blur-xl bg-background/50 border border-primary/30 shadow-[0_0_0_1px_oklch(0.66_0.25_280_/_0.2),0_4px_24px_-4px_oklch(0.66_0.25_280_/_0.35)] overflow-hidden"
        >
          <motion.span
            className="text-sm font-medium tracking-wide relative z-10"
            animate={{
              backgroundPosition: ["0% 50%","100% 50%","0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, oklch(0.98 0 0), oklch(0.80 0.28 280), oklch(0.98 0 0))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Backed by Y‑Combinator
          </motion.span>
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-full border border-primary/0"
          whileHover={{ borderColor: "oklch(0.80 0.28 280 / 0.6)", scale: 1.1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        />
      </motion.div>
    </div>
  )
}

export default YCombinatorBanner