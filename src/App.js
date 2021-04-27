import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

export default class App extends Component {
  state = {
    title: "Neal Yan",
    headerLinks: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
    home: {
      title: "Be Relentless",
      subTitle: "Projects make the difference",
      text: "Checkout my projects",
    },
    about: {
      title: "About Me",
      text: "About me",
    },
    contact: {
      title: "Let's talk",
      text: "Let's talk",
    },
  };

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Neal's Portfolio</NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          ></Route>
          <Route
            path="/about"
            render={() => (
              <About
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                text={this.state.about.text}
              />
            )}
          ></Route>
          <Route
            path="/contact"
            render={() => (
              <Contact
                title={this.state.contact.title}
                subTitle={this.state.contact.subTitle}
                text={this.state.contact.text}
              />
            )}
          ></Route>
          <Footer />
        </Container>
      </Router>
    );
  }
}
