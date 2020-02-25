import { LayoutInstance } from "./generator";
import { Side, ConstraintSize, ConstraintInstance } from "./definition";

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
};
