import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const svgProps: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const AlertIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const PeopleIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const TruckIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <path d="M10 17h4V5H2v12h3" />
    <path d="M14 8h4l4 4v5h-8V8Z" />
    <circle cx="6.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const HeartIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-.06-.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l7.84-7.84a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);


export const KeyIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="M14 10l7-7" />
    <path d="M20 4l1 1" />
  </svg>
);

export const HomeIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <path d="M3 10L12 3l9 7" />
    <path d="M9 21V9h6v12" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...svgProps} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.78 19.78 0 0 1 3.11 6.18 2 2 0 0 1 5.1 4h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9.1 11.4a16 16 0 0 0 5.5 5.5l1.07-1.12a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const ShareIcon = (props: IconProps) => (
  <svg  {...svgProps} {...props} fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"  >
    <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z" />
  </svg>
);
