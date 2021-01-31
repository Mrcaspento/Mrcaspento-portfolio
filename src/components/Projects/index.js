import React, { Component } from 'react';
import projects from "../../projects.json"
import { ProjectList, ProjectListItem } from "./ProjectList";



class ProjectCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projects,
      
        }

    }
    render() {
        return (
                <ProjectList>
                    {this.state.projects.map(project => {
                        console.log(project)
                        return (
                            <ProjectListItem
                                key={project.id}
                                title={project.title}
                                gif= {project.gif}
                                body={project.body}
                                githubRepo={project.githubRepo}
                                deployed={project.deployed}
                                date={project.date}
                            />
                        );
                    })}
                </ProjectList>
        )
    }
}
export default ProjectCard;
