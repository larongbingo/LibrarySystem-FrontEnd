import React, { Component } from 'react';
import { 
  Navbar, 
  Nav, 
  NavItem,
  NavDropdown,
  MenuItem 
} from "react-bootstrap";

class AppNavbar extends Component {

    checkToken() {
        return localStorage.getItem("hash");
    }

    // TODO: Implement
    checkPosition() {
      return localStorage.getItem("position");
    }

  render() {
    return (
      <div className="App">
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">CvSU - Imus Library</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">Home</NavItem>
              <NavItem eventKey={2} href="/bookCatalog">Book Catalog</NavItem>
              <NavItem eventKey={3} href="/dissertation">Dissertation</NavItem>
              <NavItem eventKey={4} href="/about">About</NavItem>
            </Nav>
            <Nav pullRight>
              {
                this.checkPosition() !== "USER" ?
                <NavDropdown title="Administration">
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
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
    }
}

export default AppNavbar;
