import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends React.Component
{
constructor()
{
super();
this.state={toggle:false};
this.toggler=this.toggler.bind(this);
this.closeMobileMenu=this.closeMobileMenu.bind(this);
}

toggler()
{
this.setState((previousState) =>({toggle:!previousState.toggle}));
}

closeMobileMenu()
{
this.setState((previousState) => ({toggle:!previousState.toggle}));
}

render()
{
return (
<React.Fragment>
<div className='super-parent-flex'>
<div className='parent-flex'>
   <div className='text'>PORTFOLIO</div>
   <div className='child-flex'>
	<ul className={this.state.toggle ? 'ulstyle active' : 'ulstyle'}>
		<li className='nav-li'><Link to="/myProjects" className='nav-link' onClick={this.closeMobileMenu}>Projects</Link></li>
		<li className='nav-li'><Link to="/skills" className='nav-link' onClick={this.closeMobileMenu}>Skills</Link></li>
		<li className='nav-li'><Link to="/education" className='nav-link' onClick={this.closeMobileMenu}>Education</Link></li>
		<li className='nav-li'><Link to="/contacts" className='nav-link' onClick={this.closeMobileMenu}>Contacts</Link></li>
		<li className='nav-li'><Link to="/aboutMe" className='nav-link' onClick={this.closeMobileMenu}>About Me</Link></li>
	</ul>
   </div>
   <div className='menu-icon' onClick={this.toggler}>
        <i className='fas fa-bars'></i>
   </div>
</div>{/*parent-flex-end*/}
</div>{/*super-parent-flex*/}
</React.Fragment>
);
}
}

export default Navbar;