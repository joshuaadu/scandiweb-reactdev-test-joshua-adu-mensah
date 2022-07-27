import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductDescription from "./pages/ProductDescription";
import ProductsList from "./pages/ProductsList";
import { CurrencyProvider } from "./store/currency-context";

class App extends Component {
	state = {
		currency: "USD",
		currencySymbol: "$",
	};

	switchCurrency = (currency: string, currencySymbol: string) => {
		this.setState((prevState) => ({ currency, currencySymbol }));
	};
	render() {
		const { currency, currencySymbol } = this.state;
		const { switchCurrency } = this;
		return (
			<CurrencyProvider
				value={{
					currency,
					currencySymbol,
					switchCurrency,
				}}
			>
				<div className="App">
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Navigate to="women" />} />
							<Route path="women" element={<ProductsList category="Women" />} />
							<Route path="men" element={<ProductsList category="Men" />} />
							<Route path="kids" element={<ProductsList category="Kids" />} />
							<Route path="item" element={<ProductDescription />} />
						</Route>
					</Routes>
				</div>
			</CurrencyProvider>
		);
	}
}

export default App;
