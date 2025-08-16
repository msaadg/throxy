"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";

const PainPointsSection = () => {
  const painPoints = [
    "SDRs are slow to ramp and need handholding.",
    "Tools require tinkering, testing, & fixing issues.",
    "Agencies promise results, but deliver poor leads.",
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <motion.div
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp(0)}
          className="text-4xl md:text-5xl font-bold text-foreground mb-14 tracking-tighter"
        >
          Most tools overwhelm.{" "}
          <span className="text-muted-foreground">
            Most agencies disappoint.
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeInUp(0.08 * i)}
              whileHover={{
                y: -8,
                rotate: 0.5,
                borderColor: "oklch(0.66 0.25 280 / 0.6)",
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative group rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-7 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <motion.div
                className="w-12 h-12 bg-destructive/15 rounded-xl flex items-center justify-center mb-5 mx-auto ring-1 ring-destructive/30"
                whileHover={{
                  rotate: [0, -15, 15, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-6 h-6 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.div>
              <p className="relative z-10 text-muted-foreground leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PainPointsSection;