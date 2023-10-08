import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/2Contact.png"

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
        </>
    )
}

export default Events;