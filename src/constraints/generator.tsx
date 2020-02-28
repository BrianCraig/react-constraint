import React from "react";
import { LayoutDefinition, Side, ComponentInstance } from "./definition";
import { ParseLayout } from "./parser";
import { ResolveConstraints } from "./constraint";

export interface LayoutComponent {
  width: number;
  height: number;
  [key: string]: React.ReactNode;
}

const ComponentToNode = ({ positions, name }: ComponentInstance) => {
  const width = (positions[Side.right] || 0) - (positions[Side.left] || 0);
  const height = (positions[Side.bottom] || 0) - (positions[Side.top] || 0);
  return (
    <div
      style={{
        position: "absolute",
        top: positions[Side.top],
        left: positions[Side.left],
        background: "#00000022",
        width: width,
        height: height,
        border: "1px solid #000",
        boxSizing: "border-box",
        fontSize: 12
      }}
      children={
        <>
          {`${name}`}
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

  return <div>{componentsInstances.map(ComponentToNode)}</div>;
};
