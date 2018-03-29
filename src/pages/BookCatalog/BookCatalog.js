import React, { Component } from "react";
import BookSearchForm from "../../components/BookSearchForm/BookSearchForm";
import { Grid, Row, Col } from "react-bootstrap";

class BookCatalog extends Component {
    state = {};

    componentWillMount() {
        let bookName = this.props.match.params.bookName;
        let url = (bookName) ? 
            'http://librarysystembackend.mybluemix.net/api/?query={Books(title:"' + bookName + '"){id title author}}' : 
            "http://librarysystembackend.mybluemix.net/api/?query={Books{id title author}}"

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then((response) => {
            this.setState({bookDetails: response.data});
        })
        setTimeout(() => {}, 100);
    }

    render() {
        let bookName = this.props.match.params.bookName;
        console.log(this.state.bookDetails);
        return (
            <Grid>
                <BookSearchForm />
                <Row>
                    <Col>
                        <h1>
                            { (bookName) ? bookName : "This is the book catalog page" }
                        </h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default BookCatalog;