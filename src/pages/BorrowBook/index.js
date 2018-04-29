import React, { Component } from "react";
import {
    Grid, 
    Row,
    Col,
    Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionMarkImage from "./question-512.png";
import "./styles.css";

class BorrowBook extends Component {
    constructor(props, context) {
        super(props, context);

        this.renderUser = this.renderUser.bind(this);

        this.state = {
            data: null,
            bookId: this.props.match.params.bookId
        }
    }

    componentDidMount() {
        let url = `https://librarysystembackend.mybluemix.net/api?query={Books(id:${this.state.bookId}){title author} Users{id userID firstName lastName}}`;
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({data: res.data}));
    }

    renderUser(user) {
        return (
            <Link to={`/confirmBorrow/${user.id}/${this.state.bookId}`}>
                <Row className="entry">
                    <Col xs={2}>
                        <Image responsive src={QuestionMarkImage} />
                    </Col>
                    <Col xs={10}>
                        <h4>{user.lastName}, {user.firstName}</h4>
                        <h5>{user.id}</h5>
                    </Col>
                </Row>
            </Link>
        )
    }

    render() {
        {
            // Should display if the book is reserved

            // Expected Props
            // id of the book
            // list of students
        }

        if(this.state.data) {
            return (
                <Grid>
                    <Row>
                        <Col sm={3}>
                            {/* Book Details */}
                            <Image src={QuestionMarkImage} responsive />
                            <h3>Title: {this.state.data.Books[0].title}</h3>
                            <h5>Author: {this.state.data.Books[0].author}</h5>
                        </Col>
                        <Col sm={9}>
                            {/* Student List */}
                            <Grid>
                                {this.state.data.Users.map(this.renderUser)}
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            )
        } 

        return (
            <Grid>
                <Row>
                    <Col>
                        <h1>Loading...</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default BorrowBook;