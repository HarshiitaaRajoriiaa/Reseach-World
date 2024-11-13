import Header from "../Common/Header.jsx";
import Homepage from '../Pages/Homepage.jsx'
import Services from '../Pages/Services.jsx'
// import Testimonials from '../Pages/Testimonials.jsx'
import Contact from '../Pages/Contact.jsx'
import Footer from '../Common/Footer.jsx'
import About from '../Pages/About.jsx'

export default function OpeningPage() {
  return (
    <div>
        <Header/>
        <Homepage/>
        <Services/>
        <About/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}
