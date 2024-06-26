import React from "react";

import Project from "./Project";

import INFO from "../../common/userInfo";


const AllProjects = (props) => {
	return (
		<div className="about">
			<div className="section-heading text-center">
        <h2>Projects</h2>
      </div>
		<div className="all-projects-container">
			
			{INFO.projects.map((project, index) => (
				props.pinned ? project.pinned&&
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						link={project.link}
						demo={project.demo}
						maintainance = {project.maintainance}
						badges= {project.badges}
					/>
				</div>:<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						link={project.link}
						demo={project.demo}
						maintainance = {project.maintainance}
						badges= {project.badges}
					/>
				</div>
			))}
		</div>
		</div>

	);
};

export default AllProjects;
