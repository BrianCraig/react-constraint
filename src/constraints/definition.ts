export type ConstraintSize = number;

export type ConstraintSide = "top" | "right" | "bottom" | "left";

export interface ConstraintDefinition {
  component: string;
  side: ConstraintSide;
  distance: ConstraintSize;
}

export interface ConstraintComponent {
  constraints: ConstraintDefinition[];
  width?: ConstraintSize;
  height?: ConstraintSize;
}

export interface ConstraintLayout {
  [key: string]: ConstraintComponent;
}
