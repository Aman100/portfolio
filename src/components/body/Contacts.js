import React from 'react';
import './Contacts.css'
class Contacts extends React.Component
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
<h1 style={mystyle}>Contacts</h1>
<br/><br/>
<table className="table" border='1'>
<tr><td>Email</td><td>amanwarudkar1@gmail.com</td></tr>
<tr><td>Mobile Number</td><td>+91-9109658601</td></tr>
<tr><td>Github</td><td><a href='https://github.com/Aman100'>https://github.com/Aman100</a></td></tr>
<tr><td>LinkedIn</td><td><a href='linkedin.com/in/aman-warudkar-06811b149'>linkedin.com/in/aman-warudkar-06811b149</a></td></tr>
</table>
</div>
);
}
}
export default Contacts;