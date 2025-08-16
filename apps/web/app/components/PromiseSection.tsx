"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/motion";

const PromiseSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div
        variants={staggerContainer(0.2, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2
            variants={fadeInUp(0)}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tighter"
          >
            Our Promise
          </motion.h2>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <motion.p variants={fadeInUp(0.1)}>
            We started throxy with a clear belief: outbound sales is broken, and
            AI will redefine how companies connect with their customers.
          </motion.p>

          <motion.p variants={fadeInUp(0.2)}>
            In 2023, we began working with a handful of B2B companies. Together,
            we built deeply personalised outbound systems that delivered
            qualified meetings, not just leads. Through rigorous iteration,
            collaboration, and results, we created a new model for outbound: one
            that combines intelligent automation with human precision.
          </motion.p>

          <motion.p variants={fadeInUp(0.3)}>
            That ethos still defines us. We ship fast. We measure everything. We
            work side by side with our customers, not as a tool, but as a
            partner.
          </motion.p>

          <motion.p variants={fadeInUp(0.4)}>
            We're building throxy to eliminate the need for bloated SDR teams,
            disconnected tools, and generic automation. Our system does it all:
            it finds the right people, writes the right message, delivers it at
            the right time, and books the meeting.
          </motion.p>

          <motion.p
            variants={fadeInUp(0.5)}
            className="text-foreground font-medium text-xl"
          >
            This is not another sales platform. It's a new way of thinking about
            outbound itself.
          </motion.p>

          <motion.p variants={fadeInUp(0.6)}>
            Throxy's mission is to free people from repetitive prospecting and
            unlock a future where every conversation starts with context,
            relevance, and value. We exist to help companies scale their impact,
            without scaling their headcount.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default PromiseSection;