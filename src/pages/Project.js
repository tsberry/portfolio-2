import React, { Component } from "react";
import projects from "../data/projects";
import "./Project.css";

class Project extends Component {
    render() {
        const project = projects[this.props.match.params.id];
        return (
            <div className="col-12">
                <h1 className="display-3 text-center">{project.name}</h1>
                <div className="row">
                    <div className="col-md-3">
                        <a className="link-button btn btn-dark" href={project.repository}>See the Code</a>
                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col-md-3">
                        {project.deployed !== "none" ?
                            <a className="link-button btn btn-dark" href={project.deployed}>See the Site</a>
                            : ""}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 img-container">
                        <img src={project.image} alt={project.name} />
                    </div>
                </div>
                <h2>About {project.name}</h2>
                <p className="description">{project.description}</p>
                <h2>Technologies Used</h2>
                <ul className="tech">
                    {project.technologies.map((technology, index) => <li key={index}>{technology}</li>)}
                </ul>
            </div>
        );
    }
}

export default Project;