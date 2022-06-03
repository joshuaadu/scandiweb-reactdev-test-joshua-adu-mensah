import { Component } from "react";
import styles from "../styles/ProductCategory.module.scss";

class ProductCategoryView extends Component {
  render() {
    return <section className={styles.main}>{this.props.children}</section>;
  }
}

export default ProductCategoryView;
