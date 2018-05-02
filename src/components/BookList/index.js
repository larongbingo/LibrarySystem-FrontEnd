import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

// List of Books
class BookList extends Component {
    renderBookEntry(book) {
        return (
            <Link to={"/book/" + book.id}>
                <Row>
                    <Col>
                        <h3>{book.title}</h3>
                        <h5>{book.author}</h5>
                    </Col>
                </Row>
            </Link>
        )
    } 
    
    render() {
        console.log(this.props)
        if(this.props.books.length === 0) {
            return (
                <Grid>
                    <Row>
                        <Col>
                            <h4>No Books</h4>
                        </Col>
                    </Row>
                </Grid>
            )
        }

        return (
            <Grid>
                {this.props.books.map(this.renderBookEntry)}
            </Grid>
        )
    }
}

export default BookList;