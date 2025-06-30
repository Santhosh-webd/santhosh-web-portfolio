import React from 'react'
import line from "./images/Line.png"
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export const Education = () => {
    return (
        <div>
            <div className="maineducationdiv">
                <div className="educationheaddiv">
                    <h2 data-aos="fade-down">EDUCATION</h2>
                    <img src={line} alt="line" className='educationline' data-aos="fade-right" />
                </div>
                <div className="educationmainchild">
                    <div className="subeducationdivides">
                        <Timeline>
                            <TimelineItem className='timelineitem1'>
                                <TimelineSeparator data-aos="zoom-in">
                                    <TimelineDot variant="outlined" sx={{ backgroundColor: '#252525', height: "18px", width: "18px", border: "3px solid #fff" }} />
                                    <TimelineConnector sx={{ width: '2.3px', backgroundColor: "#fff" }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ marginLeft: '20px' }} >
                                    <div className="child1" data-aos="fade-up">
                                        <p className='yearofstudy'>2024 - 2025</p>
                                        <h4 className="courseedu">Full Stack Development (MERN Stack)</h4>
                                        <p className="wherestudy">Web D School - Chennai</p>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem className='timelineitem2'>
                                <TimelineSeparator data-aos="zoom-in">
                                    <TimelineDot variant="outlined" sx={{ backgroundColor: '#252525', height: "18px", width: "18px", border: "3px solid #fff" }} />
                                    <TimelineConnector sx={{ width: '2.3px', backgroundColor: "#fff" }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ marginLeft: '20px' }} >
                                    <div className="child2" data-aos="fade-up">
                                        <p className='yearofstudy'>2021 - 2024</p>
                                        <h4 className="courseedu">Bachelor of Commerce (B.Com)</h4>
                                        <p className="wherestudy">Nadar Mahagana Sangam S. Vellaichamy Nadar College - Madurai</p>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem className='timelineitem3'>
                                <TimelineSeparator data-aos="zoom-in">
                                    <TimelineDot variant="outlined" sx={{ backgroundColor: '#252525', height: "18px", width: "18px", border: "3px solid #fff" }} />
                                    <TimelineConnector sx={{ width: '2.3px', backgroundColor: "#fff" }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ marginLeft: '20px' }} >
                                    <div className="child3" data-aos="fade-up">
                                        <p className='yearofstudy'>2020 - 2021</p>
                                        <h4 className="courseedu">Higher Secondary Certificate</h4>
                                        <p className="wherestudy">Keren Matriculation Higher Secondary School - Madurai</p>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>

                    </div>
                </div>


            </div>
        </div>
    )
}





