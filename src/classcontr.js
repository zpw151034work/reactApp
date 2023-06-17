/* 
  受控组件封装
 */
import { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  state = {
    msg: "hello",
    desc: "sss",
    agree: true,
  };
  render() {
    return (
      <div>
        <h1>输入框</h1>
        <input
          name="msg"
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        ></input>
        <h1>文本域</h1>
        <textarea
          name="desc"
          value={this.state.desc}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <h1>checked</h1>
        <input
          name="agree"
          type="checkbox"
          checked={this.state.agree}
          onChange={this.handleChange}
        />
      </div>
    );
  }
  handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
