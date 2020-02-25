import { ComponentInstances } from "./definition";

export const findComponentByName = (
  components: ComponentInstances,
  name: string
) => {
  const component = components.find(component => component.name === name);
  if (component) {
    return component;
  }
  throw new Error("Unexpectedly Component not Found");
};
