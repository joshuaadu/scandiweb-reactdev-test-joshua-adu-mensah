import { Component } from "react";
import ProductCard from "../components/ProductCard";
import ProductList from "../layout/ProductList";

class ProductsListing extends Component {
	render() {
		return (
			<>
				<h2>women</h2>
				<ProductList>
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
				</ProductList>
			</>
		);
	}
}

export default ProductsListing;
