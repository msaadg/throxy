"use client";

import { motion, type Variants } from "framer-motion";

const logos = [
  "Santillana",
  "Nalanda",
  "Imnoo",
];

const grid: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TrustedBySection = () => {
  return (
    <section className="container mx-auto px-6 py-14">
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-muted-foreground text-lg tracking-wider"
        >
          Trusted by top sales teams
        </motion.p>
      </div>
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto"
      >
        {logos.map((company) => (
          <motion.div
            key={company}
            variants={item}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0 10px 30px -10px oklch(0.66 0.25 280 / 0.4)",
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 15 }}
              className="bg-card/70 backdrop-blur-sm border border-primary/20 rounded-xl px-8 py-4 text-center hover:border-primary/40 cursor-pointer min-w-[140px]"
            >
              <span className="text-muted-foreground font-medium tracking-wide text-lg whitespace-nowrap">
                {company}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustedBySection;