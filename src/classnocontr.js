/* 
  非受控组件
  ref的使用步骤
  1.通过React.createRef() 创建一个ref
  2.通过ref={this.textRef}关联给某个DOM对象

 */
import { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  txtRef = React.createRef();
  render() {
    return (
      <div>
        <h1>输入框</h1>
        <input
          ref={this.txtRef}
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.clickFn}></button>
      </div>
    );
  }
  clickFn = (e) => {
    console.log(this.textRef.current);
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
