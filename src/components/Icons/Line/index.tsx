import { FC } from "react";
import { IconProps } from "../props.ts";
export const Line: FC<IconProps> = ({ className }) => (
  <svg
    width="1440"
    height="10"
    viewBox="0 0 1440 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="5" cy="5" r="4" stroke="#192026" stroke-width="2" />
    <path
      d="M9 3.99994C8.44772 3.99994 8 4.44765 8 4.99994C8 5.55222 8.44772 5.99994 9 5.99994L9 3.99994ZM9 5.99994L1431 6.00006L1431 4.00006L9 3.99994L9 5.99994Z"
      fill="#192026"
    />
    <circle cx="1435" cy="5" r="4" stroke="#192026" stroke-width="2" />
  </svg>
);
