import React from "react";
import profileImage from "../../assets/images/profile_image.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {
  FacebookURL,
  GithubURL,
  InstagramURL,
  LinkedinURL,
  TwitterURL,
} from "../../common/social";
import Works from "../Work/Works";
import INFO from "../../common/userInfo";
import Skills from "../Work/Skills";
import { Chip, Grid } from "@mui/material";
import { Color3 } from "../../common/colors";

function About() {
  const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Python", "Machine Learning", "AI", "CSS", "HTML"];

  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>About Me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>{INFO.about.title}</h3>
                <p>
                  {INFO.about.description}
                </p>
                {/* Insert Works component here */}
                <div style={{padding: 0}} className="works-section">
                  <Works />
                </div>
                
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
            
              <div
                className="single-about-img"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={profileImage} alt="profile_image" />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a
                        style={{ border: "0px" }}
                        href={INFO.socials.facebook}
                        target="_blank"
                      >
                        <Facebook fontSize="large" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ border: "0px" }}
                        href={INFO.socials.github}
                        target="_blank"
                      >
                        <GitHub fontSize="large" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ border: "0px" }}
                        href={INFO.socials.instagram}
                        target="_blank"
                      >
                        <Instagram fontSize="large" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ border: "0px" }}
                        href={INFO.socials.twitter}
                        target="_blank"
                      >
                        <Twitter fontSize="large" />
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ border: "0px" }}
                        href={INFO.socials.linkedin}
                        target="_blank"
                      >
                        <LinkedIn fontSize="large" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>phone</h3>
                      <p>{INFO.main.phone}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>{INFO.main.email}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>website</h3>
                      <p>{INFO.main.website}</p>
                    </div>
                  </div>
                </div>
                <Grid container spacing={1}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  <Chip sx={{color: Color3}} label={skill} />
                </Grid>
              ))}
            </Grid>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default About;
