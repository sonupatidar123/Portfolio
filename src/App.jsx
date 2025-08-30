import React from "react";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from './Component/Hero/Hero.jsx';
import About from './Component/About/About.jsx';
import Services from './Component/Services/Services.jsx';
import MyWork from './Component/MyWork/MyWork.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';
const App=()=>{
    return (
    <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <MyWork/>
            <Contact/>
            <Footer/>
    </div>

    )
}
export default App;