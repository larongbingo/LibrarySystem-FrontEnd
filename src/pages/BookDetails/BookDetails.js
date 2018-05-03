import React, { Component } from "react";
import { 
    Grid, 
    Row, 
    Col, 
    Image,
    Button
} from "react-bootstrap";

import QuestionMark from "./question-512.png";

class BookDetails extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            bookId: this.props.match.params.bookId
        };

        this.onReserveButtonClick = this.onReserveButtonClick.bind(this);
        this.onBorrowButtonClick = this.onBorrowButtonClick.bind(this);
        this.onReturnButtonClick = this.onReturnButtonClick.bind(this);
        this.onCancelReservationButtonClick = this.onCancelReservationButtonClick.bind(this);

        fetch(`https://librarysystembackend.mybluemix.net/api?query=mutation+{updateViewCounter(bookId:${this.state.bookId})}`, {method: "POST"})
    }

    componentDidMount() {
        let url = `https://librarysystembackend.mybluemix.net/api?query={Books(id:${this.state.bookId}){id title author ISBN isBorrowed userId}}`;
        fetch(url, {mode: "cors"})
        .then(response => response.json())
        .then(data => {
            this.setState({bookDetails: data.data.Books[0]})
        });
    }

    checkToken() {
        return localStorage.getItem("hash");
    }

    checkPosition() {
        return localStorage.getItem("position");
    }

    checkID() {
        return localStorage.getItem("id");
    }

    onReserveButtonClick() {
        let url = `https://librarysystembackend.mybluemix.net/api?query=mutation+{reserveBook(bookId:${this.state.bookId},token:"${this.checkToken()}")}`;
        fetch(url, {method: "POST"})
        .then(res => res.json())
        .then(res => {
            console.log(res);

            if(res.data.reserveBook.success) {
                window.location.replace("/message/reserveSuccess");
                return;
            }

            window.location.replace("/message/reserveFailed");
        })
    }

    onCancelReservationButtonClick() {
        let url = `https://librarysystembackend.mybluemix.net/api?query=mutation+{unreserveBook(bookId:${this.state.bookId},token:"${this.checkToken()}")}`;
        fetch(url, {method: "POST"})
        .then(res => res.json())
        .then(res => window.location.replace(`/book/${this.state.bookId}`))
    }

    onBorrowButtonClick() {
        // Go to MarkBooks/:id
        window.location.replace(`/borrowBook/${this.state.bookId}`);
        return;
    }

    onReturnButtonClick() {
        window.location.replace(`/returnBook/${this.state.bookId}`);
        return;
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
                                
                                {
                                    // TODO: Cleanup the blocks
                                    // Reserve book
                                    this.checkToken() ? 
                                    (
                                        !book.userId ? 
                                        <Button
                                            bsStyle="success"
                                            onClick={this.onReserveButtonClick} 
                                        >Reserve</Button> :
                                        (
                                            !book.isBorrowed ?
                                            ( 
                                                // Cancellation of Reservation
                                                Number(this.checkID()) === book.userId ? 
                                                <Button onClick={this.onCancelReservationButtonClick}>Cancel Reserve</Button> : 
                                                "Book is currently reserved"
                                            ) :
                                            ""
                                        )
                                    ) :
                                    <p>Log In to reserve book</p>
                                }
                                <br />
                                {
                                    // Borrow Book
                                    this.checkToken() && (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ? 
                                    (   
                                        !book.isBorrowed ? 
                                        <Button onClick={this.onBorrowButtonClick}>Mark as Borrowed</Button> : // TODO: Build this as a Button
                                        "Book is already borrowed to user " + book.userId // Book is borrowed
                                    ) :
                                    "" // Has no token or not an admin or staff
                                }
                                <br />
                                {
                                    // Return Book
                                    this.checkToken() && (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                                    (
                                        book.isBorrowed && book.userId ? 
                                        <Button onClick={this.onReturnButtonClick}>Mark as Returned</Button> :
                                        ""
                                    ) :
                                    ""
                                }
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