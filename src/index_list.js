/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  jsx语法  list循环
 */

import React from "react";
import ReactDOM from "react-dom";
// const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
const list = [
  { id: 1, name: "张鹏旺" },
  { id: 2, name: "张鹏旺2" },
  { id: 3, name: "张鹏旺3" },
];

const element = (
  <>
    {/* 幽灵节点  另一种写法是<React.Fragment></React.Fragment>  class用className  for用htmlfor*/}
    <ul>
      {list.map((item) => {
        return (
          <li>
            <p>编号:{item.id}</p>
            <p>姓名:{item.name}</p>
          </li>
        );
      })}
    </ul>
  </>
);
//参数1：渲染的reader
//参数2： 需要渲染的页面
ReactDOM.render(element, document.getElementById("root"));
