import { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
import { MenuItems } from "./MenuItems";
import logou from "../assets/logou.jpg"


class NavBar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavBarItems">
                
                <img alt="logou" src={logou} className="logou"/> 

                <div className="MenuIcons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "NavBarMenu active" : "NavBarMenu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}>
                                    </i>{item.title}
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        )
    }
};

export default NavBar;