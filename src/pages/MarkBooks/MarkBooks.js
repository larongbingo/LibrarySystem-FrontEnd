import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    Form,
    Button,
    Grid,
    Row,
    Col, 
    Well
} from "react-bootstrap";
import BookList from "./BookList";

class MarkBooks extends Component {
    constructor(props, context) {
        super(props, context);

        this.fetchBooks = this.fetchBooks.bind(this);
        this.classifyBooksAndStore = this.classifyBooksAndStore.bind(this);

        this.state = {
            bookData: null,
            reservedBooks: [],
            borrowedBooks: [],
            availableBooks: []
        }
    }

    classifyBooksAndStore(book) {
        // Reserved Books only have Id and not borrowed
        if(!book.isBorrowed && book.userId) {
            this.state.reservedBooks.push(book);
        }

        // Borrowed Books have both id and borrwed
        else if(book.isBorrowed && book.userId) {
            this.state.borrowedBooks.push(book);
        }

        // Available Books have neither of the two
        else if(!book.isBorrowed && !book.userId) {
            this.state.availableBooks.push(book);
        }
    }

    fetchBooks() {
        let url = `https://librarysystembackend.mybluemix.net/api/?query={Books{id title author isBorrowed userId}}`;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            res.data.Books.map(this.classifyBooksAndStore);
            this.setState({bookData: res.data.Books});
            console.log(res.data.Books);
        });
    }

    componentDidMount() {
        this.fetchBooks();
    }

    render() {

        // Should display the list of reserved books
        // Should display the list of borrowed books
        // Should display the list of available books (not reserved and not borrowed)
        if(this.state.bookData) {
            return (
                <Grid>
                    <Row>
                        <Col>
                            <h3>Reserved Books</h3>
                            <Well>
                                <BookList books={this.state.reservedBooks} />
                            </Well>

                            <br />

                            <h3>Borrowed Books</h3>
                            <Well>
                                <BookList books={this.state.borrowedBooks} />
                            </Well>

                            <br />

                            <h3>Available Books</h3>
                            <Well>
                                <BookList books={this.state.availableBooks} />
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            )
        }

        return (
            <Grid>
                <Row>
                    <Col>
                        <h3>Loading...</h3>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default MarkBooks;