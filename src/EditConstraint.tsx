import React, {
  useContext,
  FunctionComponent,
  useState,
  SyntheticEvent
} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { LayoutContext } from "./LayoutContext";
import {
  Select,
  MenuItem,
  InputLabel,
  DialogContentText
} from "@material-ui/core";
import { ConstraintDefinition, Side } from "./constraints/definition";

const ParentModal = ({ close }: { close: () => any }) => (
  <Dialog open={true} onClose={close} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">
      Parent Component can't have constraints
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Sorry but please select other component
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={close} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

interface EditingConstraintinterface {
  constraint: ConstraintDefinition;
  components: string[];
  close: () => any;
  save: (constraint: ConstraintDefinition) => any;
}

const EditingConstraint: FunctionComponent<EditingConstraintinterface> = ({
  constraint,
  components,
  close,
  save
}) => {
  const [finalConstraint, setFinalConstraint] = useState<ConstraintDefinition>(
    constraint
  );

  const onDistanceChange = (event: SyntheticEvent) => {
    event.persist();

    setFinalConstraint(constraint => ({
      ...constraint,
      distance: parseInt((event.target as HTMLInputElement).value)
    }));
  };

  const onComponentChange = (event: any) => {
    event.persist();

    setFinalConstraint(constraint => ({
      ...constraint,
      component: (event.target as HTMLInputElement).value
    }));
  };

  const onSideChange = (event: any) => {
    event.persist();

    setFinalConstraint(constraint => ({
      ...constraint,
      toSide: (event.target.value as keyof typeof Side)
    }));
  };

  return (
    <>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Distance"
          type="number"
          value={finalConstraint.distance}
          onChange={onDistanceChange}
          fullWidth
        />
        <InputLabel id="component-label" style={{ marginTop: 24 }}>
          To component
        </InputLabel>
        <Select
          margin="dense"
          id="component"
          labelId="component-label"
          value={finalConstraint.component}
          onChange={onComponentChange}
          fullWidth
        >
          <MenuItem value="parent">parent</MenuItem>
          {components.map(component => (
            <MenuItem key={component} value={component}>
              {component}
            </MenuItem>
          ))}
        </Select>
        <InputLabel id="side-label" style={{ marginTop: 24 }}>
          To side
        </InputLabel>
        <Select value={finalConstraint.toSide} onChange={onSideChange} margin="dense" id="side" labelId="side-label" fullWidth>
          <MenuItem value="top">Top</MenuItem>
          <MenuItem value="right">Right</MenuItem>
          <MenuItem value="bottom">Bottom</MenuItem>
          <MenuItem value="left">Left</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={close}>Delete</Button>
        <Button onClick={() => save(finalConstraint)} color="primary">
          Save
        </Button>
      </DialogActions>
    </>
  );
};

export const EditConstraint = () => {
  const {
    editConstraint,
    changeConstraint,
    setEditConstraint,
    selectedComponent,
    layout
  } = useContext(LayoutContext);
  const [isOpen, close] = [editConstraint !== "", () => setEditConstraint("")];
  const component = layout[selectedComponent];
  if (isOpen && !component) return <ParentModal close={close} />;
  if (!component) return null;

  const defaultConstraint: ConstraintDefinition = {
    component: "parent",
    fromSide: editConstraint as keyof typeof Side,
    toSide: editConstraint as keyof typeof Side,
    distance: 100
  };

  const findConstraint = component.constraints.find(
    constraint => constraint.fromSide === editConstraint
  );

  const constraint: ConstraintDefinition = findConstraint
    ? findConstraint
    : defaultConstraint;

  return (
    <Dialog open={isOpen} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{`Changing ${editConstraint} constraint for ${selectedComponent}`}</DialogTitle>
      <EditingConstraint
        constraint={constraint}
        components={Object.keys(layout).filter((component => component !== selectedComponent))}
        close={close}
        save={(constraint: ConstraintDefinition) => {
          changeConstraint(constraint);
          close();
        }}
      />
    </Dialog>
  );
};
