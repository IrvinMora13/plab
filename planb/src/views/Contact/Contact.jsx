import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/2Contact.png"
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
        </>
    )
}

export default Contact;