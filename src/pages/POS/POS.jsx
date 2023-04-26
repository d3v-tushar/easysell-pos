import React, { useContext, useState } from 'react';
import Cart from '../../components/Cart/Cart';
import DisplayProducts from '../../components/DisplayProducts/DisplayProducts';
import ProductSearchBar from '../../components/ProductSearchBar/ProductSearchBar';
import { ProductContext } from '../../App';
import useTitle from '../../hooks/UseTitle/UseTitle';

const POS = () => {
  useTitle('POS');
  const {products} = useContext(ProductContext);
  const clonedProducts = [...products];
  const [selected, setSelected] = useState(products[0]);
  const [query, setQuery] = useState('');
  // console.log(query);
  // console.log(selected);

const filteredProducts =
  query === ''
    ? clonedProducts
    : clonedProducts.filter((product) =>
        (product.name).toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    )
    return (
        <div className='w-full mx-auto flex'>
            <div className='h-[92vh] overflow-y-scroll'>
               <ProductSearchBar setQuery={setQuery}/>
               <DisplayProducts filteredProducts={filteredProducts} query={query}/>
            </div>
            <Cart/>
        </div>
    );
};

export default POS;