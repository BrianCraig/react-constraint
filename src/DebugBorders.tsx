import React, { FunctionComponent } from "react";

interface DebugBordersInterface {
  width: number;
  height: number;
}

export const DebugBorders: FunctionComponent<DebugBordersInterface> = ({
  width,
  height
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
        points={`2,4 2,${width + 4}`}
        fill="none"
        stroke="black"
        stroke-width="4"
      />
      <polyline
        points={`4,2 ${height + 4},2`}
        fill="none"
        stroke="#fefefe"
        stroke-width="4"
      />
      <polyline
        points={`${width + 6},4 ${width + 6},${height + 4}`}
        fill="none"
        stroke="black"
        stroke-width="4"
      />
      <polyline
        points={`4,${height + 6} ${width + 4},${height + 6}`}
        fill="none"
        stroke="#fefefe"
        stroke-width="4"
      />
      <polyline
        points={`6,${height + 16} 6,${height + 22} ${width + 2},${height +
          22} ${width + 2},${height + 16}`}
        fill="none"
        stroke="#fefefe"
        stroke-width="4"
      />
      <polyline
        points={`${width + 16},6 ${width + 22},6 ${height + 22},${width +
          2} ${height + 16},${width + 2}`}
        fill="none"
        stroke="#a0a0a0"
        stroke-width="4"
      />
    </svg>
  );
};
