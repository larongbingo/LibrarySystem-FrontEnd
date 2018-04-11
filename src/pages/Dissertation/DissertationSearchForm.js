import React, { Component } from "react";
import { 
    Form,
    Button,
    FormGroup,
    InputGroup,
    FormControl
} from "react-bootstrap";

class DissertationSearchForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);

        this.state = {
            value: null
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleEnterKeyPress(e) {
        if(e.key === "Enter") {
            e.preventDefault();
            window.location.replace("/dissertation/" + this.state.value);
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
                            placeholder="Enter a title. Ex. Library System"
                            onChange={this.handleChange} 
                        />
                        <InputGroup.Button>
                            <Button
                                href={"/dissertation/" + this.state.value} 
                                bsStyle="success"
                            >Search Book</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

export default DissertationSearchForm;