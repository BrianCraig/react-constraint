import React, { ReactElement, FunctionComponent } from "react";
import { LayoutDefinition, Side, ComponentInstance } from "./definition";
import { ParseLayout } from "./parser";
import { ResolveConstraints } from "./constraint";
import { findComponentByName } from "./util";

export interface LayoutComponent {
  width: number;
  height: number;
  [key: string]: React.ReactNode;
}

interface DebugElementInterface {
  style: { width: number; height: number; top: number; left: number };
}

export const DebugElement: FunctionComponent<DebugElementInterface> = ({
  style: { width, height, top, left }
}) => {
  return (
    <div
      style={{
        position: "absolute",
        background: "#00000022",
        width,
        height,
        top,
        left,
        border: "1px solid #000",
        boxSizing: "border-box",
        fontSize: 12
      }}
      children={
        <>
          {`PASS NAME TO DEBUG`}
          <br />
          {`${width} * ${height}`}
        </>
      }
    ></div>
  );
};

export const createLayoutComponent = (
  options: LayoutDefinition
): React.FunctionComponent<LayoutComponent> => ({
  width,
  height,
  ...components
}) => {
  const [componentsInstances, constraints] = ParseLayout(
    options,
    width,
    height
  );

  ResolveConstraints(constraints);

  const getComponent = ({ positions, name }: ComponentInstance) => {
    const width = (positions[Side.right] || 0) - (positions[Side.left] || 0);
    const height = (positions[Side.bottom] || 0) - (positions[Side.top] || 0);
    return React.cloneElement(components[name] as ReactElement, {
      style: {
        width,
        height,
        top: positions[Side.top],
        left: positions[Side.left]
      }
    });
  };

  return <div>{componentsInstances.map(getComponent)}</div>;
};
