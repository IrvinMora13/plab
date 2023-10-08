import { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
import { MenuItems } from "./menuItems"

class NavBar extends Component {
    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="NavBarLogo">UACH</h1>
                <ul className="NavBarMenu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className={item.icon}>
                                    </i>{item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        )
    }
};

export default NavBar;