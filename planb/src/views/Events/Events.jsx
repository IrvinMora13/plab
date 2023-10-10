import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/ev_fon.png";
import Footer from "../../components/Footer";
import Event from "../../components/Event";

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
            <Event />
            <Footer />
        </>
    )
}

export default Events;