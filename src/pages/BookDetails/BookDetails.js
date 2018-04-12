import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";

import QuestionMark from "./question-512.png";

class BookDetails extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            bookId: this.props.match.params.bookId
        };

        fetch(`https://librarysystembackend.mybluemix.net/api?query=mutation+{updateViewCounter(bookId:${this.state.bookId})}`, {method: "POST"})
    }

    componentDidMount() {
        let url = 'https://librarysystembackend.mybluemix.net/api?query={Books(id:' + this.state.bookId + '){id title author ISBN isBorrowed userId}}';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({bookDetails: data.data.Books[0]})
        });
    }

    render() {
        if(this.state.bookDetails) {
            let book = this.state.bookDetails;
            return (
                <Grid>
                    <Row>
                        <Col md={4}>
                            <Image responsive src={QuestionMark} />
                        </Col>
                        <Col md={8}>
                            <div>
                                <h3>Title: {book.title}</h3>
                                <h3>Author: {book.author}</h3>
                                <h4>ISBN: {book.ISBN}</h4>
                                <h4>Borrowed: { (book.isBorrowed) ? "Yes" : "No" }</h4>
                                <h4>Reserved: { (book.userId) ? "Yes" : "No" }</h4>
                                <p>Reserve buttons coming soon...</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )
        }

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Loading...</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default BookDetails;