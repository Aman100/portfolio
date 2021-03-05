import React from 'react';
import AboutMe from './components/body/AboutMe';
import Contacts from './components/body/Contacts';
import MyProjects from './components/body/MyProjects';
import Education from './components/body/Education';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Skills from './components/body/Skills';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
     <Router>
      <Navbar />
	   <Switch>
      		<Route path='/portfolio' exact component={Home} />
		<Route path='/aboutMe' component={AboutMe} />
		<Route path='/contacts' component={Contacts} />
		<Route path='/myProjects' component={MyProjects} />
		<Route path='/education' component={Education} />
		<Route path='/skills' component={Skills} />
	   </Switch>
      <Footer />
         </Router>
    </React.Fragment>
  );
}

export default App;