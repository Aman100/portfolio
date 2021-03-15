import React from 'react';
import './Skills.css';
class Skills extends React.Component
{
render()
{
const mystyle={
marginLeft:"63px",
textDecoration:"underline"
};
return (
<div className='div'>
<br/>
<h1 style={mystyle}>Skills</h1>
<br/><br/>
<table className='table' border='1'>
<tr><td>Languages</td><td>C, C++, JAVA/J2EE, JAVASCRIPT, PYTHON</td></tr>
<tr><td>Frameworks</td><td>SpringBoot, React</td></tr>
<tr><td>Database</td><td>MySQL</td></tr>
</table>
</div>
);
}
}

export default Skills;