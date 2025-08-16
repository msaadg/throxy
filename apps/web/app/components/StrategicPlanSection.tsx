"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";

const StrategicPlanSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          variants={fadeInUp(0)}
          className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="mb-8">
            <motion.div
              variants={fadeInUp(0.1)}
              className="bg-gradient-primary/10 border border-primary/20 rounded-full px-4 py-2 inline-block mb-4"
            >
              <span className="text-primary font-semibold">
                Strategic Plan
              </span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp(0.2)} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  ICP & Persona
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      ICP
                    </span>
                    <span className="text-sm text-foreground">
                      Mid-Market Logistics Companies
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      Persona
                    </span>
                    <span className="text-sm text-foreground">
                      Director of Operations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-muted-foreground">
                      Trigger
                    </span>
                    <span className="text-sm text-foreground">
                      Fleet Expansion
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Context Aware Personalization
                </h3>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      borderColor: "oklch(0.66 0.25 280 / 0.5)",
                    }}
                    className="bg-muted/20 rounded-lg p-3 border border-transparent"
                  >
                    <span className="text-sm font-medium text-primary">
                      Scraped LinkedIn:
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Saw your recent Fleet expansion.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      borderColor: "oklch(0.66 0.25 280 / 0.5)",
                    }}
                    className="bg-muted/20 rounded-lg p-3 border border-transparent"
                  >
                    <span className="text-sm font-medium text-primary">
                      Scraped Website:
                    </span>
                    <p className="text-sm text-muted-foreground">
                      Congrats on your DHL partnership.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp(0.3)} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Finding Messaging-Market Fit
                </h3>
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 8px 25px -8px oklch(0.66 0.25 280 / 0.25)",
                  }}
                  className="bg-muted/10 border border-primary/20 rounded-xl p-6"
                >
                  <div className="mb-4">
                    <span className="bg-accent/20 text-accent text-xs font-medium px-2 py-1 rounded">
                      A/B Test 1
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Email:
                      </span>
                      <div className="bg-card border border-primary/20 rounded-lg p-4 mt-2">
                        <p className="text-sm text-foreground leading-relaxed">
                          Hi Alex, Congrats on your DHL partnership. Is ABC
                          company looking to scale their fleet? We help
                          logistic companies break into new areas with
                          strategic fleet expansion solutions.
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Question:
                      </span>
                      <p className="text-sm text-foreground mt-1">
                        "Is this relevant at the moment?"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StrategicPlanSection;