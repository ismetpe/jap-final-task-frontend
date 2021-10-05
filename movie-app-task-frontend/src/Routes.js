import { Switch, Route } from "react-router-dom";
import Login from "../src/components/Login/Login"
import Register from "../src/components/Register/Register"
import Home from "../src/components/Home/Home"
export default function Routes() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}