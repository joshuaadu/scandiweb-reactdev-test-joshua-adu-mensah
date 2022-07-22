import { Component } from "react";
import Gallery from "../components/UI/Gallery";
import Sizes from "../components/UI/Sizes";
import styles from "../styles/ProductDescription.module.scss";

const DUMMYGALLERY = [
	"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
	"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
	"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
	"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
	"https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
];

class ProductDescription extends Component {
	render() {
		return (
			<main className={styles.main}>
				<Gallery gallery={DUMMYGALLERY} name="Nike Air Huarache Le" />
				<aside>
					<h2>Apollo</h2>
					<p>Running Short</p>
					<Sizes sizes={["S", "M"]} />
				</aside>
			</main>
		);
	}
}

export default ProductDescription;
