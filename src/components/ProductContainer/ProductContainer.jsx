import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = ({ filteredProducts, query }) => {
  //const demoArray = Array.apply(null, Array(12));
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul className="-my-6 grid grid-cols-3 gap-y-8 gap-x-5 mx-5 items-stretch divide-y divide-gray-200">
          {filteredProducts.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))
          )}
        </ul>
      </div>
    </div>
    //         <div className='grid grid-cols-3 m-8 gap-5 max-h-screen'>

    //                 {
    //                 filteredProducts.length === 0 && query !== '' ? (
    //                     <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
    //                       Nothing found.
    //                     </div>) : filteredProducts.map((product) => <ProductCard product={product} key={product.id}/>)
    // }
    //         </div>
  );
};

export default ProductContainer;
