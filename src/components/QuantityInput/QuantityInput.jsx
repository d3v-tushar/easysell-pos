import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../../App";

const QuantityInput = ({ product }) => {
  const { checkout, setCheckOut } = useContext(ProductContext);
  let newCheckout = [...checkout]
  let [input, setInput] = useState(1);
  let products = [];
  const selectedProduct = newCheckout.find((item) => item._id == product._id);
  const restProducts = newCheckout.filter((item) => item._id !== product._id);

  // selectedProduct.quantity = parseInt(input);
  // if(selectedProduct.quantity !== product.quantity){
  //   products = [...restProducts, selectedProduct];
  //   setCheckOut(products);
  // }
  // // console.log(products);
  // console.log(checkout);
  // console.log(total);
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center border border-gray-200 rounded">
        <button
          type="button"
          onClick={() => setInput(input - 1)}
          className="w-8 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          &minus;
        </button>

        <input
          type="number"
          id="Quantity"
          value={product.quantity}
          readOnly
          className="h-10 w-12 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          onClick={() => setInput(input + 1)}
          className="w-8 h-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
