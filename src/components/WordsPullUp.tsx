"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  startDelay?: number;
}

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  startDelay = 0,
}: WordsPullUpProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const words = text.split(" ").filter(Boolean);

  return (
    <span
      ref={containerRef}
      className={`inline-flex flex-wrap items-baseline gap-x-[0.25em] ${className}`}
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;

        return (
          <span
            key={index}
            className="inline-block overflow-hidden relative leading-none"
            style={{ paddingBottom: "0.08em" }}
          >
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: startDelay + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block relative leading-none text-[#E1E0CC]"
            >
              {isLastWord && showAsterisk ? (
                <span className="inline-block relative pr-[0.25em]">
                  {word}
                  <span className="absolute top-[0.1em] right-[0.15em] text-[0.34em] font-light leading-none select-none text-primary/80">
                    *
                  </span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
