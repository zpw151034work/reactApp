/*
   render-prop
*/

import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import Cat from "./components/Cat";
import Position from "./components/Position";
import Mouse from "./components/Mouse";
class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>根组件</h1>
        {/* //render */}
        {/* <Mouse render={(data) => <Cat></Cat>}></Mouse> */}
        {/* //children */}
        <Mouse>{(data) => <Cat {...data}></Cat>}</Mouse>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
