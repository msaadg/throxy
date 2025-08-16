"use client";

import { Button } from "@repo/ui/button";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const Header = () => {
  const { scrollY } = useScroll();

  // Interpolate subtle backdrop + elevation as user scrolls
  const bgOpacity = useTransform(scrollY, [0, 80], [0.5, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0.4, 1]);
  const background = useTransform(
    bgOpacity,
    (o: number) => `rgba(10,10,10,${o})`,
  );
  const borderColor = useTransform(
    borderOpacity,
    (o: number) => `oklch(0.30 0 0 / ${o})`,
  );
  const boxShadow = useTransform(scrollY, (v: number) =>
    v > 40
      ? "0 4px 30px -8px oklch(0.66 0.25 280 / 0.25)"
      : "0 2px 10px -6px oklch(0.66 0.25 280 / 0.15)",
  );

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto"
    >
      <motion.div
        style={{ background, boxShadow, borderColor }}
        className="px-6 md:px-10 rounded-3xl md:rounded-full border backdrop-blur-xl bg-background/60 supports-[backdrop-filter]:bg-background/40 shadow-[0_4px_40px_-8px_oklch(0.66_0.25_280_/_0.25)]"
      >
        <motion.nav
          className="flex items-center gap-8 h-14 md:h-16 mx-auto"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.4,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-2"
            variants={navItemVariants}
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -8 }}
              className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow/20"
            >
              <span className="text-primary-foreground font-bold text-lg">
                T
              </span>
            </motion.div>
            <motion.span
              className="text-2xl font-bold text-foreground"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              throxy
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "#process", label: "Our Process" },
              { href: "#faq", label: "FAQ" },
              { href: "#careers", label: "Careers" },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground relative px-3 py-1.5"
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={navItemVariants}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  layoutId={`nav-highlight-${i}`}
                  className="absolute inset-0 rounded-full bg-primary/10"
                  variants={{
                    rest: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.a>
            ))}
            <motion.div
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="default">
                Strategy Call
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="md:hidden ml-auto"
            variants={navItemVariants}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;