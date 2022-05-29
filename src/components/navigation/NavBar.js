import { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/NavBar.module.scss";

class NavBar extends Component {
  render() {
    return (
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink
              to="women"
              className={({ isActive }) =>
                isActive ? styles["link-active"] : undefined
              }
            >
              women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="men"
              className={({ isActive }) =>
                isActive ? styles["link-active"] : undefined
              }
            >
              men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="kids"
              className={({ isActive }) =>
                isActive ? styles["link-active"] : undefined
              }
            >
              kids
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
