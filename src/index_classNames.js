/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  jsx语法   className控制样式

 */

import React from "react";
import ReactDOM from "react-dom";
// const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
const isRed = "red";
const isPink = "pink";
function classNames(obj) {
  obj.keys(obj).filter((key) => obj[key].join(""));
}
const element = (
  <div>
    <h1 className={classNames({ box: true, red: isRed })}>通过style控制</h1>
  </div>
);
//参数1：渲染的reader
//参数2： 需要渲染的页面
ReactDOM.render(element, document.getElementById("root"));
