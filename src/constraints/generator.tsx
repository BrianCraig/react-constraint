import React from "react";
import { LayoutDefinition, Side, ComponentInstance } from "./definition";
import { ParseLayout } from "./parser";
import { ResolveConstraints } from "./constraint";

export interface LayoutComponent {
  width: number;
  height: number;
  [key: string]: React.ReactNode;
}

const ComponentToNode = ({ positions, name }: ComponentInstance) => (
  <div
    style={{
      position: "absolute",
      top: positions[Side.top],
      left: positions[Side.left],
      background: "#00000022",
      width: (positions[Side.right] || 0) - (positions[Side.left] || 0),
      height: (positions[Side.bottom] || 0) - (positions[Side.top] || 0)
    }}
    children={name}
  ></div>
);

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
