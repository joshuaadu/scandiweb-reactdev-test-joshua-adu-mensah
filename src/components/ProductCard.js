import { Component } from "react";
import styles from "../styles/ProductCard.module.scss";
import { ReactComponent as CartIcon } from "../assets/cart-icon-green.svg";
import { Link } from "react-router-dom";

class ProductCard extends Component {
	state = {
		isLoaded: false,
	};

	componentDidMount() {
		this.timer = setTimeout(
			() =>
				this.setState({
					isLoaded: true,
				}),
			1500
		);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	render() {
		const headerClassName = `${styles.header} ${
			!this.state.isLoaded ? styles["animated-bg"] : ""
		}`;
		const textClassName = `${
			!this.state.isLoaded
				? styles["animated-bg"] + " " + styles["animated-bg-text"]
				: ""
		} `;
		return (
			<div className={styles.card}>
				<div className={headerClassName}>
					<img
						style={{
							visibility: this.state.isLoaded ? "visible" : "hidden",
						}}
						src={this.props.src}
						alt={`${this.props.title} item`}
					/>
				</div>
				<div className={styles.content}>
					<p className={`${styles.title} ${textClassName}`}>
						<Link to="/item">
							{this.state.isLoaded ? this.props.title : "text"}
						</Link>
					</p>
					<p className={`${styles.price} ${textClassName}`}>
						{this.state.isLoaded
							? `${this.props.currency}${Number(this.props.price).toFixed(2)}`
							: "text"}
					</p>
					<CartIcon className={`${styles["cart-icon"]} `} />
				</div>
			</div>
		);
	}
}

export default ProductCard;
