/*
   子传父组件 
*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Child from "./components/son";
class App extends Component {
  state = {
    wife: "",
    sonWife: "",
  };

  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <div>
          <input
            type="text"
            placeholder="请输入配偶的名字"
            value={this.state.wife}
            onChange={this.handleChange}
          />
        </div>
        <div>儿媳妇:{this.state.sonWife}</div>
        <hr />
        <Child wife={this.state.wife} changeName={this.changeName}></Child>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({
      wife: e.target.value,
    });
  };
  changeName = (name) => {
    console.log("接收到了", name);
    this.setState({
      sonWife: name,
    });
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
