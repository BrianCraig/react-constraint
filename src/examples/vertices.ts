import { LayoutDefinition } from "../constraints/definition";

export const vertices: LayoutDefinition = {
  Center: {
    constraints: [
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
    ]
  },
  BottomLeft: {
    constraints: [
      {
        component: "Center",
        fromSide: "top",
        toSide: "bottom",
        distance: -32
      },
      {
        component: "Center",
        fromSide: "right",
        toSide: "left",
        distance: 32
      },
      {
        component: "Center",
        fromSide: "bottom",
        toSide: "bottom",
        distance: 32
      },
      {
        component: "Center",
        fromSide: "left",
        toSide: "left",
        distance: -32
      }
    ]
  }
};
