import { useEffect } from 'react';
import AboutMe from './AboutMe';
import './App.css'
import Navbar from './components/Navbar';
import ContactSection from './ContactSection';
import GetInTouch from './GetInTouch';
import Home from './Home';
import ShowCase from './ShowCase';

function App() {

  return (
    <>
    <Navbar/>
      <Home/>
      <AboutMe/>
      <ShowCase/>
      <ContactSection/>
      <GetInTouch/>
    </>
  )
}

export default App;
