import { createStore, AnyAction } from "redux";
import { CurrencyMap, Store } from "./types";



const initialState: Store = {
	currency: "USD",
	currencySymbol: "$",
	currencyList: new Map([
		["USD", "$"],
		["EUR", "€"],
		["JPY", "¥"],
	]),
	changeCurrency: (currency: string, currencyList: CurrencyMap) =>
		currencyList.get(currency),
};

const storeReducer = (state = initialState, action: AnyAction): Store => {
	if (action.type === "change-currency") {
		return {
			...state,
			currency: action.payload,
			currencySymbol: state.changeCurrency(action.payload, state.currencyList),
		};
	}

	return state;
};

const store = createStore(storeReducer);

export default store;
