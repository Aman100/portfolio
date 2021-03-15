import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Work';
class Education extends React.Component
{
render()
{
const mystyle={
marginLeft:"63px",
textDecoration:"underline"
};
return (
<React.Fragment>
<br/>
<h1 style={mystyle}>Education</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June 2017 – Present"
    contentStyle={{ background: 'rgb(156, 235, 52)', color: '#hhh' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(156, 235, 52)' }}
    iconStyle={{ background: 'rgb(156, 235, 52)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
    <p>
CGPA – 7.03 upto 5th sem<br/>
Mahakal Institute of Technology
</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2016 - March 2017"
    contentStyle={{ background: 'rgb(156, 235, 52)', color: '#hhh' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(156, 235, 52)' }}
    iconStyle={{ background: 'rgb(156, 235, 52)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">12th Board: MP Board</h3>
    <p>
      Percentage – 77<br/>
      Nalanda Academy
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2014 - March 2015"
    contentStyle={{ background: 'rgb(156, 235, 52)', color: '#hhh' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(156, 235, 52)' }}
    iconStyle={{ background: 'rgb(156, 235, 52)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">10th Board: MP Board –</h3>
    <p>
	Percentage: 73<br/>
	Nalanda Academy
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
<div style={{width:"100%",height:"50px"}}>
</div>
</React.Fragment>
);
}
}

export default Education;