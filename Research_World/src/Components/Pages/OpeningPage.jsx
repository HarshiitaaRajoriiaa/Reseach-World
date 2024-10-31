import React from 'react'
// import {BrouserRouter as Router , Routes , Route ,  Link , useNavigate} from 'react-router-dom';
import Header from '../Header.jsx'
import Homepage from './Homepage.jsx'
import Services from './Services.jsx'
import About from './About.jsx'
import Testimonials from './Testimonials.jsx'
import Contact from './Contact.jsx'
import Footer from '../Footer.jsx'
export default function OpeningPage() {
  return (
    <div>
        <Header/> 
        <Homepage/>
        <Services/>
        <About/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}
