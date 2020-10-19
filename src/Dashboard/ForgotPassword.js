import React, { Component } from "react";
import './ForgotStyle.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";

class Forgot extends Component {
    render() {
    return (
        <div className="Forgot">
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <FormHelperText id="my-helper-text">If your e-mail is in our system, we will send you the link </FormHelperText>
                </FormControl>
                <br/>
                <Button
                    style={{
                        backgroundColor:"#797980" ,
                        fontSize: "18px",
                        color:"#FCFCFC"
                    }}
                    variant="text"
                    raised
                >
                    Request Password
                </Button>
        </div>
    );
    }
}

export default Forgot;