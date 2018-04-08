import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

class AppNavbar extends Component {

    checkToken() {
        return localStorage.getItem("hash");
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
