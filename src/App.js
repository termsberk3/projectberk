import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forgot from "./Dashboard/ForgotPassword";
import MainPage from "./Dashboard/MainPage";
import AddGroup from "./Dashboard/AddGroup";
import LoginPage from "./LoginPage";

function App(){
        return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path={"/"}
                            render={props => (
                                <LoginPage
                                    {...props}

                                />
                            )}
                        />
                        <Route
                            exact
                            path={"/MainPage"}
                            render={props => (
                                <MainPage
                                    {...props}
                                />
                            )}
                        />
                        <Route path="/ForgotPassword" exact component={Forgot} />
                        <Route path="/AddGroup" exact component={AddGroup} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
}

export default App