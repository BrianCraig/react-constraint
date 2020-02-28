import React, {
  createContext,
  FunctionComponent,
  Context,
  useState
} from "react";
import {
  LayoutDefinition,
  ConstraintDefinition
} from "./constraints/definition";

export interface LayoutContextInterface {
  layout: LayoutDefinition;
  addComponent: (name: string) => void;
}

export const LayoutContext: Context<LayoutContextInterface> = createContext({
  layout: {},
  addComponent: name => {}
});

const defaultConstraints: ConstraintDefinition[] = [
  {
    component: "parent",
    fromSide: "top",
    toSide: "top",
    distance: 64
  },
  {
    component: "parent",
    fromSide: "right",
    toSide: "right",
    distance: -64
  },
  {
    component: "parent",
    fromSide: "bottom",
    toSide: "bottom",
    distance: -64
  },
  {
    component: "parent",
    fromSide: "left",
    toSide: "left",
    distance: 64
  }
];

export const LayoutProvider: FunctionComponent = ({ children }) => {
  const [layout, setLayout] = useState<LayoutDefinition>({});
  const addComponent = (name: string) =>
    setLayout(props => ({
      ...props,
      [name]: { constraints: defaultConstraints }
    }));
  return (
    <LayoutContext.Provider
      value={{ layout, addComponent }}
      children={children}
    />
  );
};
