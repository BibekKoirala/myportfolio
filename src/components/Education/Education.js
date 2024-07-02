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
import INFO from '../../common/userInfo';


export default function AlternateTimeline() {
    return (
        <section id="education" className="education">
            <div className="section-heading text-center">
                <Typography variant="h4" component="h2" gutterBottom>
                    Education
                </Typography>
            </div>
            <Timeline position="alternate">
                {INFO.education.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index < INFO.education.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent sx={index%2==0?{}:{display: 'flex', flexDirection: 'row-reverse'}}>
                            <Paper elevation={1} style={{ padding: '10px 20px', width: '50%'}}>
                                <Typography variant="h6" fontWeight={'bold'} component="h3">
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
