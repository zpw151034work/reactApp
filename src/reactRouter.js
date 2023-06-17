router 
*/

import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";

//1.导入三个核心组件
//link 导航链接
// Router 指定路由规则
// HashRouter
import {
 HashRouter,
 BrowserRouter as Router,
 Route,
 Link,
} from "react-router-dom";
import Home from "./components/Home";
import My from "./components/My";
import Friend from "./components/Friend";
class App extends PureComponent {
 render() {
   return (
     <Router>
       <div>
         <h3>我是app组件</h3>

         <Link to="/home">首页</Link>
         <Link to="/my">我的音乐</Link>
         <Link to="/friend">我的朋友</Link>
         <hr />

         <Route path="/home" component={Home}></Route>
         <Route path="/my" component={My}></Route>
         <Route path="/friend" component={Friend}></Route>
       </div>
     </Router>
   );
 }
}

ReactDOM.render(<App />, document.getElementById("root"));

