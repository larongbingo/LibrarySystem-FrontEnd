import React, { Component } from "react";
import { 
    Form,
    FormGroup, 
    FormControl, 
    Col,
    Button
} from "react-bootstrap";
import "./BookSearchForm_Styles.css";

class BookSearchForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);

        this.state = {
            value: this.props.value
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleEnterKeyPress(e) {
        if(e.key === "Enter") {
            // At Keypress of enter, redirect to /bookCatalog/ + this.state.value
            e.preventDefault();
            window.location.replace("/bookCatalog/" + this.state.value);
        }
    }

    render() {
        return (
            <Form horizontal onKeyPress={this.handleEnterKeyPress}>
                <FormGroup controlId="searchBook">
                    <Col mdOffset={1} xs={12}>
                        <Col md={8} className={"padding-top-30"}>
                            <FormControl 
                                type="text"
                                value={this.state.value}
                                placeholder="Search Book here. Enter a title. Ex. Discrete Mathematics"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </Col>
                        
                        <Col md={4} className={"padding-top-30"}>
                            <Button 
                                href={"/bookCatalog/" + this.state.value} 
                                type="submit" 
                                bsStyle="success"
                            >Search Book</Button>
                        </Col>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default BookSearchForm;