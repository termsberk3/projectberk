import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./LoginPage";
import Forgot from "./Dashboard/ForgotPassword";
import MainPage from "./Dashboard/MainPage";
import AddGroup from "./Dashboard/AddGroup";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/ForgotPassword" exact component={Forgot} />
          <Route path="/MainPage" exact component={MainPage} />
          <Route path="/AddGroup" exact component={AddGroup} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;