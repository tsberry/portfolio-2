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
                    {projects.map((project, index) =>
                        <div key={index} className="col-md-4">
                            <div className="project-card card bg-dark text-white my-2">
                                <img className="project-img card-img" src={project.image} alt={project.name} />
                                <div className="card-img-overlay">
                                <div className="row">
                                    <div className="col-md-3 text-left">
                                        <a className="project-link" href={project.repository}>
                                                <span className="fa-layers fa-fw">
                                                    <i className="fas fa-square background-icon fa-3x"></i>
                                                    <i className="fab fa-github top-icon fa-3x" data-fa-transform="shrink-6 left-1" ></i>
                                                    <span className="sr-only">{project.name} Repo</span>
                                                </span>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                    {project.deployed !== "none" ?
                                    <div className="col-md-3 text-center">
                                        <a className="project-link" href={project.deployed}>
                                        <span className="fa-layers fa-fw">
                                            <i className="fas fa-square background-icon fa-3x"></i>
                                            <i className="fas fa-external-link-alt top-icon fa-3x" data-fa-transform="shrink-7 left-1"></i>
                                            <span className="sr-only">{project.name} Deployed Site</span>
                                        </span>
                                        </a>
                                    </div>
                                    : <div className="col-md-3"></div>}
                                </div>
                                <div className="card-body text-center">
                                    <a className="about-button btn btn-dark" role="button" data-toggle="collapse" href={`#project-${index}`} aria-expanded="false" aria-controls="collapseExample">
                                        About {project.name}
                                    </a>
                                </div>
                                </div>
                                <div className="collapse" id={`project-${index}`}>
                                    <div className="description-card card card-body text-dark">
                                        <p className="card-text">{project.short}</p>
                                        <Link className="card-link" to={`/projects/${index}`}>See more about {project.name}.</Link>
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