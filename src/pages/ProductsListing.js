import { Component } from "react";
import ProductCard from "../components/ProductCard";
import ProductList from "../layout/ProductList";
import styles from "../styles/Products.module.scss";

class ProductsListing extends Component {
  render() {
    return (
      <main className={styles.main}>
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
      </main>
    );
  }
}

export default ProductsListing;
