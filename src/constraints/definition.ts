export type ConstraintSize = number;

export enum Side {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left"
}


export interface ConstraintDefinition {
  component: string;
  fromSide: keyof typeof Side;
  toSide: keyof typeof Side;
  distance: ConstraintSize;
}

export interface ComponentDefinition {
  constraints: ConstraintDefinition[];
  width?: ConstraintSize;
  height?: ConstraintSize;
}

export interface LayoutDefinition {
  [key: string]: ComponentDefinition;
}

export interface ComponentInstance {
  name: string;
  positions: { [key in Side]?: number };
}

export type ComponentInstances = ComponentInstance[];

export interface WidthConstraintInstance {
  instance: ComponentInstance;
  resolved: Boolean;
  width: number;
};

export interface HeightConstraintInstance {
  instance: ComponentInstance;
  resolved: Boolean;
  height: number;
};

export interface RelativeConstraintInstance {
  fromInstance: ComponentInstance;
  fromSide: Side;
  toInstance: ComponentInstance;
  toSide: Side;
  distance: ConstraintSize;
  resolved: Boolean;
}

export type ConstraintInstance = RelativeConstraintInstance | WidthConstraintInstance | HeightConstraintInstance

export type ConstraintInstances = ConstraintInstance[];
