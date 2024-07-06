import * as React from "react";
import type { SVGProps } from "react";
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="M15.68 8.182q-.001-.851-.146-1.637H8V9.64h4.306a3.68 3.68 0 0 1-1.597 2.415v2.007h2.585c1.513-1.393 2.386-3.444 2.386-5.88"
      clipRule="evenodd"
    />
    <path
      fill="#34A853"
      fillRule="evenodd"
      d="M8 16c2.16 0 3.972-.716 5.295-1.938l-2.585-2.007c-.717.48-1.633.763-2.71.763-2.083 0-3.847-1.407-4.476-3.298H.852v2.073A8 8 0 0 0 8 16"
      clipRule="evenodd"
    />
    <path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M3.524 9.52c-.16-.48-.251-.993-.251-1.52s.09-1.04.25-1.52V4.407H.852A8 8 0 0 0 0 8c0 1.29.31 2.513.85 3.593z"
      clipRule="evenodd"
    />
    <path
      fill="#EA4335"
      fillRule="evenodd"
      d="M8 3.182c1.175 0 2.23.403 3.059 1.196l2.294-2.294C11.968.793 10.157 0 8.001 0A8 8 0 0 0 .85 4.407L3.525 6.48c.63-1.89 2.393-3.298 4.477-3.298"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGoogle;