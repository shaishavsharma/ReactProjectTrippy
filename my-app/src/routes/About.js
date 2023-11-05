import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="About"       
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;