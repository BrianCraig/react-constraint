import { Definitions } from "react-constraint";

export const simpleBlock: Definitions.LayoutDefinition = {
  Block: {
    constraints: [
      {
        component: "parent",
        fromSide: "top",
        toSide: "top",
        distance: 32
      },
      {
        component: "parent",
        fromSide: "right",
        toSide: "right",
        distance: -32
      },
      {
        component: "parent",
        fromSide: "bottom",
        toSide: "bottom",
        distance: -32
      },
      {
        component: "parent",
        fromSide: "left",
        toSide: "left",
        distance: 32
      }
    ]
  }
};
