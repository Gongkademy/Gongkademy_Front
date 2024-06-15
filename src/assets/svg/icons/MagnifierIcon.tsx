import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifierIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#111113"
      d="M11 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-8.1 0a3.6 3.6 0 1 0 7.2 0 3.6 3.6 0 0 0-7.2 0"
    />
    <path
      fill="#111113"
      fillRule="evenodd"
      d="m13.147 13.854-4-4 .707-.708 4 4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMagnifierIcon;
