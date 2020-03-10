import React, { FunctionComponent, useContext } from "react";
import { LayoutContext } from "./LayoutContext";
import { DebugBorders } from "./DebugBorders";

interface DebugElementInterface {
  style?: { width: number; height: number; top: number; left: number };
  name?: string;
}

export const DebugElement: FunctionComponent<DebugElementInterface> = ({
  style: { width, height, top, left } = {},
  name = ""
}) => {
  const {
    setSelectedComponent,
    selectedComponent,
    setEditConstraint
  } = useContext(LayoutContext);
  const selected = selectedComponent === name;
  return (
    <div
      style={{
        position: "absolute",
        background: selected ? "#00000040" : "#00000022",
        width,
        height,
        top,
        left,
        boxSizing: "border-box",
        fontSize: 12
      }}
      onClick={() => setSelectedComponent(name)}
      children={
        <>
          {name ? name : "pass name to debug"}
          <br />
          {`${width} * ${height}`}
          {selected && (
            <div style={{ position: "absolute", top: -4, left: -4 }}>
              <DebugBorders
                width={width ? width : 100}
                height={height ? height : 100}
                onTop={() => setEditConstraint("top")}
                onRight={() => setEditConstraint("right")}
                onBottom={() => setEditConstraint("bottom")}
                onLeft={() => setEditConstraint("left")}
              />
            </div>
          )}
        </>
      }
    ></div>
  );
};
