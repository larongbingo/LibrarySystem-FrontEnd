import React, {Component} from "react";
import { 
    Grid,
    Row,
    Col, 
    Image,
    Button
} from "react-bootstrap";
import QuestionMarkImage from "./question-512.png";

class ReturnBook extends Component {
    constructor(props, context) {
        super(props, context);

        this.onYesButtonClick = this.onYesButtonClick.bind(this);
        this.onNoButtonClick = this.onNoButtonClick.bind(this);

        this.state = {
            bookData: null,
            bookId: this.props.match.params.bookId
        }
    }

    componentDidMount() {
        let url = `https://librarysystembackend.mybluemix.net/api?query={Books(id:${this.state.bookId}){title author user{id firstName lastName}}}`;
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({bookData: res.data.Books}));
    }

    onYesButtonClick() {
        fetch(`https://librarysystembackend.mybluemix.net/api?query=mutation+{
            returnBook(
                userId:${this.state.bookData[0].user.id},
                bookId:${this.state.bookId},
                token:"${localStorage.getItem("hash")}"
            )
        }`, {method: "POST"})
        .then(res => res.json())
        .then(res => {
            console.log(res);
            
            if(res.data.returnBook.success) {
                window.location.replace("/message/returnSuccess");
                return;
            }

            window.location.replace("/message/returnFailed");
        }) 
    }

    onNoButtonClick() {
        window.location.replace("/");
    }

    render() {
        if(this.state.bookData) {
            return (
                <Grid>
                    <Row>
                        <Col smOffset={2} sm={4}>
                            <Image responsive src={QuestionMarkImage} />
                            <h3>{this.state.bookData[0].title}</h3>
                            <h4>{this.state.bookData[0].author}</h4>
                        </Col>
                        <Col sm={4}>
                            <Image responsive src={QuestionMarkImage} />
                            <h3>{this.state.bookData[0].user.lastName}, {this.state.bookData[0].user.firstName}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <h3>User {this.state.bookData[0].user.lastName} is returning book {this.state.bookData[0].title}?</h3>
                        <Button onClick={this.onYesButtonClick} bsStyle="success">Yes</Button>
                        <span> </span>
                        <Button onClick={this.onNoButtonClick} bsStyle="warning">No</Button>
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

export default ReturnBook;