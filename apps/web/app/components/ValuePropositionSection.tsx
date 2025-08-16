"use client";
import { Button } from "@repo/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, floatLoop } from "../lib/motion";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "We built our own outbound tech",
    body: "Our custom-built outbound system generates curated databases, runs niche-specific outreach, and improves every week.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "We manage it for you",
    body: "Our fully managed service handles your entire pipeline. From strategy to messaging, infrastructure to booking.",
  },
];

const ValuePropositionSection = () => {
  return (
    <section className="container mx-auto px-6 py-28">
      <motion.div
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-5xl mx-auto text-center space-y-14"
      >
        <div>
          <motion.h2
            variants={fadeInUp(0)}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tighter"
          >
            For Hard-to-crack{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              traditional Industries
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp(0.1)}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            The outbound partner with custom-built tech & managed execution
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp(0.1 * i)}
              whileHover={{ y: -8, rotate: -0.5, scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
              className="relative group text-left rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-sm p-10 overflow-hidden cursor-pointer"
            >
              <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <motion.div
                variants={floatLoop(10, 6)}
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-7 shadow-glow"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeInUp(0.2)} className="pt-4">
          <motion.div
            whileHover={{ scale: 1.07, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Button variant="hero" size="default">
              Book Strategy Call
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ValuePropositionSection;