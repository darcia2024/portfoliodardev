"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered reveal wrapper. Fades up gently when the element enters
 * the viewport. Uses `whileInView` so it works without a global provider and
 * respects prefers-reduced-motion via Framer Motion's built-in support.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const Motion = motion.div as React.ComponentType<{
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
    initial?: Record<string, unknown>;
    whileInView?: Record<string, unknown>;
    viewport?: Record<string, unknown>;
    transition?: Record<string, unknown>;
  }>;

  return (
    <Motion
      as={Component}
      className={cn("reveal", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Motion>
  );
}

/**
 * Staggered list reveal , wraps a list of items with an increasing delay so
 * rows/cards flow in one after another while scrolling.
 */
export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={cn("reveal", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}
