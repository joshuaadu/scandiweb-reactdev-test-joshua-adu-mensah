// Switch Currency

const mapDispatchToCurrencyProps = (dispatch: any) => {
	return {
		select: (currency: string) =>
			dispatch({ type: "change-currency", payload: currency }),
	};
};

export { mapDispatchToCurrencyProps };
