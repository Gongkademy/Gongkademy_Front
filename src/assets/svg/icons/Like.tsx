import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.57825 2.06844L8.00008 2.73131L8.42191 2.06844C9.02966 1.1134 10.1035 0.5 11.3334 0.5C13.2573 0.5 14.8334 2.07614 14.8334 4C14.8334 4.84956 14.4414 5.74594 13.7844 6.64182C13.1312 7.53251 12.2494 8.37724 11.3501 9.11302C10.4533 9.84679 9.55397 10.4602 8.87748 10.8907C8.53972 11.1056 8.25871 11.2742 8.0629 11.3886C8.04121 11.4013 8.02057 11.4133 8.00102 11.4246C7.98131 11.4131 7.9605 11.4009 7.93862 11.3881C7.74274 11.2728 7.46166 11.103 7.12382 10.8867C6.44717 10.4535 5.54762 9.83695 4.65056 9.10095C3.75102 8.36292 2.86894 7.51693 2.21555 6.62743C1.55806 5.73236 1.16675 4.84041 1.16675 4C1.16675 2.07614 2.74289 0.5 4.66675 0.5C5.89668 0.5 6.9705 1.1134 7.57825 2.06844Z"
      stroke="#6B6E76"
    />
  </svg>
);
export default SvgLike;
