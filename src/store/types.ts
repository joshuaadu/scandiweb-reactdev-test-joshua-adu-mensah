export type CurrencyMap = Map<string, string>;

export type Store = {
	currency: string;
	currencySymbol: string | undefined;
	currencyList: CurrencyMap;
	changeCurrency: (
		currency: string,
		currencyList: CurrencyMap
	) => string | undefined;
};
