import React, { Component } from "react";
import { 
    Form,
    FormGroup, 
    FormControl, 
    Col,
    Button,
    InputGroup
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
                <FormGroup className="padding-top-30">
                    <InputGroup>
                        <FormControl 
                            type="text"
                            value={this.state.value}
                            placeholder="Enter a title. Ex. Discrete Mathematics"
                            onChange={this.handleChange} 
                        />
                        <InputGroup.Button>
                            <Button
                                href={"/bookCatalog/" + this.state.value} 
                                bsStyle="success"
                            >Search Book</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

export default BookSearchForm;