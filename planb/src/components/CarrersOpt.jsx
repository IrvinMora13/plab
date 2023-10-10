import "./carrersOpt.css"
import CarrersData from "./CarrersData"
import d6 from "../assets/igm.jpg"
import d7 from "../assets/igg.jpg"
import d8 from "../assets/igf.jpg"
import d9 from "../assets/icc.jpg"
import d10 from "../assets/itp.jpg"


function CarrersOpt(params) {
    return (
        <div className="carrers">
            <h1>Programas educativos</h1>
            <p>La Facultad de Ingeniería tiene un fuerte enfoque en las oportunidades de investigación y desarrollo asociadas con las necesidades tecnológicas de nuestra sociedad. La Facultad mantiene un fuerte sentido de identidad y cooperación entre estudiantes, profesores y personal, y se enorgullece de sus fuertes vínculos con la industria y grupos colegiados de profesionistas de la ingeniería.
            </p>
            <div className="carrersCards">
                <CarrersData
                    image={d6}
                    heading="Ingeniero Matemático"
                    text="Un Ingeniero Matemático tiene entre sus herramientas una base matemática muy sólida que le permite modelar diversos fenómenos. Además cuenta con conocimientos de física, computación y metodologías industriales que le permiten analizar con rigor estricto los modelos que se usaran. El fundamento de análisis matemático, sus bases en estadística y programación le permiten abordar problemas 
                    y retos con una base matemática más estricta que otras profesiones afines al sector. Para más información visita la página oficial https://uach.mx/pregrado/ingeniero-matematico/"
                />
                <CarrersData
                    image={d7}
                    heading="Ingeniero geólogo"
                    text="La carrera de Ingeniero Geólogo forma profesionistas que aplican sus conocimientos sobre los procesos naturales que han modificado al planeta tierra, 
                    en particular su corteza, para beneficio de la sociedad. Para más información visita la página oficial https://uach.mx/pregrado/ingeniero-geologo/"
                />
                <CarrersData
                    image={d8}
                    heading="Ingeniero Físico"
                    text="Un Ingeniero Físico tiene entre sus herramientas una base matemática que le permite modelar diversos fenómenos y, además, cuenta con un vasto conocimiento de las leyes que rigen el comportamiento de la materia 
                    y la energía así como su comportamiento en el espacio-tiempo. Para más información visita la página oficial https://uach.mx/pregrado/ingeniero-fisico/"
                />
                
            </div>
            <div className="carrersCards">
                <CarrersData
                    image={d9}
                    heading="Ingeniero en Ciencias de la Computación"
                    text="La innovación tecnológica para la práctica de las ingenierías significa dar respuesta a las necesidades del mercado en el
                     ambiente tecnológico mundial y responder a las exigencias de la globalización.
                     Para más información visita la página oficial https://uach.mx/pregrado/ingeniero-ciencias-computacion/"
                />
                <CarrersData
                    image={d10}
                    heading="Ingeniero en Tecnología de Procesos"
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