import React, { Component } from "react";
// import "./Sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <h2>Find Me</h2>
                    </div>
                    <div className="card-body">
                        <ul className="sidebar-list list-inline text-center">
                            <li>
                                <a href="https://www.linkedin.com/in/thomas-berry-34a524162/" className="fab fa-linkedin-in">
                                <span className="sr-only">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.github.com/tsberry" className="fab fa-github-alt">
                                <span className="sr-only">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:tberry6@gmail.com" className="far fa-envelope">
                                <span className="sr-only">Email</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;