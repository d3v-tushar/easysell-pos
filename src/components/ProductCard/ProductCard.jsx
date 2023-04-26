import React, { useContext } from "react";
import { ProductContext } from "../../App";

const ProductCard = ({product}) => {
  const { checkout, setCheckOut } = useContext(ProductContext);

  const handleCheckOut = (product) => {
    let cart = [...checkout];
    let newCart = [];
    const existedItem = cart.find(item => item._id == product._id)
    if(!existedItem){
        product.quantity = 1;
        newCart = [...cart, product];
    }
    else{
        const rest = cart.filter(item => item._id !== product._id);
        existedItem.quantity = existedItem.quantity + 1;
        newCart = [...rest, existedItem];
    }
    setCheckOut(newCart);
  };

  console.log(checkout);
  return (
    <div className="group border-2 rounded-lg p-5 relative" onClick={() =>handleCheckOut(product)}>
              <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
  );
};

export default ProductCard;
