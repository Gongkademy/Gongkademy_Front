import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#000"
      d="M4 2h8v4a4 4 0 1 1-8 0zM4 14h8M8 10v4M12 3h2v3a1 1 0 0 1-1 1h-1M4 3H2v3a1 1 0 0 0 1 1h1"
    />
  </svg>
);
export default SvgTrophyIcon;
