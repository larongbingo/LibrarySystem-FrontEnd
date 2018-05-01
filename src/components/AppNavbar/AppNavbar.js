import React, { Component } from 'react';
import { 
  Navbar, 
  Nav, 
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from "react-bootstrap";

import CvSU_Logo from "./Cavite_State_University.png";

import "./AppNavbar_Styles.css";

class RightNavItems extends Component {
  checkToken() {
      return localStorage.getItem("hash");
  }

  // TODO: change the list at BookCatalog to Flexbox
  checkPosition() {
    return localStorage.getItem("position");
  }

  render() {
    return (
      <Nav pullRight>
              

              {
                this.checkToken() ?
                <NavDropdown title="Account">
                {
                  this.checkPosition() && this.checkToken() ?
                  <NavItem href="/uploadDissertation">Upload Thesis</NavItem> :
                  ""
                }
                
                {
                  (this.checkPosition() === "ADMINISTRATOR") ? 
                    <MenuItem href="/bookStats">Book Stats</MenuItem> :
                    ""
                }
                
                {
                  (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                    <MenuItem href="/updateUsers">Update Users</MenuItem> :
                    ""
                }

                {
                  (this.checkPosition() === "ADMINISTRATOR" || this.checkPosition() === "STAFF") ?
                    <MenuItem href="/markBooks">Mark Books</MenuItem> :
                    ""
                }
                </NavDropdown> 
                : ""
              }

              {
                  // Check if the localStorage has a stored hash
                  (this.checkToken()) ?
                  <NavItem eventKey={1} href="/logout">Log Out</NavItem> :
                  <NavItem eventKey={2} href="/login">Log In</NavItem> 
              }
            </Nav>
    )
  }
}

class AppNavbar extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <Image className="logo" responsive src={CvSU_Logo} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">Home</NavItem>
              <NavDropdown title="Catalogs">
                <MenuItem eventKey={2} href="/bookCatalog">Book Catalog</MenuItem>
                <MenuItem eventKey={3} href="/dissertation">Dissertation Catalog</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="/about">About</NavItem>
            </Nav>
            <RightNavItems />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
    }
}

export default AppNavbar;
