import React, { Component } from "react";
import { 
    Grid,
    Row,
    Col,
    Button
} from "react-bootstrap";

class MessagePage extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <h3>{this.props.message}</h3>
                    <Button href={this.props.href}>Ok</Button>
                </Col>
            </Row>
        )
    }
}

class Message extends Component {
    render() {
        console.log(this.props.match.params.event);

        return (
            <Grid>
                {
                    this.props.match.params.event === "uploadSuccess" ?
                    <MessagePage message="File successfully uploaded" href="/" /> :
                    ""
                }

                {
                    this.props.match.params.event === "uploadFailed" ?
                    <MessagePage message="File failed to upload, please try again." href="/" /> :
                    ""
                }

                {
                    this.props.match.params.event === "reserveSuccess" ?
                    <MessagePage message="Book successfully reserved" href="/" /> :
                    ""
                }

                {
                    this.props.match.params.event === "reserveFailed" ?
                    <MessagePage message="Book failed to be reserved, try again later" href="/" /> :
                    ""
                }

                {
                    this.props.match.params.event === "borrowSuccess" ?
                    <MessagePage message="Book successfully borrowed" href="/" /> : ""
                }

                {
                    this.props.match.params.event === "borrowFailed" ?
                    <MessagePage message="Book failed to be borrowed" href="/" /> : ""
                }

                {
                    this.props.match.params.event === "returnSuccess" ?
                    <MessagePage message="Book successfully marked as returned" href="/" /> : ""
                }

                {
                    this.props.match.params.event === "returnFailed" ?
                    <MessagePage message="Book failed to be marked as returned" href="/" /> : ""
                }
            </Grid>
        )
    }
}

export default Message;