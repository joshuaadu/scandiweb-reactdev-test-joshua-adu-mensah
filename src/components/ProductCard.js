import { Component } from "react";
import styles from "../styles/ProductCard.module.scss";
import { ReactComponent as CartIcon } from "../assets/cart-icon-green.svg";
import CurrencyContext from "../store/currency-context";

class ProductCard extends Component {
  static contextType = CurrencyContext;
  render() {
    const { currencySymbol } = this.context;
    console.log(currencySymbol);
    return (
      <div className={styles.card}>
        <img src={this.props.src} alt={`${this.props.title} item`} />
        <p className={styles.title}>{this.props.title}</p>
        <p className={styles.price}>{`${currencySymbol}${Number(
          this.props.price
        ).toFixed(2)}`}</p>
        <CartIcon className={styles["cart-icon"]} />
      </div>
    );
  }
}

export default ProductCard;
