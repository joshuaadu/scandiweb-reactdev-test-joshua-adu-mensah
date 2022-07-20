import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Layout from "./layout/Layout";
import ProductsListing from "./pages/ProductsListing";
import CurrencyContext from "./store/currency-context";

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
			<CurrencyContext.Provider
				value={{
					currency,
					currencySymbol,
					switchCurrency,
				}}
			>
				<div className="App">
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<ProductsListing />} />
							<Route path="women" element={<ProductsListing />} />
							<Route path="men" element={<h2>men</h2>} />
							<Route path="kids" element={<h2>kids</h2>} />
						</Route>
					</Routes>
				</div>
			</CurrencyContext.Provider>
		);
	}
}

export default App;
