import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import ProductDescription from "./pages/ProductDescription";
import ProductsList from "./pages/ProductsList";

class App extends Component {
	render() {
		return (
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
		);
	}
}

export default App;
