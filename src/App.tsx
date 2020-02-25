import React from "react";
import "./App.css";
import { simpleBlock } from "./constraints/example";
import { createLayoutComponent } from "./constraints/generator";

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

const Comp = createLayoutComponent(simpleBlock);

const App: React.FC = () => {
  return (
    <>
      <div style={codeStyle} contentEditable>
        {JSON.stringify(simpleBlock, null, 2)}
      </div>
      <div style={viewStyle}>
        <Comp width={400} height={400} Block={<p>Hola</p>} />
      </div>
    </>
  );
};

export default App;
