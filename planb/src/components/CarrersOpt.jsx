import "./carrersOpt.css"
import CarrersData from "./CarrersData"
import d6 from "../assets/6.jpg"
import d7 from "../assets/7.jpg"
import d8 from "../assets/4.jpg"

function CarrersOpt(params) {
    return (
        <div className="carrers">
            <h1>Programas educativos</h1>
            <p>La Facultad de Ingeniería tiene un fuerte enfoque en las oportunidades de investigación y desarrollo asociadas con las necesidades tecnológicas de nuestra sociedad. La Facultad mantiene un fuerte sentido de identidad y cooperación entre estudiantes, profesores y personal, y se enorgullece de sus fuertes vínculos con la industria y grupos colegiados de profesionistas de la ingeniería.
            </p>
            <div className="carrersCards">
                <CarrersData
                    image={d6}
                    heading="Carrera 1"
                    text="Opcioness"
                />
                <CarrersData
                    image={d7}
                    heading="Carrera 2"
                    text="Opcioness"
                />
                <CarrersData
                    image={d8}
                    heading="Carrera 3"
                    text="Opcioness"
                />
            </div>
            <div className="carrersCards">
                <CarrersData
                    image={d6}
                    heading="Carrera 4"
                    text="Opcioness"
                />
                <CarrersData
                    image={d7}
                    heading="Carrera 5"
                    text="Opcioness"
                />
                <CarrersData
                    image={d8}
                    heading="Carrera 6"
                    text="Opcioness"
                />
            </div>
            <div className="carrersCards">
                <CarrersData
                    image={d6}
                    heading="Carrera 7"
                    text="Opcioness"
                />
                <CarrersData
                    image={d7}
                    heading="Carrera 8"
                    text="Opcioness"
                />
                <CarrersData
                    image={d8}
                    heading="Carrera 9"
                    text="Opcioness"
                />
            </div>
            <div className="carrersCards">
                <CarrersData
                    image={d6}
                    heading="Carrera 10"
                    text="Opcioness"
                />
                <CarrersData
                    image={d7}
                    heading="Carrera 11"
                    text="Opcioness"
                />
            </div>
        </div>
    )
}

export default CarrersOpt