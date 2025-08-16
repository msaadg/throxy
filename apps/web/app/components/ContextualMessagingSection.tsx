"use client";
import { Button } from "@repo/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../lib/motion";

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  metrics?: string;
}

const ContextualMessagingSection = () => {
  const features: Feature[] = [
    {
      title: "Data Sources",
      subtitle: "Build better lead lists with custom databases, not generic data providers",
      description: "Most tools rely on stale data or firmographic filters. We build tailored prospect databases from scratch based on your exact ICP.",
      icon: "📊",
      gradient: "from-blue-500/20 to-cyan-500/20",
      metrics: "98% data accuracy"
    },
    {
      title: "Messaging", 
      subtitle: "Win more replies with contextual messaging built for your niche",
      description: "We craft unique messages using real context - industry, persona, and business signals - so every email sounds human, not templated.",
      icon: "💌",
      gradient: "from-purple-500/20 to-pink-500/20",
      metrics: "3x higher reply rates"
    },
    {
      title: "ICP Matching",
      subtitle: "Know your targets fit before we reach out", 
      description: "Our system evaluates buyer fit by analyzing their website, value prop, and language, so every lead is relevant before messaging begins.",
      icon: "🎯",
      gradient: "from-green-500/20 to-emerald-500/20",
      metrics: "85% qualification rate"
    },
    {
      title: "Managed Deliverability",
      subtitle: "Land in inboxes with custom deliverability infrastructure",
      description: "We set up and manage domains, warmups, and mailboxes so your outreach doesn't go to spam.",
      icon: "📧",
      gradient: "from-orange-500/20 to-red-500/20",
      metrics: "95% inbox delivery"
    },
    {
      title: "Loop Optimization", 
      subtitle: "Get better results every week with AI learning",
      description: "Our AI systems analyze responses to optimize targeting, timing, and messaging. Your outbound keeps improving without you lifting a finger.",
      icon: "🔄",
      gradient: "from-indigo-500/20 to-blue-500/20",
      metrics: "20% weekly improvement"
    },
    {
      title: "Fully Managed",
      subtitle: "Your calendar fills while you focus on closing",
      description: "We manage replies, qualify leads, book meetings, and send reminders. You don't lift a finger.",
      icon: "✅",
      gradient: "from-teal-500/20 to-green-500/20",
      metrics: "100% hands-off"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <motion.div
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div 
          variants={fadeInUp(0)}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={scaleIn(0.1)}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6"
          >
            Everything You Need to Scale Outbound
          </motion.h2>
          <motion.p 
            variants={fadeInUp(0.2)}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            From data sourcing to deal closing, we handle every aspect of your outbound engine 
            so you can focus on what matters most: growing your business.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp(0.1 * index)}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px oklch(0.66 0.25 280 / 0.4)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="group relative rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 overflow-hidden cursor-pointer flex flex-col h-full hover:border-primary/40 transition-all duration-500"
            >

              <motion.div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${feature.gradient}`} 
              />
  
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <span className="text-3xl filter drop-shadow-lg">{feature.icon}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <h4 className="text-sm font-semibold text-primary mb-4 leading-snug">
                  {feature.subtitle}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {feature.description}
                </p>
                
                {feature.metrics && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6"
                  >
                    ✨ {feature.metrics}
                  </motion.div>
                )}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mt-auto"
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{
                  background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={fadeInUp(0.6)}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Outbound Engine
            </Button>
          </motion.div>
          <p className="text-sm text-muted-foreground mt-4">
            Book a strategy call to see how we can 10x your pipeline
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContextualMessagingSection;