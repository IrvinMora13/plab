import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/2Contact.png"

function Carrers() {
    return (
        <>
            <NavBar />
            <Hero
                cName="heroMid"
                heroImg={AboutImg}
                title="Carreras"
                btnClass="hide"
            />
        </>
    )
}

export default Carrers;