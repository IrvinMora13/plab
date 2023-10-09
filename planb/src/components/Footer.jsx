import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Logo UACH</h1>
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