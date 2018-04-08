import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
    constructor(props, context) {
        super(props, context);

        localStorage.removeItem("hash");
    }
    
    render() {
        return ( <Redirect to="/" /> )
    }
}

export default LogOut;