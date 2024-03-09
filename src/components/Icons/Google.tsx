import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M18 9.205q-.002-.958-.167-1.841h-8.65v3.481h4.943c-.213 1.125-.86 2.078-1.832 2.716v2.258h2.968C16.998 14.253 18 11.946 18 9.206"
    />
    <path
      fill="#34A853"
      d="M9.184 18c2.48 0 4.558-.806 6.078-2.18l-2.968-2.259c-.823.54-1.875.86-3.11.86-2.392 0-4.417-1.584-5.139-3.711H.977v2.332C2.487 15.983 5.594 18 9.184 18"
    />
    <path
      fill="#FBBC05"
      d="M4.045 10.71A5.3 5.3 0 0 1 3.757 9c0-.593.104-1.17.288-1.71V4.958H.977a8.85 8.85 0 0 0 0 8.084z"
    />
    <path
      fill="#EA4335"
      d="M9.184 3.58c1.348 0 2.559.454 3.51 1.345l2.634-2.58C13.738.891 11.66 0 9.184 0 5.594 0 2.488 2.017.977 4.958L4.045 7.29c.722-2.127 2.747-3.71 5.139-3.71"
    />
  </svg>
);
const Memo = memo(SvgGoogle);
export default Memo;
