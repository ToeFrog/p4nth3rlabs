import React from 'react';

interface BannerTextPathProps {
  displayText: string;
}

export default function BannerTextPath(props: BannerTextPathProps) {
  const { displayText } = props;

  return (
    <svg
      className="alert__bannerTextPath"
      width="800"
      height="244"
      viewBox="0 0 800 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="curve"
        d="M20.6036 28.6001L22.4333 26.1776C32.5533 12.811 46.847 5.45809 66.1149 3.71959C127.235 -1.83792 173.204 23.8976 213.741 46.6121C221.031 50.6876 228.035 54.5351 234.924 58.2686C284.609 84.6312 331.35 106.348 400.046 105.921H402.904C470.428 105.921 516.654 84.3462 565.853 58.2686C572.857 54.5351 579.747 50.6591 587.065 46.5836C627.602 23.7836 673.571 -1.86649 734.663 3.83352C753.93 5.57203 768.224 12.9251 778.344 26.2916L780.174 28.7141L779.716 31.5641C776.858 50.5166 777.429 71.4642 778.087 91.7847C778.459 103.47 778.802 114.585 778.516 125.044L778.344 130.972L772.455 131.884C767.281 132.682 762.421 130.06 757.733 127.552C755.162 125.999 752.393 124.801 749.499 123.99C743.743 123.335 737.931 123.335 732.175 123.99C707.562 126.412 679.86 139.836 653.617 153.373L647.585 156.48C579.232 191.734 501.989 228.727 413.167 240.298L391.727 240.84C301.247 229.981 222.603 192.39 153.193 156.451L147.189 153.373C120.946 139.836 93.2731 126.412 68.6307 123.99C62.8738 123.35 57.0635 123.35 51.3066 123.99C48.4133 124.801 45.6437 125.999 43.0734 127.552C38.385 130.06 33.5253 132.682 28.3509 131.884L22.4619 130.972L22.2904 125.044C22.0045 114.471 22.2903 103.47 22.7191 91.7847C23.3766 71.5212 24.0627 50.5166 21.0896 31.5641L20.6036 28.6001Z"
        fill="transparent"
      />
      <text className="alert__subtitle" width="800" textAnchor="middle" x="400">
        <textPath xlinkHref="#curve">• {displayText} •</textPath>
      </text>
    </svg>
  );
}