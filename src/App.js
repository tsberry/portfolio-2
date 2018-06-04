import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                    <Route path="/projects/:id" component={Project} />
                </Wrapper>
            </div>
        </Router>
    );
  }
}

export default App;
