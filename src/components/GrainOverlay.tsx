"use client";

export default function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[48] opacity-[0.03]"
      aria-hidden
    >
      <svg className="absolute inset-0 w-full h-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
