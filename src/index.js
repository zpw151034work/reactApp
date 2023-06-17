// /*
// 导入react和react-dom react-native用于app开发
// 通过react的api创建react元素 虚拟DOM
// 把虚拟DOM渲染到页面上去
// */
// import React from "react";
// import ReactDOM  from "react-dom";
// // const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');

// const element = React.createElement('div',{id:'demo',className:'aa'},'我是内容');
// console.log(element)

// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element,document.getElementById('root'))

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
// import React from "react";
// import ReactDOM from "react-dom";
// // const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');

// const element = React.createElement("ul", { className: "aa" }, [
//   React.createElement("li", null, "香蕉"),
//   React.createElement("li", null, "橘子"),
//   React.createElement("li", null, "葡萄"),
// ]);
// console.log(element);

// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element, document.getElementById("root"));

/*
  jsx语法 
 */

// import React from "react";
// import ReactDOM from "react-dom";
// // const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
// const loading = false;

// function render() {
//   return loading ? <div>数据加载中11</div> : <div>数据加载完成</div>;
// }

// const element = <div>{render()}</div>;
// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element, document.getElementById("root"));

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  jsx语法  list循环
 */

// import React from "react";
// import ReactDOM from "react-dom";
// // const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
// const list = [
//   { id: 1, name: "张鹏旺" },
//   { id: 2, name: "张鹏旺2" },
//   { id: 3, name: "张鹏旺3" },
// ];

// const element = (
//   <div>
//     <ul>
//       {list.map((item) => {
//         return (
//           <li key={item.id}>
//             <p>编号:{item.id}</p>
//             <p>姓名:{item.name}</p>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// );
// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element, document.getElementById("root"));

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  jsx语法   style控制样式

 */

// import React from "react";
// import ReactDOM from "react-dom";
// // const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
// const color = "red";
// const bgColor = "pink";

// const element = (
//   <div>
//     <h1 style={{ background: bgColor, width: 400, height: 400 }}>
//       通过style控制
//     </h1>
//     <p style={{ color }}>是金子总会放光</p>
//   </div>
// );
// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element, document.getElementById("root"));

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  jsx语法   className控制样式

 */

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// // const element = React.createElement('h1',{id:'box',title:'haha'},'我是内容');
// const isRed = true;
// const isPink = "pink";
// function classNames(obj) {
//   return Object.keys(obj)
//     .filter((key) => obj[key])
//     .join(" ");
// }
// const element = (
//   <div>
//     <h1
//       className={classNames({ box: true, red: isRed })}
//       style={{ width: 400, height: 400 }}
//     >
//       通过style控制
//     </h1>
//   </div>
// );
// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element, document.getElementById("root"));

