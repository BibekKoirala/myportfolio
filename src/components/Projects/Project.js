import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { Chip, Grid } from "@mui/material";
import { Color3 } from "../../common/colors";

const Project = (props) => {
	const { logo, title, description, badges, link, demo } = props;

	return (
		<React.Fragment>
			<div className="project">
				
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
                        <Grid container style={{marginBottom: 10}} spacing={1}>
                        {badges.map((skill, index) => (
                            <Grid item key={index}>
                            <Chip sx={{color: Color3}} label={skill} />
                            </Grid>
                        ))}
                        </Grid>
						<div className="project-description">{description}</div>
                        <Grid container spacing={2}>
                        <a href={link} target="_blank">
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

                            
							<div className="project-link-text">Repo</div>
                            
						</div>
                        </a>
                        {demo &&
                        <a href={demo} style={{marginLeft: 50}} target="_blank">
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLaptopCode} />
							</div>

                            
							<div className="project-link-text">Demo</div>
                            
						</div>
                        </a>}
                        </Grid>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
