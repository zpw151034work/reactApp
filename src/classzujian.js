/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  类组件
 */

import { Component } from "react";
import ReactDOM from "react-dom";
class Hello extends Component {
  render() {
    return <div>我是类组件 </div>;
  }
}
const element = (
  <div>
    <ul>
      <h1>类组件</h1>
      <Hello></Hello>
    </ul>
  </div>
);
//参数1：渲染的reader
//参数2： 需要渲染的页面
ReactDOM.render(element, document.getElementById("root"));
