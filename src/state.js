import React, { Component } from "react";
import ReactDOM from "react-dom";
import Jack from "./components/Jack";
import Rose from "./components/Rose";
class App extends Component {
  state = {
    msg: "",
  };
  render() {
    return (
      <div>
        <h3>我是app组件</h3>
        <Jack say={this.changeMsg}></Jack>
        <Rose msg={this.state.msg}></Rose>
      </div>
    );
  }
  changeMsg = (msg) => {
    console.log(msg);
    this.setState({
      msg,
    });
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
