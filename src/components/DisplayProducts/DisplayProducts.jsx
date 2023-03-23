import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ProductSearchBar from "../ProductSearchBar/ProductSearchBar";

const DisplayProducts = ({filteredProducts, query}) => {
  return <ProductContainer filteredProducts={filteredProducts} query={query} />;
};

export default DisplayProducts;
