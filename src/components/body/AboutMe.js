import React from 'react';
import './AboutMe.css';
class AboutMe extends React.Component
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
<h1 style={mystyle}>About Me</h1>
<div className='aboutMe'>
<p>
Hi, my name is Aman Warudkar, I am straightforward and passionate about designing things and have keen interest in Project as well as Full-Stack Development. I am an Introspective person, I think a lot to know the Importance of something before getting into it. But when I decide to get into something, I do everything to get the things done. This attitude drives me to learn new tool and technologies. To be more generic this attitude drives me to learn new skills in life.<br/>
Apart from technological aspect, I love Travelling which enables me to Explore the world better . I like playing Video-Games, Chess, Reading Books.
</p>
</div>
<div style={{width:"100%",height:"60px"}}>
</div>
</React.Fragment>
);
}
}
export default AboutMe;