import "./footer.css"
import d1 from "../assets/logou.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="logo">
                    <img alt="logou" src={d1} className="logou"/>
                    <p>"naturam subiecit aliis"</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Enlaces relevantes</h4>
                    <a href="/">Fechas importantes</a>
                    <a href="/">Admision</a>
                </div>
                <div>
                    <h4>Contacto</h4>
                    <a href="/">Correo</a>
                    <p>xxx-xxx-xxxx</p>
                </div>
            </div>
        </div>
    )
}

export default Footer