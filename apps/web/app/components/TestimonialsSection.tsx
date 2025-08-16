"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AutoScrollRow } from "./AutoScrollRow";
import { fadeInUp, fadeIn, staggerContainer } from "../lib/motion";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote:
        "The manufacturing industry is one of the toughest markets to crack — it's complex, relationship-driven, and full of noise. That's why we partnered with Throxy. They're more than just a tool; they act as a true outbound partner. Together, we're not sending spam — we're starting real conversations, so our sales team can focus on what they do best: closing deals.",
      author: "Niklas Gerlach",
      title: "CEO",
      avatar: "👨‍💻",
      company: "Imnoo",
      metric: "5",
      metricLabel: "meetings booked per week",
      category: "Manufacturing Software"
    },
    {
      quote:
        "Throxy's personalised outbound put the right message in front of every educator at the perfect moment. We unlocked more qualified opportunities and gained precious time to focus on what matters the most, our customers.",
      author: "Francisco Ortiz",
      title: "Business Development",
      avatar: "👨‍💼",
      company: "Santillana",
      metric: "84%",
      metricLabel: "positive reply rate",
      category: "Education Solutions"
    },
    {
      quote:
        "Throxy runs all the outreach so I can stay heads-down on coding. After just eight highly targeted calls we're about to sign our first deal—already covering the entire campaign cost. As we keep tightening the ICP and offer, I'm confident the pipeline will only grow",
      author: "Nour Islam Mokhtari",
      title: "Founder",
      avatar: "👨‍",
      company: "Pycad",
      metric: "15",
      metricLabel: "hours back per week",
      category: "Medical Solutions"
    },
  ];

  // Split testimonials into two rows for the scrolling effect
  const topRowTestimonials = testimonials.slice(0, 2);
  const bottomRowTestimonials = testimonials.slice(2, 3);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">      
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [-50, 50, -50],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">        
        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.p
            variants={fadeIn(0)}
            className="text-primary text-sm font-medium mb-5 tracking-wide uppercase"
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeInUp(0.1)}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
          >
            Trusted by teams selling into
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              manufacturing, education & medical.
            </span>
          </motion.h2>
        </motion.div>
        
        <div className="space-y-10">
          <AutoScrollRow
            items={topRowTestimonials}
            speed={28}
            direction="left"
            repetitions={3}
            render={(t) => (
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow: "0 10px 30px -10px oklch(0.66 0.25 280 / 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="h-full w-96 bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl font-bold text-foreground">{t.metric}</span>
                      <div className="text-xs text-muted-foreground">
                        {t.metricLabel}
                      </div>
                    </div>
                    <p className="text-xs text-primary font-medium mb-2">
                      {t.category}
                    </p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center">
                    <span className="text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{t.author}</h4>
                    <p className="text-xs text-muted-foreground">{t.title} • {t.company}</p>
                  </div>
                </div>
              </motion.div>
            )}
          />
          <AutoScrollRow
            items={bottomRowTestimonials}
            speed={36}
            direction="right"
            repetitions={3}
            render={(t) => (
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow: "0 10px 30px -10px oklch(0.66 0.25 280 / 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="h-full w-96 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-card/50 border border-primary/20 rounded-full flex items-center justify-center text-2xl bg-red-500">
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl font-bold text-foreground">{t.metric}</span>
                      <div className="text-xs text-muted-foreground">
                        {t.metricLabel}
                      </div>
                    </div>
                    <p className="text-xs text-primary font-medium mb-2">
                      {t.category}
                    </p>
                  </div>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center">
                    <span className="text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{t.author}</h4>
                    <p className="text-xs text-muted-foreground">{t.title} • {t.company}</p>
                  </div>
                </div>
              </motion.div>
            )}
          />
        </div>

        <motion.div
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <motion.div
            className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-3xl p-14 relative overflow-hidden group"
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          >
            <motion.div
              className="absolute inset-0 opacity-60 -z-10"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, oklch(0.66 0.25 280 / 0.15), transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.80 0.28 280 / 0.1), transparent 60%)",
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative z-10">
              <motion.blockquote
                variants={fadeIn(0.3)}
                className="text-2xl md:text-3xl font-medium text-foreground mb-10 leading-relaxed"
              >
                "if I were building GitHub for the software of today with LLMs,
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}
                  throxy is what it would look like
                </span>
                "
              </motion.blockquote>
              <motion.div
                variants={fadeInUp(0.4)}
                className="flex items-center justify-center gap-5"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-3xl shadow-glow">
                  👨‍💻
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg text-foreground">
                    Tom Preston-Werner
                  </h4>
                  <p className="text-muted-foreground">
                    Co-Founder, CEO • GitHub // Early investor in throxy
                  </p>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-5 h-5 text-foreground mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      GitHub
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;