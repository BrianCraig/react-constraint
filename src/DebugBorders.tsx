import React, { FunctionComponent } from "react";

interface DebugBordersInterface {
  width: number;
  height: number;
  activeColor?: string;
  inactiveColor?: string;
  onTop?: () => any;
  onRight?: () => any;
  onBottom?: () => any;
  onLeft?: () => any;
}

export const DebugBorders: FunctionComponent<DebugBordersInterface> = ({
  width,
  height,
  activeColor = "#000000c0",
  inactiveColor = "#00000030",
  onTop,
  onRight,
  onBottom,
  onLeft
}) => {
  return (
    <svg
      version="1.1"
      xmlSpace="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width + 24}
      height={height + 24}
    >
      <polyline
        points={`4,2 ${width + 4},2`}
        fill="none"
        stroke={onTop ? activeColor : inactiveColor}
        onClick={onTop}
        stroke-width="4"
      />
      <polyline
        points={`4,${height + 6} ${width + 4},${height + 6}`}
        fill="none"
        stroke={activeColor}
        onClick={onBottom}
        stroke-width="4"
      />
      <polyline
        points={`${width + 6},4 ${width + 6},${height + 4}`}
        fill="none"
        stroke={activeColor}
        onClick={onRight}
        stroke-width="4"
      />
      <polyline
        points={`2,4 2,${height + 4}`}
        fill="none"
        stroke={activeColor}
        onClick={onLeft}
        stroke-width="4"
      />
      <polyline
        points={`6,${height + 16} 6,${height + 22} ${width + 2},${height +
          22} ${width + 2},${height + 16}`}
        fill="none"
        stroke={inactiveColor}
        stroke-width="4"
      />
      <polyline
        points={`${width + 16},6 ${width + 22},6 ${width + 22},${height +
          2} ${width + 16},${height + 2}`}
        fill="none"
        stroke={inactiveColor}
        stroke-width="4"
      />
    </svg>
  );
};
