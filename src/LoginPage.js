import React, { useState } from 'react';
import './LoginStyle.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";



const LoginPage  = () => {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'asd@asd',
            password: 'asd123'
        }

        if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            history.push('/MainPage');
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }
    return(
        <div  className="Login">
            <header className="Login-header">
                <form  onSubmit={handleLoginSubmit}>
                <FormControl  className="form">
                    <InputLabel htmlFor="my-input">E-mail</InputLabel>
                    <Input type="email"
                           name="email"
                           placeholder="Email"
                           value={emailInput}
                           onChange={handleEmailChange}
                           required id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                    <br/>
                <FormControl  className="form">
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password"
                           name="password"
                           value={passwordInput}
                           onChange={handlePasswordChange}
                           placeholder="Password"
                           required id="my-input"  aria-describedby="my-helper-text" />
                </FormControl>
                    <br/>
                    <Button type="submit" className="button"> Login  </Button>
                </form>
                <br/>

                    <div id="container">
                        <div>
                            <FormHelperText id="my-helper-text">Forgot your password? you can click <a href={"/ForgotPassword"}>here</a> </FormHelperText>
                        </div>
                    </div>
            </header>
        </div>
    )
}

export default LoginPage;