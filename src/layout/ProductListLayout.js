import { Component } from "react";
import styles from "../styles/ProductList.module.scss";

class ProductListLayout extends Component {
  render() {
    return (
      <section className={styles["grid-list"]}>{this.props.children}</section>
    );
  }
}

export default ProductListLayout;
