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
    const EDGE = 0.05; // seconds of slack near the start
    const TAIL = 0.2; // start reversing this far before the end (avoids a visible pause)

    const reverseStep = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const next = video.currentTime - dt;
      if (next <= EDGE) {
        video.currentTime = 0;
        direction = 1;
        video.play().catch(() => {});
        return; // resume forward; rAF stops until the end is reached again
      }
      video.currentTime = next;
      raf = requestAnimationFrame(reverseStep);
    };

    const startReverse = () => {
      if (direction !== 1) return;
      direction = -1;
      video.pause();
      // If we're sitting exactly at the end, nudge inside the clip first.
      if (Number.isFinite(video.duration) && video.currentTime >= video.duration) {
        video.currentTime = Math.max(0, video.duration - 0.001);
      }
      last = performance.now();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(reverseStep);
    };

    const onTimeUpdate = () => {
      if (
        direction === 1 &&
        Number.isFinite(video.duration) &&
        video.currentTime >= video.duration - TAIL
      ) {
        startReverse();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", startReverse); // fallback if timeupdate misses the tail
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", startReverse);
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
