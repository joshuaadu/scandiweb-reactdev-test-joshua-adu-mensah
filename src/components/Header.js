import React, { Component } from "react";
import NavBar from "./navigation/NavBar";
import { ReactComponent as BrandLogo } from "../assets/brand-icon.svg";
import { ReactComponent as CartIcon } from "../assets/cart-icon.svg";
import styles from "../styles/Header.module.scss";
import CurrencyOption from "./CurrencyOption";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <NavBar />
        <div className={styles["brand-icon"]}>
          <BrandLogo />
        </div>
        <div className={styles["action-icons"]}>
          <CurrencyOption />
          <CartIcon />
        </div>
      </header>
    );
  }
}

export default Header;
