import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<h2>women</h2>} />
          <Route path="women" element={<Products />} />
          <Route path="men" element={<h2>men</h2>} />
          <Route path="kids" element={<h2>kids</h2>} />
        </Routes>
      </div>
    );
  }
}

export default App;
