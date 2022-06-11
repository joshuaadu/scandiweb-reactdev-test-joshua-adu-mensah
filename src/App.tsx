import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
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
          <Header />
          <Routes>
            <Route index element={<h2>women</h2>} />
            <Route path="women" element={<ProductsListing />} />
            <Route path="men" element={<h2>men</h2>} />
            <Route path="kids" element={<h2>kids</h2>} />
          </Routes>
        </div>
      </CurrencyContext.Provider>
    );
  }
}

export default App;
