import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
    constructor(props, context) {
        super(props, context);
        
        // Remove the token at the backend
        fetch(`https://librarysystembackend.mybluemix.net/api?query=mutation+{logOut(token:"${localStorage.getItem("hash")}")}`,{method: "POST"})
        
        // Remove the locally stored token
        localStorage.removeItem("hash");
    }
    
    render() {
        return ( <Redirect to="/" /> )
    }
}

export default LogOut;