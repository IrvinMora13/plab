import "./carrersOpt.css"
import CarrersData from "./CarrersData"
import d6 from "../assets/igm.jpg"
import d7 from "../assets/igg.jpg"
import d8 from "../assets/igf.jpg"
import d9 from "../assets/icc.jpg"
import d10 from "../assets/itp.jpg"
import d11 from "../assets/isf.jpg"
import d12 from "../assets/hard.jpg"
import d13 from "../assets/imm.jpg"
import d14 from "../assets/itopo.jpg"
import d15 from "../assets/aero.jpg"
import d16 from "../assets/civil.jpg"


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
                    text="El Ingeniero en Tecnología de Procesos tiene entre sus funciones, integrar, diseñar, planear, mantener, dirigir y controlar los sistemas productivos y de servicios en las diversas industrias centrándose en tres ejes principales: 
                    calidad, productividad y mejoramiento de la cadena de suministros.
                    Para más información visita la página oficial https://uach.mx/pregrado/ingeniero-tecnologia-procesos/"
                />
                <CarrersData
                    image={d11}
                    heading="Ingeniero de Software"
                    text="El Ingeniero de Software, posee un análisis y razonamiento lógico para la adecuada implementación de técnicas
                     para el modelado, proceso y diseño de software además de trabajar en ambientes múltiples de programación como web y dispositivos móviles
                     Para más información visita la página oficial https://uach.mx/pregrado/ingeniero-software/"
                />
            </div>
            <div className="carrersCards">
                <CarrersData
                    image={d12}
                    heading="Ingeniero en Hardware"
                    text="Opcioness"
                />
                <CarrersData
                    image={d13}
                    heading="Ingenero en Minas y Metalurgia"
                    text="Opcioness"
                />
                <CarrersData
                    image={d14}
                    heading="Ingeniero en Sistemas Topográficos"
                    text="Opcioness"
                />
            </div>
            <div className="carrersCards">
                <CarrersData
                    image={d15}
                    heading="Ingeniero Aeroespacial"
                    text="Opcioness"
                />
                <CarrersData
                    image={d16}
                    heading="Ingeniero Civil"
                    text="Opcioness"
                />
            </div>
        </div>
    )
}

export default CarrersOpt