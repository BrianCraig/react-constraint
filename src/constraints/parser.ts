import {
  LayoutDefinition,
  ConstraintInstances,
  ComponentInstances,
  Side
} from "./definition";
import { findComponentByName } from "./util";

export const ParseLayout = (
  layout: LayoutDefinition,
  width: number,
  height: number
): [ComponentInstances, ConstraintInstances] => {
  const components: ComponentInstances = [];
  const constraints: ConstraintInstances = [];

  components.push({
    name: "parent",
    positions: {
      [Side.top]: 0,
      [Side.right]: width,
      [Side.bottom]: height,
      [Side.left]: 0
    }
  });

  for (const [name, component] of Object.entries(layout)) {
    components.push({ name, positions: {} });
  }

  for (const [name, component] of Object.entries(layout)) {
    component.constraints.forEach(({ component, distance, fromSide, toSide }) =>
      constraints.push({
        fromInstance: findComponentByName(components, name),
        fromSide: Side[fromSide],
        toInstance: findComponentByName(components, component),
        toSide: Side[toSide],
        distance,
        resolved: Boolean(false)
      })
    );
  }

  return [components, constraints];
};
