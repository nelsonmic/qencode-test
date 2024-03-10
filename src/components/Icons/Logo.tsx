import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 179 32"
    {...props}
  >
    <path
      fill="#316FEA"
      d="M0 16.077C0 7.266 6.35.31 16.029.31s16.028 6.957 16.028 15.768c0 3.17-.852 6.107-2.245 8.503l2.71 2.319L28.108 32l-2.942-2.628c-2.478 1.546-5.576 2.473-9.06 2.473C6.349 31.923 0 25.044 0 16.077m7.743 0c0 5.102 3.407 8.89 8.208 8.89 1.162 0 2.323-.233 3.252-.62l-2.555-2.24 4.336-5.025 2.633 2.319c.31-1.005.542-2.087.542-3.246 0-5.025-3.33-8.812-8.208-8.812s-8.208 3.71-8.208 8.734M41.967 21.952c.155 2.01 2.168 3.787 4.8 3.787 2.711 0 4.337-1.778 4.802-2.473l4.8 3.71C55.75 28.29 52.576 32 46.614 32c-7.51 0-12.157-5.179-12.157-11.903S39.025 8.039 45.684 8.039c7.279 0 11.228 4.637 11.228 12.444 0 .464 0 .928-.078 1.469zm.232-4.56h7.434c-.078-1.856-1.471-3.402-3.717-3.402-2.4 0-3.562 1.778-3.717 3.401M72.32 18.396c0-2.164-1.24-3.246-3.02-3.246-2.014 0-3.175 1.468-3.175 3.246V32h-7.279V9.198h7.124v2.319c.852-1.314 2.865-2.937 5.73-2.937 7.124 0 7.82 6.106 7.82 10.744V32h-7.278V18.396zM98.645 24.039l1.936 5.951C99.032 31.073 96.709 32 93.844 32c-7.279 0-12.39-4.947-12.39-11.98s5.344-11.981 12.39-11.981c2.943 0 5.188.927 6.814 2.087l-1.936 6.106a6.96 6.96 0 0 0-4.568-1.7c-3.407 0-5.343 2.395-5.343 5.41 0 3.324 2.245 5.642 5.653 5.642 1.548.078 3.174-.695 4.18-1.545M114.983 8.039c7.356 0 12.544 5.024 12.544 11.98 0 6.88-5.343 11.981-12.544 11.981-7.279 0-12.39-5.024-12.39-11.903-.077-6.957 5.266-12.058 12.39-12.058m0 17.545c3.02 0 5.265-2.318 5.265-5.642s-2.323-5.565-5.265-5.565c-3.02 0-5.111 2.319-5.111 5.642-.077 3.324 2.091 5.566 5.111 5.566M146.883 29.681c-.619.773-2.865 2.319-6.194 2.319-6.582 0-11.228-4.947-11.228-11.98 0-7.112 4.181-11.981 10.841-11.981 3.484 0 5.652 1.777 6.117 2.319V0h7.279v31.459h-6.815zm-5.188-15.304c-2.942 0-4.955 2.319-4.955 5.642 0 3.401 2.013 5.566 4.955 5.566 3.175 0 4.956-2.551 4.956-5.566-.077-3.555-2.091-5.642-4.956-5.642M163.143 21.952c.155 2.01 2.168 3.787 4.801 3.787 2.71 0 4.336-1.778 4.801-2.473l4.8 3.71c-.619 1.314-3.794 5.024-9.756 5.024-7.511 0-12.157-5.179-12.157-11.903S160.2 8.039 166.86 8.039c7.278 0 11.227 4.637 11.227 12.444 0 .464 0 .928-.077 1.469zm.232-4.56h7.434c-.078-1.856-1.471-3.402-3.717-3.402-2.4 0-3.562 1.778-3.717 3.401"
    />
  </svg>
);
const Memo = memo(SvgLogo);
export default Memo;