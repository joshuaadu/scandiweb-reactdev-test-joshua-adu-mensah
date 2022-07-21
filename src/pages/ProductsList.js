import { Component } from "react";
import { Routes,Route } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductListLayout from "../layout/ProductListLayout";


class ProductsList extends Component {
	render() {
		return (
			<Routes>
				<Route path="/"/>
			<>
				<h2>{this.props.category}</h2>
				<ProductListLayout>
					<>
						<ProductCard
							src="https://source.unsplash.com/random/?dress"
							title="dress"
							price="200"
							currency="$"
						/>
						<ProductCard
							src="https://source.unsplash.com/random/?dress"
							title="dress"
							price="200"
							currency="$"
						/>
						<ProductCard
							src="https://source.unsplash.com/random/?dress"
							title="dress"
							price="200"
							currency="$"
						/>
						<ProductCard
							src="https://source.unsplash.com/random/?dress"
							title="dress"
							price="200"
							currency="$"
						/>
					</>
				</ProductListLayout>
			</>
			</Routes>

		);
	}
}

export default ProductsList;
