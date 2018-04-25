import React, { Component } from "react";
import { 
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Form,
    Button
} from "react-bootstrap";

class UploadThesis extends Component {
    constructor(props, context) {
        super(props, context);
        this.uploadFile = this.uploadFile.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

        this.state = {
            showError: false,
            showSuccess: false,
            title: "",
            file: null
        }
    }

    uploadFile() {
        var file = new FormData();
        var fileField = document.querySelector("input[type='file']");

        file.append("thesis_title", this.state.title);
        file.append("thesis", fileField.files[0]);

        fetch("https://librarysystems-file-transfer.mybluemix.net/upload.php", {
            method: "POST",
            body: file,
            mode: "cors"
        })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(res => {
            console.log(res);

            // Show Success
            if(res.success) {
                window.location.replace("/message/uploadSuccess");
                return;
            }

            window.location.replace("/message/uploadFailed");
        }) 
        
    }

    onButtonClick(e) {
        e.preventDefault();
        this.uploadFile();
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleFileChange(e) {
        this.setState({ file: e.target.file });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Form>
                            <h3>Select File: </h3>
                            <FormGroup>
                                <FormControl 
                                    type="text"
                                    value={this.state.title}
                                    placeholder="Title of the Thesis"
                                    onChange={this.handleTitleChange}
                                />
                                <br />
                                <FormControl 
                                    type="file"
                                    value={this.state.file}
                                    onChange={this.handleFileChange}
                                />
                                <br />
                                <Button onClick={this.uploadFile} type="button">Upload</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default UploadThesis;