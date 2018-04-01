import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AppLogin extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: "",
            password: ""
        };

        console.log(props);
    }    
    
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    } 

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <Form>
                    <FormControl 
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleUsernameChange}
                    />
                    <FormControl 
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handlePasswordChange}
                    />
                    <Button>Log In</Button>
                </Form>
                <Link to="/register">Don't have an account? Register with your School ID</Link>
            </div>
        )
    }
}

export default AppLogin;