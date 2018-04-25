import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AppHomepage from "./pages/AppHomepage/AppHomepage";
import BookCatalog from "./pages/BookCatalog/BookCatalog";
import Dissertation from "./pages/Dissertation/Dissertation";
import BookDetails from "./pages/BookDetails/BookDetails";
import LogIn from "./pages/LogIn/LogIn";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import LogOut from "./pages/Logout/LogOut";
import BookStats from "./pages/BookStats/BookStats";
import UpdateUsers from "./pages/UpdateUsers/UpdateUsers";
import MarkBooks from "./pages/MarkBooks/MarkBooks";
import UploadThesis from "./pages/UploadThesis";
import Messages from "./pages/Message";

class Routes extends Component {
    checkToken() {
        return localStorage.getItem("hash");
    }

    checkPosition() {
        return localStorage.getItem("position");
    }

    render() {
        return (
            <Switch>
                {
                    this.checkToken() ? 
                    <Route path="/uploadDissertation" component={ UploadThesis } /> : ""
                }

                {
                    this.checkToken() && this.checkPosition() === "ADMINISTRATOR" ?
                    <Route path="/markBooks" component={ MarkBooks } /> : ""
                }

                {
                    this.checkToken() && this.checkPosition() === "ADMINISTRATOR" ?
                    <Route path="/updateUsers" component={ UpdateUsers } /> : ""
                }

                {
                    this.checkToken() && this.checkPosition() === "ADMINISTRATOR" ?
                    <Route path="/bookStats" component={ BookStats } /> : ""
                }
                
                {/* Unprotected Routes */}
                <Route exact path="/message/:event" component={ Messages } />
                <Route path="/register" component={ Register } />
                <Route path="/about" component={ About } />
                <Route path="/logout" component={ LogOut } />
                <Route path="/login" component={ LogIn } />
                <Route exact path="/book/:bookId" component={ BookDetails } />
                <Route path="/bookCatalog/:bookName" component={ BookCatalog } />
                <Route path="/bookCatalog" component={ BookCatalog } />
                <Route path="/dissertation/:dissertationName" component={ Dissertation } />
                <Route path="/dissertation" component={ Dissertation } />
                <Route path="/" component={ AppHomepage } />
            </Switch>
        );
    }
}

export default Routes;