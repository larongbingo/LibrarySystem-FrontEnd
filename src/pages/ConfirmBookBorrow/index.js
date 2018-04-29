import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";
import QuestionMarkImage from "./question-512.png";

class ConfirmBookBorrow extends Component {
    constructor(props, context) {
        super(props, context);

        console.log(this.props);

        this.onYesClick = this.onYesClick.bind(this);

        this.state = {
            data: null,
            userId: this.props.match.params.userId,
            bookId: this.props.match.params.bookId
        }
    }

    componentDidMount() {
        let url = `http://librarysystembackend.mybluemix.net/api?query={Books(id:${this.state.userId}){title author} Users(id:${this.state.bookId}){firstName lastName}}`;
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({data: res.data}))
    }

    onYesClick() {
        let url = `http://librarysystembackend.mybluemix.net/api?query=mutation+{borrowBook(
            userId:${this.state.userId},
            bookId:${this.state.bookId},
            token:"${localStorage.getItem("hash")}",
            transactionRemark: "user ${this.state.userId} borrows book ${this.state.bookId}"
        )}`;

        fetch(url, {method: "POST"})
        .then(res => res.json())
        .then(res => {
            console.log(res);
            console.log(url);

            if(res.data.borrowBook.success) {
                //window.location.replace("/message/borrowSuccess");
                return;
            }

            //window.location.replace("/message/borrowFailed");
        })
    }

    onNoClick() {
        window.location.replace("/");
    }

    render() {
        if(this.state.data) {
            return (
                <Grid>
                    <Row>
                        <Col smOffset={2} sm={4}>
                            <Image responsive src={QuestionMarkImage} />
                            <h3>{this.state.data.Books[0].title}</h3>
                            <h4>{this.state.data.Books[0].author}</h4>
                        </Col>
                        <Col sm={4}>
                            <Image responsive src={QuestionMarkImage} />
                            <h3>{this.state.data.Users[0].lastName}, {this.state.data.Users[0].firstName}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col smOffset={2} sm={6}>
                            <h5>Let user {this.state.data.Users[0].lastName} borrow the book {this.state.data.Books[0].title}?</h5>
                            <Button onClick={this.onYesClick} bsStyle="success">Yes</Button>
                            <span> </span>
                            <Button onClick={this.onNoClick} bsStyle="warning">No</Button> 
                        </Col>
                    </Row>
                </Grid>
            )
        }

        return (
            <Grid>
                <Row>
                    <Col>
                        <h2>Loading...</h2>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default ConfirmBookBorrow;