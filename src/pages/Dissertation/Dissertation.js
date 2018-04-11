import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import DisserationSearchForm from "./DissertationSearchForm";

class Dissertation extends Component {
    constructor(props, context) {
        super(props, context);

        this.fetchFileList = this.fetchFileList.bind(this);

        this.state = {
            files: null
        }
    }

    fetchFileList() {
        let dissertationName = this.props.match.params.dissertationName;
        let url = (dissertationName) ?
        `https://librarysystembackend.mybluemix.net/api?query={Files(file_title:"${dissertationName}"){id thesis_title file_name}}` :
        "https://librarysystembackend.mybluemix.net/api?query={Files{id thesis_title file_name}}";
        
        
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(response => {
            this.setState({files: response.data.Files});
        })
    }

    renderThesisLink(file) {
        return (
            <a href={"https://librarysystems-file-transfer.mybluemix.net/download.php?thesis_id=" + file.id}>
                <Row>
                    <Col xs={12}>
                        <h3>{file.thesis_title}</h3>
                    </Col>
                </Row>
            </a>
        )
    }

    componentDidMount() {
        this.fetchFileList();
    }

    render() {
        if(this.state.files) {
            return (
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <DisserationSearchForm />
                        </Col>
                    </Row>
                    { this.state.files.map(this.renderThesisLink) }
                </Grid>
            )
        }

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <DisserationSearchForm />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Loading...</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Dissertation;