import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";
import BookSearchForm from "../../components/BookSearchForm/BookSearchForm";

class Homepage extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Jumbotron>
                            <h1>CvSU - Imus Library Web Portal</h1>
                            <p>
                                An application to allow our students to access our available books
                                and thesis titles.
                            </p>
                            <br />
                            <p>
                                <BookSearchForm />
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Homepage;