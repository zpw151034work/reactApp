/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  jsx语法   style控制样式

 */

import React from "react";
import ReactDOM from "react-dom";
// const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
const color = "red";
const bgColor = "pink";

const element = (
  <div>
    <h1 style={{ background: bgColor, width: 400, height: 400 }}>
      通过style控制
    </h1>
    <p style={{ color }}>是金子总会放光</p>
  </div>
);
//参数1：渲染的reader
//参数2： 需要渲染的页面
ReactDOM.render(element, document.getElementById("root"));
