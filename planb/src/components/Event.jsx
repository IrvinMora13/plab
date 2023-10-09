import EventHomeData from "./EventHomeData"
import "./event.css"
import d1 from "../assets/3.jpg"
import d2 from "../assets/4.jpg"
import d3 from "../assets/5.jpg"
import d4 from "../assets/6.jpg"

const EventHome = () => {
    return (
        <div className="eventHome">
            <h1>Eventos</h1>
            <p>Eventos proximos</p>

            <EventHomeData
                className="nextEvents"
                heading="1 Eventos"
                text="La facultad de ingenieria de la universidad autonoma de chihuahua
            los invite a participar en el proximo evento que se tratara sobre ..."
                img1={d1}
                img2={d2}
            />
            <EventHomeData
                className="nextEventsReverse"
                heading="2 Evento"
                text="La facultad de ingenieria de la universidad autonoma de chihuahua
            los invite a participar en el proximo evento que se tratara sobre ..."
                img1={d3}
                img2={d4}
            />
            <EventHomeData
                className="nextEvents"
                heading="3 Evento"
                text="La facultad de ingenieria de la universidad autonoma de chihuahua
            los invite a participar en el proximo evento que se tratara sobre ..."
                img1={d3}
                img2={d4}
            />
            <EventHomeData
                className="nextEventsReverse"
                heading="4 Evento"
                text="La facultad de ingenieria de la universidad autonoma de chihuahua
            los invite a participar en el proximo evento que se tratara sobre ..."
                img1={d3}
                img2={d4}
            />
            <EventHomeData
                className="nextEvents"
                heading="5 Evento"
                text="La facultad de ingenieria de la universidad autonoma de chihuahua
            los invite a participar en el proximo evento que se tratara sobre ..."
                img1={d3}
                img2={d4}
            />
            <EventHomeData
                className="nextEventsReverse"
                heading="6 Evento"
                text="La facultad de ingenieria de la universidad autonoma de chihuahua
            los invite a participar en el proximo evento que se tratara sobre ..."
                img1={d3}
                img2={d4}
            />
        </div>
    )
}

export default EventHome