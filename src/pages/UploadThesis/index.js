import React, { Component } from "react";

class UploadThesis extends Component {
    render() {
        return (
            <form>
                <h1>select file:</h1>
                <input type="file" />
                <input type="text" /> <br />
                <input type="submit" /> <br />
            </form>
        )
    }
}

export default UploadThesis;