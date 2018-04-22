import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

// *121#

class BookStats extends Component {
    state = {
        stats: null
    };

    componentDidMount() {
        fetch(`https://librarysystembackend.mybluemix.net/api?query={BookViews{id views_count borrows_count returns_count reserves_count unreserves_count}}`)
        .then(res => res.json())
        .then(res => this.setState({stats: res.data.BookViews}));
    }

    renderBookViewCounters(bookView) {
        return (
            <Row>
                <Col>
                    <h3>id: {bookView.id}</h3>
                    <h4>Views Count: {bookView.views_count}</h4>
                    <h4>Borrows Count: {bookView.borrows_count}</h4>
                    <h4>Returns Count: {bookView.returns_count}</h4>
                    <h4>Reserves Count: {bookView.reserves_count}</h4>
                    <h4>Unreseres Count: {bookView.unreserves_count}</h4>
                </Col>
            </Row>
        )
    }

    render() {
        if(this.state.stats) {
            return (
                <Grid>
                    { this.state.stats.map(this.renderBookViewCounters) }
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

export default BookStats;