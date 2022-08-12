// Switch Currency

import { CurrencyMap, Store } from "./types";

type ReturnState = {
	currency: string;
	currencySymbol: string | undefined;
	currencyList: CurrencyMap;
};

export const mapCurrencyStateToProps = (state: Store): ReturnState => {
	console.log("state", state);
	return {
		currency: state.currency,
		currencySymbol: state.currencySymbol,
		currencyList: state.currencyList,
	};
};

export const mapCurrencyToProp = (state: Store, ownProps: any): object => {
	return { currency: state.currencySymbol, ...ownProps };
};
