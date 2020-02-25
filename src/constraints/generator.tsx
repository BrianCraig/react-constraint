import React from "react";
import { LayoutDefinition, ComponentDefinition, Side } from "./definition";

export interface LayoutComponent {
  width: number;
  height: number;
  [key: string]: React.ReactNode;
}

export class LayoutInstance {
  private layoutInstanceList: LayoutInstance[];
  private name: string;
  private constraint: ComponentDefinition;
  private resolvedPositions: { [key in Side]?: number } = {};

  constructor(
    layoutInstanceList: LayoutInstance[],
    name: string,
    constraint: ComponentDefinition
  ) {
    this.layoutInstanceList = layoutInstanceList;
    this.name = name;
    this.constraint = constraint;
  }

  isThis = (name: string) => name === this.name;

  resolve = (side: Side, position: number) =>
    (this.resolvedPositions[side] = position);

  isResolved = () => false;

  toNode = () => (
    <div
      style={{
        position: "absolute",
        background: "#fafafa33",
        width: this.constraint.width,
        height: this.constraint.height,
        ...this.resolvedPositions
      }}
    />
  );
}

export const createLayoutComponent = (
  options: LayoutDefinition
): React.FunctionComponent<LayoutComponent> => ({
  width,
  height,
  ...components
}) => {
  const layoutInstanceList: LayoutInstance[] = [];
  const parent = new LayoutInstance(layoutInstanceList, "parent", {
    height,
    width,
    constraints: []
  });

  parent.resolve(Side.top, 0);
  parent.resolve(Side.right, width);
  parent.resolve(Side.bottom, height);
  parent.resolve(Side.left, 0);

  layoutInstanceList.push(parent);

  for (const [name, constraint] of Object.entries(options)) {
    layoutInstanceList.push(
      new LayoutInstance(layoutInstanceList, name, constraint)
    );
  }

  return <div>{layoutInstanceList.map(instance => instance.toNode())}</div>;
};
