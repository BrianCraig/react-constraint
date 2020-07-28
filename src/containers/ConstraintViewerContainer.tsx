import React from 'react';
import { makeStyles, ButtonGroup, Button, Grid, Typography, TextField } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import { Definitions, createLayoutComponent } from 'react-constraint';

const lines = () => `
  repeating-linear-gradient(
    180deg,
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.3) 1px,
    transparent 0px,
    transparent 19px
  ),
  repeating-linear-gradient(
    90deg,
    rgba(0,0,0,0.3),
    rgba(0,0,0,0.3) 1px,
    transparent 0px,
    transparent 19px
  )
`;

const distance = 32;

const createButton = (componentBottom: string): Definitions.ComponentDefinition => ({
  width: 180,
  height: 48,
  constraints: [
    { component: 'parent', fromSide: 'right', toSide: 'right', distance: -distance },
    { component: componentBottom, fromSide: 'bottom', toSide: 'bottom', distance: -distance + (componentBottom === 'parent' ? 0 : -48) }
  ]
})


const ConstraitViewerLayout: Definitions.LayoutDefinition = {
  Full: {
    constraints: [
      { component: 'parent', fromSide: 'left', toSide: 'left', distance: 0 },
      { component: 'parent', fromSide: 'top', toSide: 'top', distance: 0 },
      { component: 'parent', fromSide: 'right', toSide: 'right', distance: 0 },
      { component: 'parent', fromSide: 'bottom', toSide: 'bottom', distance: 0 }
    ]
  },
  Zoom: createButton('parent'),
  Height: createButton('Zoom'),
  Width: createButton('Height')
};


const useStyles = makeStyles((theme) => ({
  parent: {
    backgroundImage: lines(),
    width: 400,
    height: 600,
    border: `4px dashed ${theme.palette.primary.light}`,
    boxSizing: "border-box"
  },
  component: {
    background: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[2]
  },
  zoomButtons: {
    height: 40,
    marginTop: 8,
    width: 160
  },
  sizeInputs: {
    width: 160
  }
}));

interface numberWithHeight {
  width: number,
  height: number
}

export const ConstraintViewerContainer: React.FunctionComponent<{ style?: React.CSSProperties, className?: string }> = ({ style = {}, className }) => {
  const classes = useStyles();
  const { width, height } = style as numberWithHeight;
  const Layout = createLayoutComponent(ConstraitViewerLayout);
  return (
    <div style={style} className={className}>
      <Layout
        width={width}
        height={height}
        parent={<div />}
        Full={<div>
          <div className={classes.parent}>
            <div className={classes.component} />
          </div>
        </div>}
        Zoom={
          <ButtonGroup variant="outlined" className={classes.zoomButtons}>
            <Button><ZoomOutIcon /></Button>
            <Button>100%</Button>
            <Button><ZoomInIcon /></Button>
          </ButtonGroup>
        }
        Width={
          <TextField className={classes.sizeInputs} id="width" label="Width" size="small" margin="dense" variant="outlined" />
        }
        Height={
          <TextField className={classes.sizeInputs} id="height" label="Height" size="small" margin="dense" variant="outlined" />
        }
      />
    </div>
  );
};

// 48 de altura