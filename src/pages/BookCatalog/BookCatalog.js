import React, { Component } from "react";
import { Grid, Row, Col, Well } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookSearchForm from "../../components/BookSearchForm/BookSearchForm";

class BookCatalog extends Component {
    state = {};

    componentDidMount() {
        let bookName = this.props.match.params.bookName;
        let url = (bookName) ? 
            'http://librarysystembackend.mybluemix.net/api/?query={Books(title:"' + bookName + '"){id title author}}' : 
            "http://librarysystembackend.mybluemix.net/api/?query={Books{id title author}}"

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
            <Link to={"/book/" + book.id}>
                <h4>{ book.title }</h4>
                <h5>{ book.author }</h5>
            </Link>
        )
    }

    render() {
        if(this.state.bookDetails) {
            console.log(this.state.bookDetails);
            return (
                <Grid>
                    <BookSearchForm value={this.props.match.params.bookName} />
                    <Row>
                        <Col xs={12}>
                            { this.state.bookDetails.map(this.renderBookDetails) }
                        </Col>
                    </Row>
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