import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer"
import EventHome from "../../components/EventsHome"
import imgFac from "../../assets/9.jpg"
function Home() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                heroImg={imgFac}
                title="Facultad de ingenieria"
                text="Informacion sobre la facultad"
                buttonText="Eventos y carreras"
                url="/Eventos"
                btnClass="show"
            />
            <EventHome />
            <Footer />
        </>
    )
}

export default Home;