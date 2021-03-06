import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h1 className="display-3 text-center">About Me</h1>
                <div className="row">
                    <div className="col-md-8">
                        <div className="bio-card">
                        I am a full stack web developer, experienced with front-end development technologies including CSS, HTML, Javascript, JQuery, and Bootstrap, as well as back-end technologies such as Node.JS, Express.JS, MySQL, and MongoDB. I also have experience with object-oriented programming, especially in Java and Python. I have completed a three-month intensive Web Development Bootcamp at UCSD in addition to my Bachelor’s Degree in Mathematics. I am strong at visualizing and solving problems, especially of a quantitative nature. I am very flexible and adaptable, and I have contributed to projects on both front-end and back-end. I love sharing my knowledge with others, and learning new things from other people in return. <Link to="/projects">See My Projects Here.</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid portrait" src="/assets/images/me.jpg" alt="Thomas Berry" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;