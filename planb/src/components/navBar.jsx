import { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <h1 className="NavBarLogo">UACH</h1>
                <ul className="NavBarMenu">
                    <li>
                        <a>
                            <i className="fa-solid fa-house"></i>Inicio</a>
                    </li>
                </ul>
            </nav>
        )
    }
};

export default NavBar;