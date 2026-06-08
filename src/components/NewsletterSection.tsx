"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function NewsletterSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  const fade = (video: HTMLVideoElement, targetOpacity: number, duration: number, callback?: () => void) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startOpacity = parseFloat(video.style.opacity || "0");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = currentOpacity.toFixed(3);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
        if (callback) callback();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial opacity to 0
    video.style.opacity = "0";

    const handlePlay = () => {
      fadingOutRef.current = false;
      fade(video, 1, 500);
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      if (duration && duration - currentTime <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fade(video, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          fadingOutRef.current = false;
          fade(video, 1, 500);
        }).catch((err) => console.log("Video playback error on loop end:", err));
      }, 100);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // Initial play trigger
    video.play().catch((err) => {
      console.log("Autoplay blocked, waiting for user interactions", err);
    });

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-black overflow-hidden relative flex flex-col justify-between select-none">
      {/* Background Video Player */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover translate-y-[17%] pointer-events-none scale-105"
        />
        {/* Dark film tint overlays of the video */}
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent z-10" />
      </div>

      {/* Decorative Top Gap */}
      <div className="h-16 relative z-10" />

      {/* Main "Coming soon" widget */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[8%] md:-translate-y-[5%] max-w-4xl mx-auto w-full">
        {/* Animated Heading using Instrument Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight font-normal leading-none font-serif"
        >
          Built for the <span className="italic">curious</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-xl w-full space-y-6 flex flex-col items-center"
        >
          {/* Coming soon badge */}
          <div className="liquid-glass rounded-full px-6 py-3 flex items-center gap-2.5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="text-xs sm:text-sm text-[#DEDBC8] font-mono uppercase tracking-[0.2em]">
              Newsletter · Coming soon
            </span>
          </div>

          {/* Subtitle text description */}
          <p className="text-[#DEDBC8]/70 text-xs sm:text-sm leading-relaxed px-4 max-w-md font-mono">
            We&rsquo;re putting the finishing touches on our newsletter. Subscriptions open soon — check back to stay in the loop on releases and insights.
          </p>
        </motion.div>
      </div>

      {/* Empty decorative bottom spacing */}
      <div className="pb-16" />
    </section>
  );
}
