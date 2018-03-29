import React, { Component } from "react";
import { 
    Form,
    FormGroup, 
    FormControl, 
    Col,
    Button
} from "react-bootstrap";

class BookSearchForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ""
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="searchBook">
                    <Col md={8}>
                        <FormControl 
                            type="text"
                            value={this.state.value}
                            placeholder="Search Book here. Enter a title. Ex. Discrete Mathematics"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </Col>
                    
                    <Col md={4}>
                        <Button 
                            href={"/bookCatalog/" + this.state.value} 
                            type="submit" 
                            bsStyle="success"
                        >Search Book</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default BookSearchForm;