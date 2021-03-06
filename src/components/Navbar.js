import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="collapse navbar-collapse order-2 order-sm-0 collapse-target">
            <ul className="navbar-nav mr-auto icon-list">
                            <li className="mx-2">
                                <a href="https://www.linkedin.com/in/thomas-berry/">
                                <i className="fab fa-linkedin-in" />
                                <span className="sr-only">LinkedIn</span>
                                </a>
                            </li>
                            <li className="mx-2">
                                <a href="https://www.github.com/tsberry">
                                <i className="fab fa-github-alt" />
                                <span className="sr-only">GitHub</span>
                                </a>
                            </li>
                            <li className="mx-2">
                                <a href="mailto:tberry6@gmail.com">
                                <i className="fas fa-envelope" />
                                <span className="sr-only">Email</span>
                                </a>
                            </li>
                        </ul>
                        </div>
                <div className="mx-auto order-0">
                <Link className="navbar-brand" to="/">Thomas Berry</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse-target" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>

                <div className="collapse navbar-collapse order-1 collapse-target">
                    <ul className="navbar-nav ml-auto">
                        <li className={
                            window.location.pathname === "/about"
                            ? "nav-item active"
                            : "nav-item"
                        }>
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className={
                            window.location.pathname === "/projects"
                            ? "nav-item active"
                            : "nav-item"
                        }>
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;