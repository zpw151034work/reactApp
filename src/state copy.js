import React, { Component } from "react";
import ReactDOM from "react-dom";
import Father from "./components/father";
const { Provider, Consumer } = React.createContext();
class App extends Component {
  state = {
    msg: "",
  };
  render() {
    return (
      <Provider>
        <div>
          <h3>我是app组件</h3>
          <Father></Father>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
