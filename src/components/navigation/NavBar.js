import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.scss";

class NavBar extends Component {
  render() {
    return (
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Link to="women">women</Link>
          </li>
          <li>
            <Link to="men">men</Link>
          </li>
          <li>
            <Link to="kids">kids</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
