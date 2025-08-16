"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import { staggerContainer, fadeInUp } from "../lib/motion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Do I need to set anything up?",
      answer:
        "No. We manage the entire system for you, end to end. Our job is to book you the meetings, yours is to close them.",
    },
    {
      question: "Can I use my CRM or pipeline tools?",
      answer:
        "Absolutely. We'll sync with whatever tools you use. We're non-custodial.",
    },
    {
      question: "What if I'm in a niche or traditional industry?",
      answer:
        "That's exactly who we're built for. Hard-to-crack markets are our specialty. We manage the entire system for you, end to end. All you do is attend our onboarding.",
    },
    {
      question: "How fast will I see meetings?",
      answer:
        "Most clients see qualified meetings land in their calendar within 2–3 weeks.",
    },
    {
      question:
        "How is this different from a traditional lead gen agency?",
      answer:
        "We built our own technology stack. No rented tools. No generic templates. Every campaign is designed from the ground up by a team that works closely with your team to reach the right people, the right way.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp(0.1)}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                FAQs
              </span>
            </motion.h2>
          </div>


          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.1 * index + 0.3)}
                whileHover={{ y: -3 }}
                className="group"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20 group-hover:bg-card/50"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6 group-hover:no-underline">
                    <span className="flex items-center gap-3">
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          <motion.div
            variants={fadeInUp(0.8)}
            className="mt-16 text-center"
          >
            <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a strategy call to see how Throxy can transform your outbound
              </p>
              <motion.button
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                Book Strategy Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;