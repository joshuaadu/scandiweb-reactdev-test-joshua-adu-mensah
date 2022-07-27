// Switch Currency

const mapCurrencyStateToProps = (state) => {
	console.log("state", state);
	return {
		currency: state.currency,
		currencySymbol: state.currencySymbol,
		currencyList: state.currencyList,
	};
};

export { mapCurrencyStateToProps };
