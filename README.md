# React Constraint

React constraint is a package intended for Adding a Constraint based layout on React web apps, it is inspired by [Android Constraint Layout](https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout), it is currently on Pre-alpha state.

It is divided in the **Core** package, and the **Playground**, you can run the playground in [https://react-constraint-playground.now.sh](https://react-constraint-playground.now.sh).  


### Motivation

☑ Less Flexbox and Grid and more dynamic and atomic layout components.   
☑ It's just javascript, no css classes injected.  
☑ Easier to test with the playground.  
☑ Adapts easily to Design changes ands definitons. 
☑ Simpler for Web designers and developers.  

### Usage

```javascript
import * as React from "react";

import { createLayoutComponent } from "react-constraint";
import { appLayout } from "./layout"; // object/config generated from playground

const YourComponent = ({style}) => <div style={style}><p>MyComponent</p></div>

export default function App() {
  const Layout = createLayoutComponent(appLayout);
  return (
    <Layout
      width={1000}
      height={600}
      parent={<div />}
      Sidebar={
        <div style={{ backgroundColor: "#d8f7b0" }}>
          <p>Sidebar</p>
        </div>
      }
      Header={
        <div style={{ backgroundColor: "#d8f7b0" }}>
          <p>Header</p>
        </div>
      }
      Footer={
        <div style={{ backgroundColor: "#d8f7b0" }}>
          <p>Footer</p>
        </div>
      }
      Content={
        <YourComponent />
      }
    />
  );
}
```

Every screen or layout has all his information in a js config object 
Example usage working of [full Application layout on CodeSandbox](https://codesandbox.io/s/cool-sun-64hnr)

### Documentation

[Core](./packages/core/readme.md)  
[Changelog](./changelog.md)  