import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AppHomepage from "./pages/AppHomepage/AppHomepage";
import BookCatalog from "./pages/BookCatalog/BookCatalog";
import Dissertation from "./pages/Dissertation/Dissertation";
import BookDetails from "./pages/BookDetails/BookDetails";
import LogIn from "./pages/LogIn/LogIn";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/register" component={ Register } />
                <Route path="/about" component={ About } />
                <Route path="/login" component={ LogIn } />
                <Route exact path="/book/:bookId" component={ BookDetails } />
                <Route path="/bookCatalog/:bookName" component={ BookCatalog } />
                <Route path="/bookCatalog" component={ BookCatalog } />
                <Route path="/dissertation" component={ Dissertation } />
                <Route path="/" component={ AppHomepage } />
            </Switch>
        );
    }
}

export default Routes;