"use client";

import { useEffect, useRef, useState } from "react";

interface SmartVideoProps {
  src: string;
  className?: string;
  desktopOnly?: boolean;
  priority?: boolean;
  poster?: string;
}

/** Plays background video only when it is useful, visible, and data-safe. */
export function SmartVideo({
  src,
  className,
  desktopOnly = false,
  priority = false,
  poster,
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canRender, setCanRender] = useState(!desktopOnly);

  useEffect(() => {
    if (!desktopOnly) return;
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setCanRender(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [desktopOnly]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canRender) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navigatorWithConnection = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    if (reduceMotion || navigatorWithConnection.connection?.saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: priority ? "200px" : "100px", threshold: 0.01 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [canRender, priority]);

  if (!canRender) return null;

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      loop
      preload={priority ? "metadata" : "none"}
      poster={poster}
      className={className}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support background video.
    </video>
  );
}
