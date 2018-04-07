import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookSearchForm from "../../components/BookSearchForm/BookSearchForm";

import QuestionMark from "./question-512.png";

class BookCatalog extends Component {
    state = {};

    componentDidMount() {
        let bookName = this.props.match.params.bookName;
        let url = (bookName) ? 
            'https://librarysystembackend.mybluemix.net/api/?query={Books(title:"' + bookName + '"){id title author}}' : 
            "https://librarysystembackend.mybluemix.net/api/?query={Books{id title author}}"

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            this.setState({bookDetails: response.data.Books});
        });
    }

    // Renders the details of the given book
    renderBookDetails(book) {
        return (
            // Add info if the book is reserved or borrowed
            <Row>
                <Link to={"/book/" + book.id}>
                    <Col md={2}>
                        <Image responsive src={QuestionMark} />
                    </Col>
                    <Col md={10}>
                        <h4>{book.title}</h4>
                        <h5>{book.author}</h5>
                    </Col>
                </Link>
            </Row>
        )
    }

    render() {
        if(this.state.bookDetails) {
            console.log(this.state.bookDetails);
            return (
                <Grid>
                    <BookSearchForm value={this.props.match.params.bookName} />
                    { this.state.bookDetails.map(this.renderBookDetails) }
                </Grid>
            )
        }

        // Render temporary component
        return (
            <Grid>
                <BookSearchForm value={this.props.match.params.bookName} />
                <Row>
                    <Col>
                        <h3>Loading...</h3>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default BookCatalog;