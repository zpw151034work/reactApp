/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
import React from "react";
import ReactDOM from "react-dom";
// const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');

const element = React.createElement("ul", [
  React.createElement("li", null, "香蕉"),
  React.createElement("li", null, "香蕉"),
  React.createElement("li", null, "香蕉"),
]);
console.log(element);

//参数1：渲染的reader
//参数2： 需要渲染的页面
ReactDOM.render(element, document.getElementById("root"));
