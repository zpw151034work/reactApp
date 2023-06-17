import React, { Component } from "react";
import { Consumer } from "../index";
export default class sun extends Component {
  render() {
    return (
      <div>
        <Consumer>{(value) => <h6>{value}</h6>}</Consumer>
      </div>
    );
  }
}
