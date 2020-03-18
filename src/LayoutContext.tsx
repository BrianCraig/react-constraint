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
import { appLayout } from "./examples/appLayout";


export interface LayoutContextInterface {
  layout: LayoutDefinition;
  addComponent: (name: string) => void;
  addingComponent: boolean;
  toggleAddingComponent: () => void;
  changeConstraint: (constraint: ConstraintDefinition) => void;
  selectedComponent: string;
  setSelectedComponent: Dispatch<SetStateAction<string>>;
  editConstraint: string;
  setEditConstraint: Dispatch<SetStateAction<string>>;
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
  const [layout, setLayout] = useState<LayoutDefinition>(appLayout);
  const [addingComponent, setAddingComponent] = useState<boolean>(false)
  const [selectedComponent, setSelectedComponent] = useState<string>("");
  const [editConstraint, setEditConstraint] = useState<string>("");
  const addComponent = (name: string) =>
    setLayout(props => ({
      ...props,
      [name]: { constraints: defaultConstraints }
    }));
  const changeConstraint = (constraint: ConstraintDefinition) =>
    setLayout(layout => {
      const originalConstraints = layout[selectedComponent].constraints;
      const constraints = [
        ...originalConstraints.filter(
          item => item.fromSide !== constraint.fromSide
        ),
        constraint
      ];
      return {
        ...layout,
        [selectedComponent]: {
          ...layout[selectedComponent],
          constraints
        }
      };
    });

  return (
    <LayoutContext.Provider
      value={{
        layout,
        addComponent,
        addingComponent,
        toggleAddingComponent: () => setAddingComponent(!addingComponent),
        changeConstraint,
        selectedComponent,
        setSelectedComponent,
        editConstraint,
        setEditConstraint
      }}
      children={children}
    />
  );
};
