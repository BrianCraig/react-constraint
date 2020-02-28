import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { createLayoutComponent } from "./constraints/generator";
import { vertices } from "./examples/vertices";

const Comp = createLayoutComponent(vertices);

const F = "";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B20 30%, #FF8E5320 90%)",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  leftBlock: {
    width: 192,
    padding: 16,
    background: "#ffffff",
    height: "calc(100vh - 32px)",
    borderRight: "1px solid #00000030",
    position: "absolute"
  },
  centerBlock: {
    position: "absolute",
    left: 300,
    top: 16
  },
  titleBox: {
    height: 32,
    marginBottom: 32,
    background: F
  },
  componentNameBox: {
    height: 16,
    marginBottom: 12,
    background: F
  },
  title: {
    fontSize: 24,
    fontWeight: 100
  },
  componentName: {
    fontSize: 14,
    fontWeight: 300,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  bold: {
    fontWeight: 500
  }
});

export const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.leftBlock}>
        <div className={classes.titleBox}>
          <Typography component="h1" className={classes.title}>
            Components
          </Typography>
        </div>
        <div className={classes.componentNameBox}>
          <Typography component="h1" className={classes.componentName}>
            HeaderXStyleB
          </Typography>
        </div>
        <div className={classes.componentNameBox}>
          <Typography component="h1" className={classes.componentName}>
            HeaderXStyleBasd
          </Typography>
        </div>
        <div className={classes.componentNameBox}>
          <Typography
            component="h1"
            className={`${classes.componentName} ${classes.bold}`}
          >
            AJGS
          </Typography>
        </div>
        <div className={classes.componentNameBox}>
          <Typography component="h1" className={classes.componentName}>
            SuperLargeTextXDXDXDXDXDXDXDXXDXDXD
          </Typography>
        </div>
      </div>
      <div className={classes.centerBlock}>
        <Comp width={400} height={400} />
      </div>
    </div>
  );
};
