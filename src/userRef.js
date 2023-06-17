/* 
  userRef
 */
import React, { Component, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const inputRef = useRef(null);
  const add = () => {
    console.log(inputRef.current.value);
  };

  /* 
  1.使用useRef能够创建一个ref对象
  const XXRef = useRef(null)
  2.通过ref属性关联到某个人Dom对象上
  
  */

  return (
    <div>
      <h3>我是根组件</h3>

      <input type="text" placeholder="请输入内容" ref={inputRef}></input>
      <button onClick={add}>打豆豆</button>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
