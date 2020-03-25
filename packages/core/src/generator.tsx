import React, { ReactElement } from "react";
import { LayoutDefinition, Side, ComponentInstance } from "./definition";
import { ParseLayout } from "./parser";
import { ResolveConstraints } from "./constraint";

export interface LayoutComponent {
  width: number;
  height: number;
  [key: string]: React.ReactNode;
}

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
        left: positions[Side.left],
        position: "absolute"
      },
      key: name
     });
  };

  return <div>{componentsInstances.map(getComponent)}</div>;
};
