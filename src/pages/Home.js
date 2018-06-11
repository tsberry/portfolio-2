import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="col-12 text-center">
                <h1 className="display-1">Thomas Berry</h1>
                <h2>Full-Stack Web Developer</h2>
                <h2>San Diego, California</h2>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2><Link to="/about">Learn About Me</Link> or <Link to="/projects">See My Work</Link></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid" src="/assets/images/me.jpg" alt="Thomas Berry" />
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;