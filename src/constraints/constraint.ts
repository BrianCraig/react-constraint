import { ConstraintInstance, ConstraintInstances } from "./definition";

export const ResolveConstraint = (constraint: ConstraintInstance): void => {
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

export const isConstraintResolved = (constraint: ConstraintInstance): Boolean =>
  constraint.resolved;

export const ResolveConstraints = (constraints: ConstraintInstances): void => {
  while (!constraints.every(isConstraintResolved)) {
    constraints.forEach(ResolveConstraint);
  }
};
