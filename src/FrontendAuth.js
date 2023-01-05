import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from './pages/layout/index.jsx'
import Login from './pages/login/index.jsx'
// config
import RouterConfig from "./RouterConfig";

class FrontendAuth extends React.Component {
  render() {
    const pathname = this.props.location.pathname;
    const targetRouter = RouterConfig.find(function (item) {
      return item.path === pathname;
    });
    const isLogin = localStorage.getItem("token") ? true : false;
    //

    if (pathname === "/") {
      return <Redirect to="login"></Redirect>;
    }

    // if (!targetRouter) {
    //   return <Redirect to="404" />;
    // }
    if (isLogin) {
      console.log("isLogin");
      return (
        <>
          <Redirect to="/layout"></Redirect>
          <Route path="/layout" component={Layout}></Route>
        </>
      );
    } else {
      console.log("notLogin");
      return (
        <>
          <Redirect to="/login" />
          <Route path="/login" component={Login}></Route>
          {/* <Route exact path={pathname} component={targetRouter.component} /> */}
        </>
      );
    }
  }
}

export default FrontendAuth;
