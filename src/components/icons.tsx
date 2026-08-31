import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 48 48",
};

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="12.5" strokeDasharray="1 3" />
      <path d="M30 18 26 26 18 30 22 22Z" />
      <path d="M24 5.5v3M24 39.5v3M5.5 24h3M39.5 24h3" />
    </svg>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 30c4-9 11-14 18-12 5 1.5 7 6 5.5 9.5-1.2 2.8-4.6 3.6-6.4 1.7-1.4-1.4-1-3.6.8-4.3" />
      <path d="M4 36c5 0 6-2.5 10-2.5S18.5 36 23 36s5-2.5 9-2.5S36.5 36 41 36" />
      <path d="M4 41c5 0 6-2 10-2s4.5 2 9 2 5-2 9-2 4.5 2 9 2" />
    </svg>
  );
}

export function MountainIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M3 36 17 14l9 13" />
      <path d="M20 36 31 19l14 17Z" />
      <path d="M12.5 22.5h9" />
      <path d="M27 25.5l4 3 4-3" />
      <path d="M3 41h42" />
    </svg>
  );
}

export function LighthouseIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M19 20h10l3 18H16Z" />
      <path d="M20 12h8v8h-8Z" />
      <path d="M24 6v3M18 10l-3-2M30 10l3-2" />
      <path d="M17 27h14" />
      <path d="M11 41c4 0 4-2 8-2s5 2 9 2 5-2 9-2" />
    </svg>
  );
}

export function BirdsIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 26c3.5-4 5.5-4 7.5-1.5 2-2.5 4-2.5 7.5 1.5" />
      <path d="M22 16c3-3.5 4.8-3.5 6.5-1.3 1.7-2.2 3.5-2.2 6.5 1.3" />
      <path d="M28 33c3-3.5 4.8-3.5 6.5-1.3 1.7-2.2 3.5-2.2 6.5 1.3" />
    </svg>
  );
}

export function PelicanMark(props: IconProps) {
  return (
    <svg {...base} {...props} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M27 14c4 0 6.5 2.6 6.5 6 0 1.4-.4 2.4-.4 3.6L46 27l-13 2.4" />
      <circle cx="30.4" cy="17.6" r=".9" fill="currentColor" stroke="none" />
      <path d="M27.5 23.6c-1 5-6.5 6.6-9.5 12.6-2.4 4.8-.6 9.8 4 11.8" />
      <path d="M27.5 23.6c1.6 6.4 2 14.8 1.4 24.4" />
      <path d="M18 48h16" />
      <path d="M8 55c6-3 10-3 14.5-3s9 0 15.5 3" />
      <path d="M4 58h56" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" />
      <path d="m2.5 6.5 9.5 7 9.5-7" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2.8h4l1.6 4.4-2.4 1.6a12 12 0 0 0 6 6l1.6-2.4 4.4 1.6v4c0 1-.8 1.8-1.8 1.8A17.6 17.6 0 0 1 4.2 4.6c0-1 .8-1.8 1.8-1.8Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21.5s7-6.4 7-11.5a7 7 0 1 0-14 0c0 5.1 7 11.5 7 11.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function RingMark({ tone, ...props }: IconProps & { tone: "teal" | "silver" | "sand" }) {
  const color =
    tone === "teal" ? "var(--coastal)" : tone === "silver" ? "var(--sand)" : "var(--gold-soft)";
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true" {...props}>
      <path
        d="M32 6.5c14.2 0 25.5 11.4 25.5 25.5S46.2 57.5 32 57.5 6.5 46.2 6.5 32c0-9.4 5-17.7 12.6-22.2"
        fill="none"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M20.5 8.4C24 6.6 27.7 6.5 31 6.5"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export const capabilityIcons = {
  compass: CompassIcon,
  wave: WaveIcon,
  mountain: MountainIcon,
  lighthouse: LighthouseIcon,
  birds: BirdsIcon,
};
