import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AppHomepage from "./pages/AppHomepage/AppHomepage";
import BookCatalog from "./pages/BookCatalog/BookCatalog";
import Dissertation from "./pages/Dissertation/Dissertation";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/bookCatalog/:bookName" component={BookCatalog} />
                <Route path="/bookCatalog" component={BookCatalog} />
                <Route path="/dissertation" component={Dissertation} />
                <Route path="/" component={AppHomepage} />
            </Switch>
        );
    }
}

export default Routes;