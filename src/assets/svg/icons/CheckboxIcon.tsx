import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckbocIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <rect width={20} height={20} fill="#111113" rx={4} />
    <path stroke="#fff" d="m4 9 4 4 8-7" />
  </svg>
);
export default SvgCheckbocIcon;
