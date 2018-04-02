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
                <Grid>
                    <Row>
                        <Col mdOffset={2} md={8} xs={12}>
                            <Form>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl 
                                    type="text"
                                    value={this.state.username}
                                    placeholder="Username"
                                    onChange={this.handleUsernameChange}
                                />

                                <ControlLabel>Password</ControlLabel>
                                <FormControl 
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handlePasswordChange}
                                />
                                <Button bsStyle="success">Log In</Button>
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