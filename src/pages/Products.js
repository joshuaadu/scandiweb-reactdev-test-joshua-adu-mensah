import { Component } from "react";
import ProductCard from "../components/ProductCard";
import ProductCategoryView from "../layout/ProductCategoryView";

class Products extends Component {
  render() {
    return (
      <main>
        <h2>women</h2>
        <ProductCategoryView>
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
        </ProductCategoryView>
      </main>
    );
  }
}

export default Products;