/* class */

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   eat() {
//     console.log("吃");
//   }
// }
// class Dog extends Animal {
//   constructor(name, type) {
//     super(name, type);
//     this.legs = 4;
//   }
//   bark() {
//     console.log("汪汪");
//   }
// }
// const d = new Dog("小景", "金毛");

// console.log(d);
// console.log(d.bark());

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  类组件
 */

// import { Component } from "react";
// import ReactDOM from "react-dom";
// class Hello extends Component {
//   render() {
//     return <div>我是类组件 </div>;
//   }
// }
// const element = (
//   <div>
//     <ul>
//       <h1>类组件</h1>
//       <Hello></Hello>
//     </ul>
//   </div>
// );
// //参数1：渲染的reader
// //参数2： 需要渲染的页面
// ReactDOM.render(element, document.getElementById("root"));

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  受控组件
 */

/* 
导入react和react-dom react-native用于app开发
通过react的api创建react元素 虚拟DOM
把虚拟DOM渲染到页面上去
*/
/*
  受控组件
 */

// import { Component } from "react";
// import ReactDOM from "react-dom";
// class App extends Component {
//   state = {
//     msg: "hello",
//     desc: "sss",
//     agree: true,
//   };
//   render() {
//     return (
//       <div>
//         <h1>输入框</h1>
//         <input
//           name="msg"
//           type="text"
//           value={this.state.msg}
//           onChange={this.handleChange}
//         ></input>
//         <h1>文本域</h1>
//         <textarea
//           name="desc"
//           value={this.state.desc}
//           onChange={this.handleChange}
//           cols="30"
//           rows="10"
//         ></textarea>
//         <h1>checked</h1>
//         <input
//           name="agree"
//           type="checkbox"
//           checked={this.state.agree}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
//   handleChange = (e) => {
//     const { name, type, checked, value } = e.target;
//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };
// }

// ReactDOM.render(<App />, document.getElementById("root"));

/* 
  非受控组件
  ref的使用步骤
  1.通过React.createRef() 创建一个ref
  2.通过ref={this.textRef}关联给某个DOM对象

 */
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// class App extends Component {
//   txtRef = React.createRef();
//   render() {
//     return (
//       <div>
//         <h1>输入框</h1>
//         <input ref={this.txtRef} type="text"></input>
//         <button onClick={this.clickFn}>提交</button>
//       </div>
//     );
//   }
//   clickFn = (e) => {
//     console.log(this.txtRef.current.value);
//   };
// }
// ReactDOM.render(<App />, document.getElementById("root"));

/*
   子传父组件 
*/

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Child from "./components/son";
// class App extends Component {
//   state = {
//     wife: "",
//     sonWife: "",
//   };

//   render() {
//     return (
//       <div>
//         <h3>我是子组件</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="请输入配偶的名字"
//             value={this.state.wife}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>儿媳妇:{this.state.sonWife}</div>
//         <hr />
//         <Child wife={this.state.wife} changeName={this.changeName}></Child>
//       </div>
//     );
//   }
//   handleChange = (e) => {
//     this.setState({
//       wife: e.target.value,
//     });
//   };
//   changeName = (name) => {
//     console.log("接收到了", name);
//     this.setState({
//       sonWife: name,
//     });
//   };
// }

// ReactDOM.render(<App />, document.getElementById("root"));
/* 
 兄弟组件之间的传值
 */
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Jack from "./components/Jack";
// import Rose from "./components/Rose";
// class App extends Component {
//   state = {
//     msg: "",
//   };
//   render() {
//     return (
//       <div>
//         <h3>我是app组件</h3>
//         <Jack say={this.changeMsg}></Jack>
//         <Rose msg={this.state.msg}></Rose>
//       </div>
//     );
//   }
//   changeMsg = (msg) => {
//     console.log(msg);
//     this.setState({
//       msg,
//     });
//   };
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Father from "./components/Father";
// const { Provider, Consumer } = React.createContext();
// export { Consumer };
// class App extends Component {
//   state = {
//     color: "red",
//   };
//   render() {
//     return (
//       <Provider value={this.state.color}>
//         <div>
//           <h3>我是app组件</h3>
//           <Father></Father>
//         </div>
//       </Provider>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

/*
  router 
 */

// import React, { Component, PureComponent } from "react";
// import ReactDOM from "react-dom";

// //1.导入三个核心组件
// //link 导航链接
// // Router 指定路由规则
// // HashRouter
// import {
//   HashRouter,
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from "react-router-dom";
// import Home from "./components/Home";
// import My from "./components/My";
// import Friend from "./components/Friend";
// class App extends PureComponent {
//   render() {
//     return (
//       <Router>
//         <div>
//           <h3>我是app组件</h3>

//           <Link to="/home">首页</Link>
//           <Link to="/my">我的音乐</Link>
//           <Link to="/friend">我的朋友</Link>
//           <hr />

//           <Route path="/home" component={Home}></Route>
//           <Route path="/my" component={My}></Route>
//           <Route path="/friend" component={Friend}></Route>
//         </div>
//       </Router>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

/*
   render-prop
*/

// import React, { Component, PureComponent } from "react";
// import ReactDOM from "react-dom";
// import Cat from "./components/Cat";
// import Position from "./components/Position";
// import Mouse from "./components/Mouse";
// class App extends PureComponent {
//   render() {
//     return (
//       <div>
//         <h1>根组件</h1>
//         //render
//         {/* <Mouse render={(data) => <Cat></Cat>}></Mouse> */}
//         //children
//         <Mouse>{(data) => <Cat {...data}></Cat>}</Mouse>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

/*
   hooks  
 */
// import React, { Component, useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import Child from "./components/son";

// function App() {
//   const [count, setCount] = useState(0);

//   //渲染好了或者更新都可以
//   // 参数1：回调函数
//   // 参数2：数组，useffect的依赖项  没有就是没有依赖 []空数组时相当于componentDidMount
//   //

//   return (
//     <div>
//       <h3>我是根组件</h3>
//       <div>我点击了{count}</div>

//       <button onClick={() => setCount(count + 1)}>打豆豆</button>
//       {count < 5 ? <Childw count={count}></Childw> : "豆豆被打死了"}
//     </div>
//   );
// }

// function Childw({ count }) {
//   useEffect(() => {
//     let timer = window.setInterval(() => {
//       console.log("我是豆豆,别打我");
//     }, 1000);
//     // 返回的函数称为清理副作用的函数
//     // 这个函数会在组件销毁的时候执行
//     // 组件销毁和渲染时候都有清楚
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return (
//     <div>
//       <h3>我是子组件{count}</h3>
//     </div>
//   );
// }

// ReactDOM.render(<App></App>, document.getElementById("root"));

/* 
  userRef
 */
// import React, { Component, useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const inputRef = useRef(null);
//   const add = () => {
//     console.log(inputRef.current.value);
//   };

//   /*
//   1.使用useRef能够创建一个ref对象
//   const XXRef = useRef(null)
//   2.通过ref属性关联到某个人Dom对象上

//   */

//   return (
//     <div>
//       <h3>我是根组件</h3>

//       <input type="text" placeholder="请输入内容" ref={inputRef}></input>
//       <button onClick={add}>打豆豆</button>
//     </div>
//   );
// }

// ReactDOM.render(<App></App>, document.getElementById("root"));

/*
   useContext
 */
// import React, { Component, useState, useEffect, useContext } from "react";
// import ReactDOM from "react-dom";
// const Context = React.createContext();
// function App() {
//   const [count, setCount] = useState(0);

//   //渲染好了或者更新都可以
//   // 参数1：回调函数
//   // 参数2：数组，useffect的依赖项  没有就是没有依赖 []空数组时相当于componentDidMount
//   //

//   return (
//     <Context.Provider value={count}>
//       <div>
//         <h3>我是根组件</h3>
//         <div>我点击了{count}</div>

//         <button onClick={() => setCount(count + 1)}>打豆豆</button>
//         {count < 5 ? <Childw></Childw> : "豆豆被打死了"}
//       </div>
//     </Context.Provider>
//   );
// }

// function Childw({ c }) {
//   useEffect(() => {
//     let timer = window.setInterval(() => {
//       console.log("我是豆豆,别打我");
//     }, 1000);
//     // 返回的函数称为清理副作用的函数
//     // 这个函数会在组件销毁的时候执行
//     // 组件销毁和渲染时候都有清楚
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const count = useContext(Context);
//   return (
//     <div>
//       <h3>我是子组件{count}</h3>
//     </div>
//   );
// }

// ReactDOM.render(<App></App>, document.getElementById("root"));

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
function App() {
  const [list, setList] = useState(0);

  useEffect(() => {
    getList();
    console.log(true == 2);
  }, []);
  const getList = async () => {
    const res = await axios.get("http://localhost:8888/todos");
    console.log("res" + res);
  };
  return <div></div>;
}

ReactDOM.render(<App></App>, document.getElementById("root"));
