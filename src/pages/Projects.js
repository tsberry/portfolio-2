import React, { Component } from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";
import "./Projects.css";

class Projects extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h1 className="display-3 text-center">Projects</h1>
                <div className="row">
                    {projects.map(project =>
                        <div key={project.id} className="col-md-4">
                            <div className="project-card card bg-dark text-white my-2">
                                <img className="project-img card-img" src={project.image} alt={project.name} />
                                <div className="card-img-overlay text-center">
                                    <h2 className="card-title">{project.name}</h2>
                                    <a className="img-link card-link" href={project.repository}>GitHub Repository</a>
                                    {project.deployed !== "none" ?
                                        <a className="img-link card-link" href={project.deployed}>Deployed Site</a>
                                        : ""}
                                        <p className="card-text">
                                    <a className="btn btn-dark" role="button" data-toggle="collapse" href={`#project-${project.id}`} aria-expanded="false" aria-controls="collapseExample">
                                        About {project.name}
                                    </a>
                                    </p>
                                </div>
                                <div className="collapse" id={`project-${project.id}`}>
                                    <div className="description-card card card-body text-dark">
                                        <p className="card-text">{project.description}</p>
                                        <Link className="card-link" to={`/projects/${project.id}`}>See more about {project.name}.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default Projects;