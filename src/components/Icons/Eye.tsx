import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#67717B"
      fillRule="evenodd"
      d="M17.286 9.323C15.971 7.388 13.417 4.567 10 4.567c-3.418 0-5.971 2.821-7.286 4.756a.81.81 0 0 0 0 .931C4.029 12.188 6.582 15.01 10 15.01s5.971-2.822 7.286-4.756a.81.81 0 0 0 0-.931M1.418 11.135a2.38 2.38 0 0 1 0-2.693C2.764 6.462 5.728 3 10 3s7.236 3.463 8.582 5.442c.558.82.558 1.872 0 2.693-1.346 1.979-4.31 5.442-8.582 5.442s-7.236-3.463-8.582-5.442m7.015-1.347c0 .855.7 1.567 1.588 1.567s1.589-.712 1.589-1.567-.701-1.566-1.589-1.566c-.887 0-1.588.711-1.588 1.566m1.588-3.133c1.743 0 3.155 1.403 3.155 3.133s-1.412 3.133-3.155 3.133-3.155-1.402-3.155-3.133c0-1.73 1.413-3.133 3.155-3.133"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgEye);
export default Memo;
