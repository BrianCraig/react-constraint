import React, { useContext, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@material-ui/core";
import { LayoutContext } from "./LayoutContext";

export const AddConstraint = () => {
  const { addingComponent, toggleAddingComponent, addComponent } = useContext(LayoutContext);
  const [name, setName] = useState<string>("")
  const close=() =>{
    toggleAddingComponent()
    setName("")
  }
  const save=() =>{
    addComponent(name)
    close()
  }

  return (
    <Dialog open={addingComponent} onClose={toggleAddingComponent}>
      <DialogTitle>
        Add a new Component
    </DialogTitle>
      <DialogContent>
        <TextField value={name} onChange={(event) => setName(event.currentTarget.value)} label="Component Name" />
      </DialogContent>
      <DialogActions>
      <Button onClick={close}>
          Cancel
      </Button>
      <Button onClick={save} color="primary">
          Add
      </Button>
      </DialogActions>
    </Dialog>
  )
};