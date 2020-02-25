import { LayoutDefinition } from "./definition";

export const simpleBlock: LayoutDefinition = {
  Block: {
    constraints: [
      {
        component: "parent",
        side: "top",
        distance: 32
      },
      {
        component: "parent",
        side: "right",
        distance: -32
      },
      {
        component: "parent",
        side: "bottom",
        distance: -32
      },
      {
        component: "parent",
        side: "left",
        distance: 32
      }
    ]
  }
};
