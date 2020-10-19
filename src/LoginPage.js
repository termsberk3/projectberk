import React from 'react';
import './LoginStyle.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { BrowserRouter as Router, Route, Switch, Link, RouteComponentProps } from "react-router-dom";
import Forgot from "./Dashboard/ForgotPassword";
import MainPage from "./Dashboard/MainPage";

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = () => {
    return (
        <div className="Login">
            <header className="Login-header">
                <FormControl className="form">
                    <InputLabel htmlFor="my-input">Admin ID</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl  className="form">
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" type={"password"} aria-describedby="my-helper-text" />
                </FormControl>
                <br/>
                <Router>
                    <div id="container">
                        <div>
                            <FormHelperText id="my-helper-text"> <Link to="/MainPage">Login</Link> </FormHelperText>
                        </div>
                        <Switch>
                            <Route exact path="/ForgotPassword" component={Forgot} />
                            <Route exact path="/MainPage" component={MainPage} />
                        </Switch>
                    </div>
                </Router>
                <Router>
                    <div id="container">
                        <div>
                            <FormHelperText id="my-helper-text">Forgot your password? you can click <Link to="/ForgotPassword">here</Link> </FormHelperText>
                        </div>
                        <Switch>
                            <Route exact path="/ForgotPassword" component={Forgot} />
                            <Route exact path="/MainPage" component={MainPage} />
                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );

}

export default Login;