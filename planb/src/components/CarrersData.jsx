import "./carrersOpt.css"

function CarrersData(props) {
    return (
        <div className="cardCarrer">
            <div className="imageCard">
                <img alt="image" src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default CarrersData