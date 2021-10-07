import { Switch, Route } from "react-router-dom";
import Login from "../src/components/Login/Login"
import Register from "../src/components/Register/Register"
import Home from "../src/components/Home/Home"
import Admin from "../src/components/Admin/Admin"
import User from "../src/components/User/User"
export default function Routes() {
  return (
    <Switch>
      <Route path="/register">
    <Register/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/user">
          <User/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}