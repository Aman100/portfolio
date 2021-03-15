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
<br/>
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
• User only needs to create server-side services just by annotating them with path.<br/>
<b>Features:</b><br/>
<b>1. AutoWired Annotation:</b> For getting objects from Request, Session, Application Scope.<br/>
It uses<br/>
<b>a)</b> Search by Name.<br/>
<b>b)</b> Search by Type.<br/>
to find objects in scope.<br/>
<b>2. Property Annotation:</b> For mapping Query Parameters to method Parameters.<br/>
<b>3. Produces Annotation:</b> Used to indicate Framework that the response can be JSON or FILE.<br/>
<b>4. Forward Annotation:</b> For forwarding request to a ‘Service’ or ‘View’ (JSP).<br/>
<b>5. FileConfiguration Annotation:</b> Used for handing ‘File Uploads’.<br/>
<b>6. InjectCookieManager Annotaion:</b> For getting access to cookies.<br/>
<b>7. InjectRequestContainer Annotaion:</b> For getting access to Request Container.<br/>
<b>8. InjectSessionContainer Annotaion:</b> For getting access to Session Container.<br/>
<b>9. InjectApplicationContainer Annotaion</b>: For getting access to Application Container.<br/>
<b>10. Get / Post Annotation:</b> For indicating the framework that the request can be of GET or POST Type.<br/>
<b>11. Path Annotation:</b> Used to map Request URL to Method.<br/>
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
• HTTP Server listens on server port number for request and send response back to client.<br/>
• It can serve HTML, CSS, JS, IMAGE FILE.<br/>
• It can do SERVER-SIDE PROCESSING.<br/>
• It can forward request to another page.<br/>
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