import React, {
  createContext,
  FunctionComponent,
  Context,
  useState,
  Dispatch,
  SetStateAction
} from "react";
import {
  LayoutDefinition,
  ConstraintDefinition
} from "./constraints/definition";

export interface LayoutContextInterface {
  layout: LayoutDefinition;
  addComponent: (name: string) => void;
  selectedComponent: string;
  setSelectedComponent: Dispatch<SetStateAction<string>>;
}

export const LayoutContext: Context<LayoutContextInterface> = createContext(
  null as any
);

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
  const [selectedComponent, setSelectedComponent] = useState<string>("");
  const addComponent = (name: string) =>
    setLayout(props => ({
      ...props,
      [name]: { constraints: defaultConstraints }
    }));
  return (
    <LayoutContext.Provider
      value={{ layout, addComponent, selectedComponent, setSelectedComponent }}
      children={children}
    />
  );
};
