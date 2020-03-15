import { ConstraintInstance, ConstraintInstances, RelativeConstraintInstance, WidthConstraintInstance, Side } from "./definition";

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
  }
};

export const isConstraintResolved = (constraint: ConstraintInstance): Boolean =>
  constraint.resolved;

export const ResolveConstraints = (constraints: ConstraintInstances): void => {
  while (!constraints.every(isConstraintResolved)) {
    constraints.forEach(ResolveConstraint);
  }
};
