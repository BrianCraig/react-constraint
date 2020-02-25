import { ResolveConstraint } from "./constraint";
import { ComponentInstance, Side, ConstraintInstance } from "./definition";

const ParentComponent = (): ComponentInstance => ({
  name: "parent",
  positions: {
    [Side.top]: 0,
    [Side.right]: 100,
    [Side.bottom]: 100,
    [Side.left]: 0
  }
});

const NewComponent = (name: string, positions = {}): ComponentInstance => ({
  name,
  positions
});

describe("constraint resolving tests", () => {
  test("a resolved constraint doesn't do anything", () => {
    const testedComponent = NewComponent("nameX");
    const constraint: ConstraintInstance = {
      fromInstance: testedComponent,
      fromSide: Side.top,
      toInstance: ParentComponent(),
      toSide: Side.top,
      resolved: Boolean(true),
      distance: 10
    };
    ResolveConstraint(constraint);
    expect(constraint.resolved).toBe(Boolean(true));
    expect(testedComponent.positions[Side.top]).toBe(undefined);
  });

  test("a simple constraint from parent", () => {
    const testedComponent = NewComponent("nameX");
    const constraint: ConstraintInstance = {
      fromInstance: testedComponent,
      fromSide: Side.top,
      toInstance: ParentComponent(),
      toSide: Side.top,
      resolved: Boolean(false),
      distance: 10
    };
    ResolveConstraint(constraint);
    expect(constraint.resolved).toBe(Boolean(true));
    expect(testedComponent.positions[Side.top]).toBe(10);
  });
});
