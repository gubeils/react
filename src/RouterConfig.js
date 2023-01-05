import Login from "./pages/login";
import layout from "./pages/layout";
import error from "./pages/error";



const RouterConfig = [
  {
    path: "/login",
    component: Login,
    auth: false
  },
  {
    path: "/layout",
    component: layout,
    auth: true
  },
  {
    path: "/layout/userlist",
    component: layout,
    auth: true
  },
  {
    path: "/404",
    component: error,
    auth: false
  }
];

export default RouterConfig;