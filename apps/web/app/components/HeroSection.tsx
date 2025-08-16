"use client";

import { Button } from "@repo/ui/button";
import { motion, type Variants, useMotionValue, useSpring, useTransform, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 100,
      damping: 20
    },
  },
};

// Star component for floating animation
interface FloatingStarProps {
  delay?: number;
  duration?: number;
  x?: string;
  y?: string;
}

const FloatingStar = ({ delay = 0, duration = 3, x = "0%", y = "0%" }: FloatingStarProps) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full opacity-80"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.3, 0.8, 0],
        scale: [0, 1.5, 0.8, 1.2, 0],
        y: [0, -30, -10, -25, 0],
        x: [0, 15, -8, 12, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 1,
      }}
    />
  );
};

// Generate random stars
interface StarData {
  id: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
}

const generateStars = (count: number): StarData[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + "%",
    y: Math.random() * 100 + "%",
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 4,
  }));
};

const HeroSection = () => {
  const [stars, setStars] = useState<StarData[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  // Removed isMounted gating; we'll rely on whileInView for triggering variants
  
  // Mouse tracking for cursor following cloud
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth cursor following
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Transform mouse position to cloud movement
  const cloudX = useTransform(springX, [0, windowSize.width], [-100, 100]);
  const cloudY = useTransform(springY, [0, windowSize.height], [-50, 50]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    // Generate stars after small delay to avoid hydration flashes
    const starTimeout = setTimeout(() => {
      setStars(generateStars(30));
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(starTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);
  return (
    <MotionConfig reducedMotion="never">
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative container mx-auto px-6 py-16 md:py-24 text-center"
      >
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,43,226,0.2),transparent_70%)]" />
        <motion.div
          className="absolute w-96 h-96 opacity-30"
          style={{
            x: cloudX,
            y: cloudY,
            left: "50%",
            top: "50%",
            marginLeft: "-12rem",
            marginTop: "-12rem",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-blue-400/40 rounded-full blur-3xl" />
        </motion.div>
        
        <motion.div
          className="absolute w-64 h-64 opacity-15"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.8 },
            scale: { duration: 1, delay: 0.8 },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          style={{ left: "20%", top: "30%" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-2xl" />
        </motion.div>
        
        <motion.div
          className="absolute w-48 h-48 opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.2,
            scale: 1,
            x: [0, -40, 25, 0],
            y: [0, 25, -15, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 1.2 },
            scale: { duration: 1, delay: 1.2 },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
          style={{ right: "25%", top: "20%" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-2xl" />
        </motion.div>
        
        {stars.map((star) => (
          <FloatingStar
            key={star.id}
            delay={star.delay}
            duration={star.duration}
            x={star.x}
            y={star.y}
          />
        ))}
        
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="absolute w-2 h-2 bg-white rounded-full opacity-60 blur-sm" style={{ left: "15%", top: "25%" }} />
          <div className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-80 blur-sm" style={{ left: "75%", top: "15%" }} />
          <div className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 blur-sm" style={{ left: "85%", top: "65%" }} />
          <div className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-90 blur-sm" style={{ left: "25%", top: "75%" }} />
          <div className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-50 blur-sm" style={{ left: "65%", top: "85%" }} />
          <div className="absolute w-1 h-1 bg-yellow-200 rounded-full opacity-70 blur-sm" style={{ left: "45%", top: "35%" }} />
          <div className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60 blur-sm" style={{ left: "90%", top: "45%" }} />
        </motion.div>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tighter"
        >
          We book meetings with your{" "}
          <motion.span
            className="bg-gradient-primary bg-clip-text text-transparent inline-block"
            initial={{ 
              backgroundSize: "200% 200%", 
              backgroundPosition: "0% 50%",
              opacity: 0,
              scale: 0.9
            }}
            animate={{ 
              backgroundPosition: "100% 50%",
              opacity: 1,
              scale: 1
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
              opacity: { duration: 0.8, delay: 0.5 },
              scale: { duration: 0.8, delay: 0.5 }
            }}
          >
            perfect fit prospects
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          We run your entire outbound using our own custom-built tech that
          uncovers niche-specific data, delivers unique messaging at scale, and
          keeps your emails landing in inboxes.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 40px -10px rgba(138, 43, 226, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <Button variant="hero" size="default" className="min-w-[200px] relative z-10">
              Book Strategy Call
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              borderColor: "rgba(138, 43, 226, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              variant="outline"
              size="default"
              className="min-w-[200px] flex gap-2"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd"/>
              </svg>
              Video demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
      </motion.section>
    </MotionConfig>
  );
};

export default HeroSection;