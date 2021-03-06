import { Component } from "react";
import styles from "../styles/CurrencyList.module.scss";

class CurrencyList extends Component {
	selectHandler(currency) {
		this.props.select(currency);
		this.props.close();
	}
	render() {
		return (
			<div className={styles["dropdown-list"]}>
				{this.props.list.map(([currency, symbol]) => (
					<span
						onClick={() => this.selectHandler(currency)}
						key={currency}
					>{`${symbol} ${currency}`}</span>
				))}
			</div>
		);
	}
}

export default CurrencyList;
