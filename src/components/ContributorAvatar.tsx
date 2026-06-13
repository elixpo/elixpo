"use client";

import { useState } from "react";
import Image from "next/image";

interface ContributorAvatarProps {
  login: string;
  src?: string;
  size: number;
  className?: string;
}

/**
 * GitHub avatar with a graceful fallback: if the image 404s (deleted user,
 * rate-limited, etc.) we render a gradient disc instead of a collapsed,
 * thin-line broken image. Size is fixed inline so the box never collapses.
 */
export function ContributorAvatar({ login, src, size, className = "" }: ContributorAvatarProps) {
  const [errored, setErrored] = useState(false);
  const style = { width: size, height: size };

  if (errored || !login) {
    return (
      <div
        style={style}
        className={`rounded-full bg-gradient-to-br from-[#DEDBC8]/50 via-[#9a8cae]/40 to-[#44386e]/50 flex items-center justify-center shrink-0 ${className}`}
      >
        <span className="font-bold text-white/70 uppercase" style={{ fontSize: size * 0.4 }}>
          {login?.[0] ?? "?"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src || `https://github.com/${login}.png`}
      alt={login}
      width={size}
      height={size}
      unoptimized
      style={style}
      onError={() => setErrored(true)}
      className={`rounded-full object-cover shrink-0 ${className}`}
    />
  );
}
