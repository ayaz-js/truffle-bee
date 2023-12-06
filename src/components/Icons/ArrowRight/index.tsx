import { FC } from "react";
import { IconProps } from "../props.ts";
export const ArrowRight: FC<IconProps> = ({ className }) => (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clip-path="url(#clip0_1033_42)">
      <circle cx="13.5" cy="13.5" r="12.5" stroke="black" />
      <path
        d="M10 13C9.72386 13 9.5 13.2239 9.5 13.5C9.5 13.7761 9.72386 14 10 14L10 13ZM17.3536 13.8536C17.5488 13.6583 17.5488 13.3417 17.3536 13.1464L14.1716 9.96447C13.9763 9.7692 13.6597 9.7692 13.4645 9.96447C13.2692 10.1597 13.2692 10.4763 13.4645 10.6716L16.2929 13.5L13.4645 16.3284C13.2692 16.5237 13.2692 16.8403 13.4645 17.0355C13.6597 17.2308 13.9763 17.2308 14.1716 17.0355L17.3536 13.8536ZM10 14L17 14L17 13L10 13L10 14Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1033_42">
        <rect width="27" height="27" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
