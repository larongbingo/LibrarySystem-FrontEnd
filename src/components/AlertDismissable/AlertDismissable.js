import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";

class AlertDismissable extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        if(this.state.show) {
            return (
                <Alert bsStyle={this.props.bsStyle} onDismiss={this.handleDismiss}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.message}</p>
                    <Button bsStyle={"info"} onClick={this.handleDismiss}>Hide Alert</Button>
                </Alert>
            )
        }

        return <span></span>
    }
}

export default AlertDismissable;