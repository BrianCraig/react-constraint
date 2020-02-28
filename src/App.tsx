import React from "react";
import "./App.css";
import { createLayoutComponent } from "./constraints/generator";
import { vertices } from "./examples/vertices";
import { Layout } from "./Layout";

const codeStyle: React.CSSProperties = {
  width: "50vw",
  height: "100vh",
  padding: "10px",
  boxSizing: "border-box",
  position: "absolute",
  whiteSpace: "pre-wrap"
};

const viewStyle: React.CSSProperties = {
  width: "50vw",
  height: "100vh",
  padding: "10px",
  boxSizing: "border-box",
  position: "absolute",
  left: "50%"
};

const Comp = createLayoutComponent(vertices);

const App: React.FC = () => {
  return (
    <>
      <div style={viewStyle}>
        <Comp width={400} height={400} Block={<p>Hola</p>} />
      </div>
    </>
  );
};

export default Layout;
