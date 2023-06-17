import React, { Component } from "react";

export default class jack extends Component {
  render() {
    return (
      <div>
        <h1>我是jack</h1>
        <button onClick={this.say}>说</button>
      </div>
    );
  }
  say = () => {
    this.props.say("我是jck");
    console.log("jack点击");
  };
}
