import React from "react";
import adventumLogo from "../../assets/images/adventum.jpeg";
import sewLogo from "../../assets/images/sew.jpeg";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button
} from "@mui/material";
import { faBriefcase, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Folder } from "@mui/icons-material";
import { Color1, Color3, Color4 } from "../../common/colors";

function Works() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1uj3h30LUQVcaxVkISU3kNGCFVGDYKiVt/view",
      "_blank",
    );
  };

  return (
    <React.Fragment>
      <div className="works">
        <Card elevation={0} sx={{ borderRadius: 2, maxWidth: 600, margin: '0px', padding: 0 }}>
          
          <CardContent sx={{paddingInline: 0, paddingTop: '24px'}}>
            <CardHeader style={{padding: 0}} className="card-header" title='Work Experience' />
            {/* <Typography gutterBottom variant="h5" component="div" sx={{color: Color3}} >
              <Box display="flex" alignItems="center">
                <Avatar component="span">
				<FontAwesomeIcon icon={faBriefcase} />
                </Avatar>
                <Box ml={1}>Work Experience</Box>
              </Box>
            </Typography> */}
			<br />
            <div className="works-body">
              <div className="work">
                <img
                  src={adventumLogo}
                  alt="Adventum Advanced"
                  className="work-image"
                />
                <div className="work-title">ADVENTUM ADVANCED SOLUTIONS</div>&nbsp;&nbsp;&nbsp;&nbsp;
                 <FontAwesomeIcon style={{color: Color4, cursor: 'pointer', zIndex: 100}} icon={faLink} onClick={handleClick} />
                <div className="work-subtitle">Software Engineer Intern</div>
                <div className="work-duration">2020 MAY - 2020 JUL</div>
              </div>

              <div className="work">
                <img src={sewLogo} alt="SEW" className="work-image" />
                <div className="work-title">Smart Energy Water</div>&nbsp;&nbsp;&nbsp;&nbsp;
				<FontAwesomeIcon style={{color: Color4, cursor: 'pointer', zIndex: 100}} icon={faLink} onClick={handleClick} />
                <div className="work-subtitle">Product Engineer</div>
                <div className="work-duration">2022 JAN - 2023 JUL</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Works;
