import "./hero.css";

function Hero() {
    return (
        <>
            <div className="hero">
                <img alt="HeroImg" src="https://i.ytimg.com/vi/G5R-Xl5yZZY/maxresdefault.jpg" />
                <div className="heroText">
                    <h1>Facultad de ingenieria</h1>
                    <p>Eventos y carreras </p>
                    <a href="/">
                        Conoce tu futura carrera
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero;