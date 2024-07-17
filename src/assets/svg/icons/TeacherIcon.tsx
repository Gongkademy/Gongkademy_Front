import * as React from "react";
import type { SVGProps } from "react";
const SvgTeacherIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={19}
      height={13}
      x={2.5}
      y={4.5}
      fill="#287C52"
      stroke="#CAAC71"
      strokeLinejoin="bevel"
      rx={2.5}
    />
    <path
      fill="#393939"
      d="m4.245 15.288.714-5A1.5 1.5 0 0 1 6.444 9h11.112a1.5 1.5 0 0 1 1.485 1.288l.714 5A1.5 1.5 0 0 1 18.27 17H5.73a1.5 1.5 0 0 1-1.485-1.712"
    />
    <path fill="#F8B1B1" d="M4 22a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6z" />
    <path
      fill="#F7EAD6"
      fillRule="evenodd"
      d="M14 14h-4v2a2 2 0 0 0 4 0z"
      clipRule="evenodd"
    />
    <circle cx={12} cy={9} r={7} fill="#FFF1DD" />
    <path
      fill="#393939"
      d="M5 8s-.234-.098 0-1c.438-1.686 1.717-5 6.865-5 5.424 0 6.892 4.622 6.965 4.985.06.298.195.865.17 1.015-3.158.372-8.037.66-8.81-2.35C9.87 7.978 6 9 5 8"
    />
    <circle cx={9.625} cy={9.625} r={0.625} fill="#111113" />
    <circle cx={14.375} cy={9.625} r={0.625} fill="#111113" />
    <path
      fill="#FFC0C0"
      d="M13.3 11c.11 0 .201.09.187.2a1.5 1.5 0 0 1-2.974 0c-.014-.11.076-.2.187-.2z"
    />
    <path fill="#F13939" d="M7.5 18h9v4h-9z" />
    <path fill="#AE2121" d="M7.5 18h2v4h-2z" />
    <circle cx={19} cy={9} r={1} fill="#FFF1DD" />
    <circle cx={5} cy={9} r={1} fill="#FFF1DD" />
  </svg>
);
export default SvgTeacherIcon;
