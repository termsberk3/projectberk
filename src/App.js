import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./LoginPage";
import Forgot from "./Dashboard/ForgotPassword";
import MainPage from "./Dashboard/MainPage";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Dashboard" exact component={Forgot} />
          <Route path="/Dashboard" exact component={MainPage} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;