import { Definitions } from "react-constraint";

export const appLayout: Definitions.LayoutDefinition = {
  Sidebar: {
    width: 32 * 4,
    constraints: [
      {
        component: "parent",
        fromSide: "top",
        toSide: "top",
        distance: 32
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
  },
  Header: {
    height: 32 * 2,
    constraints: [
      {
        component: "parent",
        fromSide: "top",
        toSide: "top",
        distance: 32
      },
      {
        component: "Sidebar",
        fromSide: "left",
        toSide: "right",
        distance: 32
      },
      {
        component: "parent",
        fromSide: "right",
        toSide: "right",
        distance: -32
      }
    ]
  },
  Footer: {
    height: 32,
    constraints: [
      {
        component: "parent",
        fromSide: "bottom",
        toSide: "bottom",
        distance: -32
      },
      {
        component: "Sidebar",
        fromSide: "left",
        toSide: "right",
        distance: 32
      },
      {
        component: "parent",
        fromSide: "right",
        toSide: "right",
        distance: -32
      }
    ]
  },
  Content: {
    constraints: [
      {
        component: "Header",
        fromSide: "top",
        toSide: "bottom",
        distance: 32
      },
      {
        component: "Footer",
        fromSide: "bottom",
        toSide: "top",
        distance: -32
      },
      {
        component: "Sidebar",
        fromSide: "left",
        toSide: "right",
        distance: 32
      },
      {
        component: "parent",
        fromSide: "right",
        toSide: "right",
        distance: -32
      }
    ]
  }
};
