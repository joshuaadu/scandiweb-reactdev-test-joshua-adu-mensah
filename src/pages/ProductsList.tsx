import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductListLayout from "../layout/ProductListLayout";
import { mapCurrencyToProp } from "../store/statePropsFunctions";

const connector = connect(mapCurrencyToProp);

type PropsFromStore = ConnectedProps<typeof connector>;
type Props = PropsFromStore & { category?: string; currency?: string };

class ProductsList extends Component<Props> {
	render() {
		return (
			<main>
				<h2>{this.props.category}</h2>
				<ProductListLayout>
					<>
						<ProductCard
							src="https://source.unsplash.com/random/?dress"
							title="dress"
							price="200"
							currency={this.props.currency}
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
			</main>
		);
	}
}

export default connector(ProductsList);
