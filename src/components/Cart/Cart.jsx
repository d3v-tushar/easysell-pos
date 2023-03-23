import React, { Fragment, useContext, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { ProductContext } from "../../App";


const Cart = () => {
  const {checkout} = useContext(ProductContext);
  let total = 0;
  checkout.map(product => total = total + parseInt(product.price));
  console.log(total);
  
  return (
          <div className="flex flex-col h-[92vh] bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start z-10 sticky top-0 bg-white justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  Shopping Cart
                </h2>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {
                      checkout.length == 0 ? <div><h2 className="text-center font-semibold">Nothing In Cart</h2></div> :
                      checkout.map((product) => (
                        <CartItem key={product.id} product={product}/>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>VAT</p>
                <p>${total * 0.05}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>${total+(total * 0.05)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </a>
              </div>
              
            </div>
          </div>
      
  );
};

export default Cart;
