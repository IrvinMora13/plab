import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/9.jpg"
import Footer from "../../components/Footer"
import About from "../../components/About"
function Contact() {
    return (
        <>
            <NavBar />
            <Hero
                cName="heroMid"
                heroImg={AboutImg}
                title="Contacto"
                btnClass="hide"
            />
            <About />
            <Footer />
        </>
    )
}

export default Contact;