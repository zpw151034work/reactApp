import { Component } from "react";
export default class Child extends Component {
  state = {
    wife: "",
  };
  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <div>{this.props.wife}</div>
        <div>
          <input
            type="text"
            value={this.state.wife}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ wife: e.target.value });
    this.props.changeName(e.target.value);
  };
}
