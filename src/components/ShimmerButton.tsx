"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

/** Pill CTA with a rotating conic shimmer along its perimeter. */
export function ShimmerButton({ href, children, variant = "primary", external = true, className = "" }: Props) {
  const rel = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  if (variant === "ghost") {
    return (
      <motion.a
        href={href}
        {...rel}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-steel backdrop-blur transition-colors hover:border-frost/60 hover:text-white ${className}`}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.a
      href={href}
      {...rel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`shimmer-border group relative inline-flex overflow-hidden rounded-full p-px ${className}`}
    >
      <span className="relative z-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-frost px-7 py-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-base shadow-[0_0_40px_-8px_rgba(56,189,248,0.7)] transition-colors group-hover:bg-white">
        {children}
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </span>
    </motion.a>
  );
}
