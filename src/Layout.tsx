import React, { useContext, FunctionComponent, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { createLayoutComponent } from "./constraints/generator";
import { LayoutContext, LayoutProvider } from "./LayoutContext";
import { DebugElement } from "./DebugComponent";

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

const ComponentList: FunctionComponent<{ box: string; item: string }> = ({
  box,
  item
}) => {
  const { layout, addComponent } = useContext(LayoutContext);

  return (
    <>
      {Object.keys(layout).map(name => (
        <div className={box}>
          <Typography component="h1" className={item}>
            {name}
          </Typography>
        </div>
      ))}
      <Typography
        onClick={() =>
          addComponent(
            [...Array(10)]
              .map(i => (~~(Math.random() * 36)).toString(36))
              .join("")
          )
        }
      >
        Add component
      </Typography>
    </>
  );
};

const ComponentView = () => {
  const { layout } = useContext(LayoutContext);
  const Comp = createLayoutComponent(layout);
  const props: { [key: string]: ReactNode } = {};
  Object.keys(layout).forEach(name => {
    props[name] = <DebugElement name={name} />;
  });
  return (
    <Comp
      width={400}
      height={400}
      parent={<DebugElement name={"parent"} />}
      {...props}
    />
  );
};

export const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <LayoutProvider>
      <div className={classes.root}>
        <div className={classes.leftBlock}>
          <div className={classes.titleBox}>
            <Typography component="h1" className={classes.title}>
              Components
            </Typography>
          </div>
          <ComponentList
            box={classes.componentNameBox}
            item={classes.componentName}
          />
        </div>
        <div className={classes.centerBlock}>
          <ComponentView />
        </div>
      </div>
    </LayoutProvider>
  );
};
