import React, { FunctionComponent, useContext } from "react";
import { LayoutContext } from "./LayoutContext";

interface DebugElementInterface {
  style?: { width: number; height: number; top: number; left: number };
  name?: string;
}

export const DebugElement: FunctionComponent<DebugElementInterface> = ({
  style: { width, height, top, left } = {},
  name = ""
}) => {
  const { setSelectedComponent, selectedComponent, layout } = useContext(
    LayoutContext
  );
  const selected = selectedComponent === name;
  return (
    <div
      style={{
        position: "absolute",
        background: selected ? "blue" : "#00000022",
        width,
        height,
        top,
        left,
        border: "1px solid #000",
        boxSizing: "border-box",
        fontSize: 12
      }}
      onClick={() => setSelectedComponent(name)}
      children={
        <>
          {name ? name : "pass name to debug"}
          <br />
          {`${width} * ${height}`}
        </>
      }
    ></div>
  );
};
