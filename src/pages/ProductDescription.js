import { Component } from "react";
import Sizes from "../components/UI/Sizes";

class ProductDescription extends Component {
	render() {
		return (
			<>
				<section>
					<div></div>
					<div></div>
				</section>
				<aside>
					<h2>Apollo</h2>
					<p>Running Short</p>
					<Sizes sizes={["S", "M"]} />
				</aside>
			</>
		);
	}
}

export default ProductDescription;
