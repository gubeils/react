import React from 'react'  //创建元素标签 createElement
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Login from './pages/login/index.jsx'
// import Layout from './pages/layout/index.jsx'
import { Spin } from 'antd'; 
import './App.css';
import FrontendAuth from './FrontendAuth.js';


const App = function () {
  return (
    <div className="App">
      <BrowserRouter>
        <Spin size="large" className="loading" spinning={false} />
        <Switch>
          <Redirect exact={true} from="/" to="/login"></Redirect>
          {/* <Route path="/login" component={Login}></Route>
           */}
           
          <FrontendAuth/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App

