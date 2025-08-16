"use client";
import { Button } from "@repo/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";

const TechPartnerSection = () => {
  const features = [
    "Custom lead targeting",
    "Custom infrastructure", 
    "Fully managed service"
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-3xl border border-primary/20 p-12 text-center overflow-hidden relative">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 15, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.h2
            variants={fadeInUp(0)}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tighter"
          >
            The outbound partner built for hard-to-crack markets.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powered by our own tech.
            </span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp(0.1)}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Throxy is the only outbound partner combining proprietary outreach tech 
            with fully managed execution. We're your unfair advantage in markets where 
            outbound is hard, ignored, or broken.
          </motion.p>

          <motion.div
            variants={fadeInUp(0.2)}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3"
              >
                <span className="text-primary font-medium text-sm">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeInUp(0.3)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Button variant="hero" size="lg">
              Book Strategy Call
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechPartnerSection;
