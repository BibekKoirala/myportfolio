import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Grid
} from "@mui/material";
import { faBriefcase, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Folder } from "@mui/icons-material";
import { Color3 } from "../../common/colors";

function Skills() {
  
  const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Python", "Machine Learning", "AI", "CSS", "HTML"];

  return (
    <React.Fragment>
      <div className="works">

        {/* Skills Section */}
        <Card sx={{ borderRadius: 2, border: `1px solid ${Color3}`, maxWidth: 600, margin: '0 auto' }}>
          <CardHeader className="card-header" title="Skills" />
          <CardContent>
            <Grid container spacing={1}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  <Chip sx={{color: Color3}} label={skill} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Skills;