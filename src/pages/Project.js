import React, { Component } from "react";
import projects from "../data/projects";

class Project extends Component {
    render() {
        const project = projects[this.props.match.params.id];
        return (
            <div className="col-md-12">
                <h1 className="display-3 text-center">{project.name}</h1>
                <div className="row">
                    <a className="btn btn-primary mr-auto" href={project.repository}>See the Code</a>
                    {project.deployed !== "none" ?
                        <a className="btn btn-primary ml-auto" href={project.deployed}>See the Site</a>
                        : ""}
                </div>
                <div className="row">
                <img className="img-fluid" src={project.image} alt={project.name} />
                </div>
                <h2>About {project.name}</h2>
                <p>{project.description}</p>
                <h2>Technologies Used</h2>
                <ul>
                    {project.technologies.map(technology => <li>{technology}</li>)}
                </ul>
            </div>
        );
    }
}

export default Project;