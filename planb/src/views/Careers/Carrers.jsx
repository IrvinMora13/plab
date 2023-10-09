import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import AboutImg from "../../assets/9.jpg"
import CarrersOpt from "../../components/CarrersOpt"
import Footer from "../../components/Footer"
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
            <CarrersOpt />
            <Footer />
        </>
    )
}

export default Carrers;