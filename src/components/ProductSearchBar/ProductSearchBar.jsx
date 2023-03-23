import React from "react";

const ProductSearchBar = ({setQuery}) => {
  return (
    <div className="bg-gray-100 sticky top-0 z-20 shadow-xl py-4 px-5 flex justify-between gap-4">
   

<label
  htmlFor="searchProduct"
  className="relative w-full block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    // onChange={setSelected}
    onChange={(event) => setQuery(event.target.value)}
    type="text"
    id="searchProduct"
    placeholder="Search"
    className="peer h-8 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Search
  </span>
</label>


      <a
        className="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="/download"
      >
        Search
      </a>
    </div>
  );
};

export default ProductSearchBar;