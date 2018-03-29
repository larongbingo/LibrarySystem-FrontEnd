import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Routes from "./Routes";

class Root extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Routes />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
