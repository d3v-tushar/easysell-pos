import React, { useContext } from "react";
import { ProductContext } from "../../App";
import QuantityInput from "../QuantityInput/QuantityInput";
import { CiCircleRemove } from "react-icons/ci";

const CartItem = ({ product }) => {
  const { checkout, setCheckOut } = useContext(ProductContext);
  const handleRemove = () => {
    const cart = [...checkout];
    const newCart = cart.filter((CartProduct) => CartProduct !== product);
    setCheckOut(newCart);
  };



  return (
    <li className="flex justify-center items-stretch py-6">
                        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product.href}>{(product.name).length <= 16 ? product.name : (product.name).slice(0, 15)}{(product.name).length >= 16 && "..."}</a>
                              </h3>
                              <p className="ml-4">${product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Category: {product.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <QuantityInput product={product}/>

                            <div className="flex">
                              <button
                              onClick={handleRemove}
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                <CiCircleRemove className="text-4xl text-red-600 font-bold"/>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
  );
};

export default CartItem;
