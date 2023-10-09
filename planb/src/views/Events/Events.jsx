import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/9.jpg"
import Footer from "../../components/Footer"

function Events() {
    return (
        <>
            <NavBar />
            <Hero
                cName="heroMid"
                heroImg={AboutImg}
                title="Eventos"
                btnClass="hide"
            />
            <Footer />
        </>
    )
}

export default Events;