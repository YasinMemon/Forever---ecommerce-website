import React from 'react';
import Collections from './Collections';

function CollectionPage({ product }) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Filters Section */}
      <div className="filters hidden md:block mt-8 text-left md:w-[24vw]">
        <h1 className="ml-6 md:ml-16 font-bold text-xl md:text-2xl">Filters</h1>

        {/* Category Filter */}
        <div className="filter px-3 py-4 ml-6 md:ml-16 mt-4 ring-1 ring-black rounded-sm">
          <h3 className="uppercase font-bold pb-3">Category</h3>
          <div className="categories">
            <div className="category flex gap-2">
              <input type="checkbox" name="category" id="men" />
              <label htmlFor="men">Men</label>
            </div>
            <div className="category flex gap-2">
              <input type="checkbox" name="category" id="women" />
              <label htmlFor="women">Women</label>
            </div>
            <div className="category flex gap-2">
              <input type="checkbox" name="category" id="kids" />
              <label htmlFor="kids">Kids</label>
            </div>
          </div>
        </div>

        {/* Type Filter */}
        <div className="filter px-3 py-4 ml-6 md:ml-16 mt-4 ring-1 ring-black rounded-sm">
          <h3 className="uppercase font-bold pb-3">Type</h3>
          <div className="categories">
            <div className="category flex gap-2">
              <input type="checkbox" name="type" id="topwear" />
              <label htmlFor="topwear">Topwear</label>
            </div>
            <div className="category flex gap-2">
              <input type="checkbox" name="type" id="bottomwear" />
              <label htmlFor="bottomwear">Bottomwear</label>
            </div>
            <div className="category flex gap-2">
              <input type="checkbox" name="type" id="winterwear" />
              <label htmlFor="winterwear">Winterwear</label>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Section */}
      <div className="collection w-full mx-3 md:w-[60vw] mt-6 md:mt-0">
        <Collections products={product}>
          {/* Heading and Sorting */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg md:text-xl whitespace-nowrap">All Collection</h1>
            <select name="sortby" className="text-sm border border-gray-300 rounded-md p-1">
              <option value="relevant">Sort by: Relevant</option>
              <option value="Low to High">Sort by: Low to High</option>
              <option value="High to Low">Sort by: High to Low</option>
            </select>
          </div>
        </Collections>
      </div>
    </div>
  );
}

export default CollectionPage;
