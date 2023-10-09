import { Component } from "react";
import "./eventsHome.css"
import d1 from "../assets/3.jpg"
import d2 from "../assets/4.jpg"
import d3 from "../assets/5.jpg"
import d4 from "../assets/6.jpg"

class EventHomeData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="description">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}
                    </p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        )
    }
}

export default EventHomeData