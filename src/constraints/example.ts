import { ConstraintLayout } from "./definition";

export const simpleBlock: ConstraintLayout = {
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
        distance: 32
      },
      {
        component: "parent",
        side: "bottom",
        distance: 32
      },
      {
        component: "parent",
        side: "left",
        distance: 32
      }
    ]
  }
};
