import { Component } from "react";
import { ReactComponent as SelectIcon } from "../assets/arrow-up.svg";
import CurrencyContext from "../store/currency-context";
import styles from "../styles/CurrencySwitcher.module.scss";
import CurrencyList from "./CurrencyList";

const currencyList = new Map([
	["USD", "$"],
	["EUR", "€"],
	["JPY", "¥"],
]);

class CurrencySwitcher extends Component {
	static contextType = CurrencyContext;

	state = {
		currencySymbol: currencyList.get(this.context.currency),
		showList: false,
	};

	select(currency) {
		const symbol = currencyList.get(currency);
		this.setState({ currencySymbol: symbol });
		this.context.switchCurrency(currency, symbol);
	}

	showListHandler = () => {
		this.setState((prevState) => {
			return { showList: !prevState.showList };
		});
	};

	render() {
		const { currency } = this.context;
		console.log("CurrenyOption Component", currency);
		return (
			<div className={styles["currency-option"]}>
				<span>{this.state.currencySymbol}</span>
				<span className={styles.icon} onClick={this.showListHandler.bind(this)}>
					<SelectIcon size="large" />
				</span>
				{this.state.showList && (
					<CurrencyList
						list={Array.from(currencyList)}
						select={this.select.bind(this)}
						close={this.showListHandler.bind(this)}
					/>
				)}
			</div>
		);
	}
}

export default CurrencySwitcher;
