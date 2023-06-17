/*
   hooks  
 */
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(1000);
  //渲染好了或者更新都可以
  // 参数1：回调函数
  // 参数2：数组，useffect的依赖项  没有就是没有依赖 []空数组时相当于componentDidMount
  //
  useEffect(() => {
    document.title = `我的title${count}`;
    console.log("dddd");
  }, [count]);
  return (
    <div>
      <h3>我是根组件</h3>
      <div>我点击了{count}</div>
      <div>我点击了{money}</div>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setMoney(money + 100)}>加钱</button>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
