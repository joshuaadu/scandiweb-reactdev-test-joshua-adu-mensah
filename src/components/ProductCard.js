import { Component } from "react";
import styles from "../styles/ProductCard.module.scss";
import { ReactComponent as CartIcon } from "../assets/cart-icon-green.svg";

class ProductCard extends Component {
	render() {
		return (
			<div className={styles.card}>
				<img src={this.props.src} alt={`${this.props.title} item`} />
				<p className={styles.title}>{this.props.title}</p>
				<p className={styles.price}>{`${this.props.currency}${Number(
					this.props.price
				).toFixed(2)}`}</p>
				<CartIcon className={styles["cart-icon"]} />
			</div>
		);
	}
}

export default ProductCard;
