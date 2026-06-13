"use client";

import { useEffect, useRef } from "react";

interface PingPongVideoProps {
  src: string;
  className?: string;
}

/**
 * Plays a muted clip forward, then backward, then forward… (boomerang loop).
 * Native <video loop> can't reverse, so the backward pass is driven manually
 * with requestAnimationFrame. Ideal for short, static ambient clips where a
 * hard cut at the end would be jarring.
 */
export function PingPongVideo({ src, className }: PingPongVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let raf = 0;
    let direction: 1 | -1 = 1;
    let last = 0;
    const EDGE = 0.04; // seconds of slack at each end

    const reverseStep = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      video.currentTime = Math.max(0, video.currentTime - dt);
      if (video.currentTime <= EDGE) {
        direction = 1;
        video.play().catch(() => {});
        return; // resume forward; rAF stops until next end is reached
      }
      raf = requestAnimationFrame(reverseStep);
    };

    const onTimeUpdate = () => {
      if (
        direction === 1 &&
        Number.isFinite(video.duration) &&
        video.currentTime >= video.duration - EDGE
      ) {
        direction = -1;
        video.pause();
        last = performance.now();
        raf = requestAnimationFrame(reverseStep);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      cancelAnimationFrame(raf);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      playsInline
      autoPlay
      preload="auto"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
