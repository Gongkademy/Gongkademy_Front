import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="current"
      d="M7.578 4.068 8 4.731l.422-.663c.607-.955 1.681-1.568 2.911-1.568 1.924 0 3.5 1.576 3.5 3.5 0 .85-.392 1.746-1.049 2.642-.653.89-1.535 1.735-2.434 2.471A26 26 0 0 1 8 13.425l-.062-.037a26.45 26.45 0 0 1-3.288-2.287c-.9-.738-1.781-1.584-2.435-2.474C1.558 7.732 1.167 6.84 1.167 6c0-1.924 1.576-3.5 3.5-3.5 1.23 0 2.303.613 2.911 1.568Z"
    />
  </svg>
);
export default SvgLikeIcon;
