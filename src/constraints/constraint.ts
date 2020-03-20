import { ConstraintInstance, ConstraintInstances, RelativeConstraintInstance, WidthConstraintInstance, Side, HeightConstraintInstance } from "./definition";

const ResolveRelativeConstraint = (constraint: RelativeConstraintInstance): void => {
  const {
    fromInstance,
    fromSide,
    toInstance,
    toSide,
    distance,
    resolved
  } = constraint;
  if (resolved) return;
  const instancePosition = toInstance.positions[toSide];
  if (instancePosition !== undefined) {
    fromInstance.positions[fromSide] = instancePosition + distance;
    constraint.resolved = Boolean(true);
  }
};

const ResolveWidthConstraint = (constraint: WidthConstraintInstance): void => {
  const {
    instance,
    width,
    resolved
  } = constraint;
  if (resolved) return;
  if (instance.positions[Side.left] !== undefined) {
    instance.positions[Side.right] = instance.positions[Side.left]! + width
    constraint.resolved = Boolean(true);
  } else if (instance.positions[Side.right] !== undefined) {
    instance.positions[Side.left] = instance.positions[Side.right]! - width
    constraint.resolved = Boolean(true);
  };
};


const ResolveHeightConstraint = (constraint: HeightConstraintInstance): void => {
  const {
    instance,
    height,
    resolved
  } = constraint;
  if (resolved) return;
  if (instance.positions[Side.top] !== undefined) {
    instance.positions[Side.bottom] = instance.positions[Side.top]! + height
    constraint.resolved = Boolean(true);
  } else if (instance.positions[Side.bottom] !== undefined) {
    instance.positions[Side.top] = instance.positions[Side.bottom]! - height
    constraint.resolved = Boolean(true);
  };
};


export const ResolveConstraint = (constraint: ConstraintInstance): void => {
  if (constraint.resolved) return;
  const keys = Object.keys(constraint)
  if (keys.includes("distance")) {
    ResolveRelativeConstraint(constraint as RelativeConstraintInstance)
  } else if (keys.includes("width")) {
    ResolveWidthConstraint(constraint as WidthConstraintInstance)
  } else if (keys.includes("height")) {
    ResolveHeightConstraint(constraint as HeightConstraintInstance)
  }
};

export const isConstraintResolved = (constraint: ConstraintInstance): Boolean =>
  constraint.resolved;

export const ResolveConstraints = (constraints: ConstraintInstances): void => {
  while (!constraints.every(isConstraintResolved)) {
    constraints.forEach(ResolveConstraint);
  }
};
