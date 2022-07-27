import { createStore } from "redux";

const initialState = {
	currency: "USD",
	currencySymbol: "$",
	currencyList: new Map([
		["USD", "$"],
		["EUR", "€"],
		["JPY", "¥"],
	]),
	changeCurrency: (currency, currencyList) => currencyList.get(currency),
};

const storeReducer = (state = initialState, action) => {
	if (action.type === "change-currency") {
		return {
			...state,
			currency: action.payload,
			currencySymbol: state.changeCurrency(action.payload),
		};
	}
};

const store = createStore(storeReducer);

export default store;
