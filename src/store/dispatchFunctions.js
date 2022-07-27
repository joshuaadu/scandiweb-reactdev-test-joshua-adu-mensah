// Switch Currency

const mapDispatchToCurrencyProps = (dispatch) => {
	return {
		select: (currency) =>
			dispatch({ type: "change-currency", payload: currency }),
	};
};

export { mapDispatchToCurrencyProps };
