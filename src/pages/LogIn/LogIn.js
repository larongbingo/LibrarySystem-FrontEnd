import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
    Form, 
    FormControl, 
    ControlLabel,
    Button,
    Grid,
    Row,
    Col
} from "react-bootstrap";
import AlertDismissable from "../../components/AlertDismissable/AlertDismissable";

class AppLogin extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogInButtonClick = this.handleLogInButtonClick.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);

        this.state = {
            username: "",
            password: "",
            showAlert: false
        };
    }    
    
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    } 

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleLogInButtonClick(e) {
        this.sendLogInRequest(this.state.username, this.state.password);
    }

    handleEnterKeyPress(e) {
        if(e.key === "Enter") {
            this.sendLogInRequest(this.state.username, this.state.password);
        }
    }

    sendLogInRequest(username, password) {
        console.log("login");

        // Send the request
        fetch(`https://librarysystembackend.mybluemix.net/api?query=mutation+{logIn(username: "${this.state.username}", password: "${this.state.password}")}`, {method: "POST"})
        .then(response => {
            return response.json();
        })
        .then(response => {
            // if the request sends a success
            if(response.data.logIn.success) {
                // Store the hash
                localStorage.setItem("hash", response.data.logIn.data.token);

                // Store the position
                localStorage.setItem("position", response.data.logIn.data.position);

                // Redirect to homepage
                window.location.replace("/");
            }
            else {
                // Show a closable alert about invalid creds
                this.setState({showAlert: true});
            }
        })
    }

    render() {
        return (
            <div>
                <Grid>
                    { // Shows an alert if the given credentials is invalid
                        (this.state.showAlert) ? 
                            <Row>
                                <Col mdOffset={2} md={8}>
                                    <AlertDismissable 
                                        bsStyle={"danger"} 
                                        title={"Invalid Credentials"} 
                                        message={"Please check your username or password. Please go to your admin to restore password."} 
                                    />
                                </Col>
                            </Row> 
                            : ""
                    }
                    <Row>
                        <Col mdOffset={2} md={8} xs={12}>
                            <Form>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl 
                                    type="text"
                                    value={this.state.username}
                                    placeholder="Username"
                                    onChange={this.handleUsernameChange}
                                    onKeyPress={this.handleEnterKeyPress}
                                />

                                <ControlLabel>Password</ControlLabel>
                                <FormControl 
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handlePasswordChange}
                                    onKeyPress={this.handleEnterKeyPress}
                                />
                                <Button 
                                    bsStyle="success"
                                    onClick={this.handleLogInButtonClick}
                                >Log In</Button>
                            </Form>
                            <Link to="/register">Don't have an account? Register with your School ID</Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default AppLogin;