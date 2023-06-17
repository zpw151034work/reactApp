/*
   useContext
 */
import React, { Component, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
const Context = React.createContext();
function App() {
  const [count, setCount] = useState(0);

  //渲染好了或者更新都可以
  // 参数1：回调函数
  // 参数2：数组，useffect的依赖项  没有就是没有依赖 []空数组时相当于componentDidMount
  //

  return (
    <Context.Provider value={count}>
      <div>
        <h3>我是根组件</h3>
        <div>我点击了{count}</div>

        <button onClick={() => setCount(count + 1)}>打豆豆</button>
        {count < 5 ? <Childw></Childw> : "豆豆被打死了"}
      </div>
    </Context.Provider>
  );
}

function Childw({ c }) {
  useEffect(() => {
    let timer = window.setInterval(() => {
      console.log("我是豆豆,别打我");
    }, 1000);
    // 返回的函数称为清理副作用的函数
    // 这个函数会在组件销毁的时候执行
    // 组件销毁和渲染时候都有清楚
    return () => {
      clearInterval(timer);
    };
  }, []);

  const count = useContext(Context);
  return (
    <div>
      <h3>我是子组件{count}</h3>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
