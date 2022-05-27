import { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
    
    render() {
        return <nav>
            <ul>
                <li><Link to="women">women</Link></li>
                <li><Link to="men">men</Link></li>
                <li><Link to="kids">kids</Link></li>
            </ul>
        </nav>
    }
}

export default NavBar