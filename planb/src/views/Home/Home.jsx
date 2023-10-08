import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";

function Home() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                heroImg="https://i.ytimg.com/vi/G5R-Xl5yZZY/maxresdefault.jpg"
                title="Facultad de ingenieria"
                text="Informacion sobre la facultad"
                buttonText="Eventos y carreras"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home;