"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";

const WorkflowSection = () => {
  const workflowSteps = [
    {
      week: "Week 1",
      title: "Onboarding & Strategy",
      description:
        "We gather insights about your ICP, messaging, and goals.",
      details: [
        "Scraping: Website, LinkedIn, Glassdoor",
        "Searching for Trigger: New Partnerships",
      ],
    },
    {
      week: "Week 2",
      title: "Campaign Buildout",
      description:
        "We research, scrape, and enrich your lead list. Then we build and QA your first messaging campaign.",
      details: [
        "A/b Test 1: Context-aware personalization",
        "Lead enrichment and validation",
      ],
    },
    {
      week: "Week 3",
      title: "Launch & Manage",
      description:
        "Outreach begins. You get replies, we qualify and pass only the good ones.",
      details: [
        "Email deliverability monitoring",
        "Response qualification system",
      ],
    },
    {
      week: "Ongoing",
      title: "Optimize & Scale",
      description:
        "Weekly updates, live feedback, and booked meetings, all managed for you.",
      details: ["Performance analytics", "Campaign optimization"],
    },
  ];

  return (
    <section id="process" className="container mx-auto px-6 py-28 scroll-mt-40">
      <motion.div
        variants={staggerContainer(0.16, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp(0)} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tighter">
            Your outbound strategy, execution, and optimization,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              completely done for you
            </span>
          </h2>
        </motion.div>
        
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden lg:block z-0"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />

          <motion.div
            className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 hidden lg:block overflow-hidden z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full w-16 bg-gradient-to-r from-transparent via-primary/80 to-transparent"
              animate={{
                x: ["-100%", "calc(100% + 100px)"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 hidden lg:block overflow-hidden z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="h-full w-12 bg-gradient-to-r from-transparent via-primary-glow/60 to-transparent"
              animate={{
                x: ["-100%", "calc(100% + 100px)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>

          {workflowSteps.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-glow hidden lg:block z-10"
              style={{
                left: `${12.5 + index * 25}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.3 }}
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 oklch(0.66 0.25 280 / 0.3)",
                  "0 0 0 8px oklch(0.66 0.25 280 / 0)",
                  "0 0 0 0 oklch(0.66 0.25 280 / 0.3)",
                ],
              }}
            />
          ))}

          {workflowSteps.map((step, index) => (
            <div key={index} className="relative rounded-3xl">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-primary-glow/50 to-primary/30 opacity-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  opacity: [0, 1, 1],
                  background: [
                    "linear-gradient(45deg, oklch(0.66 0.25 280 / 0.3), oklch(0.66 0.25 280 / 0.5), oklch(0.66 0.25 280 / 0.3))",
                    "linear-gradient(225deg, oklch(0.66 0.25 280 / 0.5), oklch(0.66 0.25 280 / 0.3), oklch(0.66 0.25 280 / 0.5))",
                    "linear-gradient(45deg, oklch(0.66 0.25 280 / 0.3), oklch(0.66 0.25 280 / 0.5), oklch(0.66 0.25 280 / 0.3))",
                  ],
                }}
                transition={{
                  delay: 1.5 + index * 0.3,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 + index * 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, oklch(0.66 0.25 280 / 0.6), transparent, transparent)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              
              <motion.div
                variants={fadeInUp(0.08 * index)}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 16px 45px -15px oklch(0.66 0.25 280 / 0.45)",
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                }}
                className="relative rounded-3xl bg-card/50 backdrop-blur-sm p-8 cursor-pointer z-50 border border-primary/20"
              >
                <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary-glow/60 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-glow z-10">
                  {step.week}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2.5">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 * detailIndex + 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-sm text-muted-foreground flex items-start gap-2.5"
                      >
                        <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-primary/70" />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkflowSection;
