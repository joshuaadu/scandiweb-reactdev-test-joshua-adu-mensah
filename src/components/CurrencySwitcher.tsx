import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";

import { ReactComponent as SelectIcon } from "../assets/arrow-up.svg";
import styles from "../styles/CurrencySwitcher.module.scss";
import CurrencyList from "./CurrencyList";
import { mapDispatchToCurrencyProps } from "../store/dispatchFunctions";
import { mapCurrencyStateToProps } from "../store/statePropsFunctions";

type State = {
	showList: boolean;
};

const connector = connect(mapCurrencyStateToProps, mapDispatchToCurrencyProps);

type Props = ConnectedProps<typeof connector>;

class CurrencySwitcher extends Component<Props, State> {
	state = {
		showList: false,
	};

	showListHandler() {
		this.setState((prevState) => {
			return { showList: !prevState.showList };
		});
	}

	selectHandler(currency: string) {
		// console.log()
		this.props.select(currency);
	}

	render() {
		console.log("CurrenyOption Component", this.props.currency);
		return (
			<div className={styles["currency-option"]}>
				<span>{this.props.currencySymbol}</span>
				<span className={styles.icon} onClick={this.showListHandler.bind(this)}>
					<SelectIcon />
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

export default connector(CurrencySwitcher);
