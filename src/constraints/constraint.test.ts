import { ResolveConstraint, ResolveConstraints } from "./constraint";
import { ComponentInstance, Side, ConstraintInstance, WidthConstraint } from "./definition";

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

  test("a full constrainted Component", () => {
    const testedComponent = NewComponent("nameX");
    const parent = ParentComponent();
    const constraintTop: ConstraintInstance = {
      fromInstance: testedComponent,
      fromSide: Side.top,
      toInstance: parent,
      toSide: Side.top,
      resolved: Boolean(false),
      distance: 10
    };

    const constraintRight = {
      ...constraintTop,
      fromSide: Side.right,
      toSide: Side.right,
      distance: -10
    };

    const constraintBottom = {
      ...constraintTop,
      fromSide: Side.bottom,
      toSide: Side.bottom,
      distance: -10
    };

    const constraintLeft = {
      ...constraintTop,
      fromSide: Side.left,
      toSide: Side.left,
      distance: 10
    };

    ResolveConstraints([
      constraintTop,
      constraintRight,
      constraintBottom,
      constraintLeft
    ]);

    expect(testedComponent.positions).toStrictEqual({
      [Side.top]: 10,
      [Side.right]: 90,
      [Side.bottom]: 90,
      [Side.left]: 10
    });
  });

  test("a simple width constraint", () => {
    const testedComponent = NewComponent("nameX");
    const parent = ParentComponent();
    const constraintLeft: ConstraintInstance = {
      fromInstance: testedComponent,
      toInstance: parent,
      resolved: Boolean(false),
      fromSide: Side.left,
      toSide: Side.left,
      distance: 10
    };

    const widthConstraint: WidthConstraint = {
      instance: testedComponent,
      resolved: Boolean(false),
      width: 80
    };


    ResolveConstraints([
      constraintLeft,
      widthConstraint
    ]);

    expect(testedComponent.positions).toStrictEqual({
      [Side.right]: 90,
      [Side.left]: 10
    });
  });
});
