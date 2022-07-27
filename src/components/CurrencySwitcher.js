import { Component } from "react";
import { connect } from "react-redux";

import { ReactComponent as SelectIcon } from "../assets/arrow-up.svg";
import styles from "../styles/CurrencySwitcher.module.scss";
import CurrencyList from "./CurrencyList";
// import { mapDispatchToCurrencyProps } from "../store/dispatchFunctions";
// import { mapCurrencyStateToProps } from "../store/statePropsFunctions";

// import CurrencyContext from "../store/currency-context";

// const currencyList = new Map([
// 	["USD", "$"],
// 	["EUR", "€"],
// 	["JPY", "¥"],
// ]);

class CurrencySwitcher extends Component {
	// static contextType = CurrencyContext;

	// state = {
	// 	currencySymbol: currencyList.get(this.context.currency),
	// 	showList: false,
	// };

	state = {
		showList: false,
	};

	// select(currency) {
	// 	const symbol = currencyList.get(currency);
	// 	this.setState({ currencySymbol: symbol });
	// 	this.context.switchCurrency(currency, symbol);
	// }

	showListHandler() {
		this.setState((prevState) => {
			return { showList: !prevState.showList };
		});
	}

	selectHandler(currency) {
		this.props.select(currency);
	}

	render() {
		// const { currency } = this.context;
		console.log("CurrenyOption Component", this.props.currency);
		return (
			<div className={styles["currency-option"]}>
				<span>{this.props.currencySymbol}</span>
				<span className={styles.icon} onClick={this.showListHandler.bind(this)}>
					<SelectIcon size="large" />
				</span>
				{this.state.showList && (
					<CurrencyList
						list={Array.from(this.props.currencyList)}
						select={this.selectHandler.bind(this)}
						close={this.showListHandler.bind(this)}
					/>
				)}
			</div>
		);
	}
}

const mapCurrencyStateToProps = (state) => {
	console.log("state", state);
	return {
		currency: state.currency,
		currencySymbol: state.currencySymbol,
		currencyList: state.currencyList,
	};
};

const mapDispatchToCurrencyProps = (dispatch) => {
	return {
		select: (currency) =>
			dispatch({ type: "change-currency", payload: currency }),
	};
};

export default connect(
	mapCurrencyStateToProps,
	mapDispatchToCurrencyProps
)(CurrencySwitcher);
