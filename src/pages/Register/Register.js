import React, { Component } from "react";
import { 
    ControlLabel,
    FormControl, 
    FormGroup,
    Button,
    Form,
    Grid,
    Col
} from "react-bootstrap";

import "./Register_Styles.css";

class Register extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSchoolIDChange = this.handleSchoolIDChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            schoolID: "",
            username: "",
            password: ""
        }
    }

    handleEnterKeyPress(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            console.log(this.state.username);
            let url = "https://librarysystembackend.mybluemix.net/api"
            fetch(`${url}?query=mutation+{addUser(firstName:"${this.state.firstName}",lastName:"${this.state.lastName}",userID:"${this.state.schoolID}",username:"${this.state.username}",password:"${this.state.password}")}`, {method: "POST"})
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
            })
        }
    }

    handleFirstNameChange(e) {
        this.setState({firstName: e.target.value});
    }

    handleLastNameChange(e) {
        this.setState({lastName: e.target.value});
    }

    handleSchoolIDChange(e) {
        this.setState({schoolID: e.target.value});
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    
    // TODO: ADD VALIDATION ON EMPTY FIELDS

    render() {
        return (
            <Grid className="padding-form">
                <Form horizontal onKeyPress={this.handleEnterKeyPress}>
                    <FormGroup controlId="firstName">
                        <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                        <Col sm={10}>
                            <FormControl 
                                type="text"
                                placeholder="John" 
                                onChange={this.handleFirstNameChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="lastName">
                        <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                        <Col sm={10}>
                            <FormControl 
                                type="text" 
                                placeholder="Doe"
                                onChange={this.handleLastNameChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="schoolID">
                        <Col componentClass={ControlLabel} sm={2}>School ID</Col>
                        <Col sm={10}>
                            <FormControl 
                                type="text" 
                                placeholder="2018xxxxx"
                                onChange={this.handleSchoolIDChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="username">
                        <Col componentClass={ControlLabel} sm={2}>Username</Col>
                        <Col sm={10}>
                            <FormControl 
                                type="text"
                                placeholder="Username" 
                                onChange={this.handleUsernameChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Col componentClass={ControlLabel} sm={2}>Password</Col>
                        <Col sm={10}>
                            <FormControl 
                                type="password" 
                                placeholder="Password"
                                onChange={this.handlePasswordChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        )
    }
}

export default Register;