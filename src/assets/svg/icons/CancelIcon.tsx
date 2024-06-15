import * as React from "react";
import type { SVGProps } from "react";
const SvgCancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path stroke="#000" d="m2 2 12 12M14 2 2 14" />
  </svg>
);
export default SvgCancelIcon;
