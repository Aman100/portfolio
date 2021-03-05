import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Work';
class MyProjects extends React.Component
{
render()
{
const mystyle={
marginLeft:"63px",
textDecoration:"underline"
};
return (
<React.Fragment>
<h1 style={mystyle}>Projects</h1>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(156, 235, 52)', color: '#hhh' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(156, 235, 52)' }}
    iconStyle={{ background: 'rgb(156, 235, 52)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">HelloBoot (A SpringBoot Replica) –</h3>
    <p>
      • This framework free user from writing servlet code.<br/>
      • User only needs to create server side services just by
        annotating them with path.<br/>
      • This framework can handle GET, POST request and has
        feature of Inversion of Control.<br/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(156, 235, 52)', color: '#hhh' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(156, 235, 52)' }}
    iconStyle={{ background: 'rgb(156, 235, 52)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">HTTP Server in PYTHON –</h3>
    <p>
      • HTTP Server listens on server port number for request
	and send response back to client.<br/>
      • It can do SERVER-SIDE PROCESSING and can serve HTML, CSS, JS, IMAGE FILE.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(156, 235, 52)', color: '#hhh' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(156, 235, 52)' }}
    iconStyle={{ background: 'rgb(156, 235, 52)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Online Report Creation Tool –</h3>
    <p>
      • This tool makes report creation work easier.<br/>
      • By creating template of report and use image
	processing on that template for finding text
	and replacing the text with some other text, so
	if requirement of report changes then changes
	can be made easily and quickly.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
<div style={{width:"100%",height:"50px"}}>
</div>
</React.Fragment>
);
}
}

export default MyProjects;