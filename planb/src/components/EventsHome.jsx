import "./eventsHome.css"
import d1 from "../assets/3.jpg"
import d2 from "../assets/4.jpg"
import d3 from "../assets/5.jpg"
import d4 from "../assets/6.jpg"

const EventHome = () => {
    return (
        <div className="eventHome">
            <h1>Eventos</h1>
            <p>Eventos proximos</p>

            <div className="nextEvents">
                <div className="description">
                    <h2>1 Evento</h2>
                    <p>La facultad de ingenieria de la universidad autonoma de chihuahua
                        los invite a participar en el proximo evento que se tratara sobre ...
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={d1} />
                    <img alt="img" src={d2} />
                </div>
            </div>
        </div>
    )
}

export default EventHome