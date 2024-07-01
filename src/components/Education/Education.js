import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const educationData = [
    {
        period: "2018 - 2022",
        degree: "Bachelor of Technology in Computer Science",
        institution: "BML Munjal University",
        location: "Gurugram, India",
        description: "During my time at BML Munjal University, I graduated with a 7.52 CGPA in Bachelor's of Technology in Computer Engineering. I actively participated in the robotics club and represented the university in football."
    },
    {
        period: "2023 - 2024",
        degree: "Applied AI Solutions (PostGraduate)",
        institution: "George Brown College",
        location: "Toronto, Canada",
        description: "During my tenure at George Brown College, I immersed myself in a myriad of projects spanning sentiment analysis, chatbots, and object detection. These projects provided invaluable hands-on experience, honing my skills in cutting-edge technologies and deepening my understanding of their real-world applications."
    },
    {
        period: "2024 - 2025",
        degree: "Cloud Computing (PostGraduate)",
        institution: "George Brown College",
        location: "Toronto, Canada",
        description: "During my tenure at George Brown College, I immersed myself in a myriad of projects spanning sentiment analysis, chatbots, and object detection. These projects provided invaluable hands-on experience, honing my skills in cutting-edge technologies and deepening my understanding of their real-world applications."
    }
];

export default function AlternateTimeline() {
    return (
        <section id="education" className="education">
            <div className="section-heading text-center">
                <Typography variant="h4" component="h2" gutterBottom>
                    Education
                </Typography>
            </div>
            <Timeline position="alternate">
                {educationData.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index < educationData.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} style={{ padding: '10px 20px' }}>
                                <Typography variant="h6" component="h3">
                                {item.degree}
                                </Typography>
                                <Typography variant="subtitle1" component="h4">
                                    {item.period}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.institution}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.location}
                                </Typography>
                                <Box mt={2}>
                                    <Typography variant="body2">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </section>
    );
}
