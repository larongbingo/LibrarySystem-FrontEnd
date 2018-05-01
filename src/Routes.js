import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//#region Page_Referencess
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
import BorrowBook from "./pages/BorrowBook";
import ConfirmBookBorrow from "./pages/ConfirmBookBorrow";
import ReturnBook from "./pages/ReturnBook";
import CancelReservation from "./pages/CancelReservation";
//#endregion

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
                    //#region Protected_Routes
                }
                
                {
                    // Uploading File
                    this.checkToken() ? 
                    <Route path="/uploadDissertation" component={ UploadThesis } /> : ""
                }

                {
                    // Mark Books thats reserved
                    this.checkToken() && (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                    <Route path="/markBooks" component={ MarkBooks } /> : ""
                }

                {
                    // Update User Info
                    this.checkToken() && this.checkPosition() === "ADMINISTRATOR" ?
                    <Route path="/updateUsers" component={ UpdateUsers } /> : ""
                }

                {
                    // Statistics of the books
                    this.checkToken() && this.checkPosition() === "ADMINISTRATOR" ?
                    <Route path="/bookStats" component={ BookStats } /> : ""
                }

                {
                    // Individually mark books as borrowed or returned
                    this.checkToken() && (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                    <Route exact path="/borrowBook/:bookId" component={ BorrowBook } /> : ""
                }

                {
                    // Confirm that the book will be borrowed by the user
                    this.checkToken() && (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                    <Route exact path="/confirmBorrow/:userId/:bookId" component={ ConfirmBookBorrow } /> : ""
                }
                
                {
                    // Return the book
                    this.checkToken() && (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                    <Route exact path="/returnBook/:bookId" component={ ReturnBook } /> : ""
                }

                {
                    //#endregion
                }
                
                {
                    //#region Unprotected_Regions
                }

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

                {
                    //#endregion
                }
            </Switch>
        );
    }
}

export default Routes;