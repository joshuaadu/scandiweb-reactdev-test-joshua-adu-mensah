import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import CurrencyContext from "./store/currency-context";

class App extends Component<{}, { currency: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      currency: "USD",
    };
  }

  switchCurrency(newCurrency: string) {
    this.setState({ currency: newCurrency });
  }
  render() {
    return (
      <CurrencyContext.Provider
        value={{
          currency: this.state,
          switchCurrency: this.switchCurrency.bind(this),
        }}
      >
        <div className="App">
          <Header />
          <Routes>
            <Route index element={<h2>women</h2>} />
            <Route path="women" element={<Products />} />
            <Route path="men" element={<h2>men</h2>} />
            <Route path="kids" element={<h2>kids</h2>} />
          </Routes>
        </div>
      </CurrencyContext.Provider>
    );
  }
}

export default App;
