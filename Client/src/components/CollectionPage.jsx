import React from 'react'
import Collections from './Collections'

function CollectionPage() {
  return (
    <div className='flex'>
      <div className="filters mt-8 text-left md:w-[24vw]">
        <h1 className='ml-16 font-bold text-2xl'>Filters</h1>
        <div className="filter px-3 py-4 ml-16 mt-4 ring-1 ring-black rounded-sm mr-10">
          <h3 className='uppercase font-bold pb-3'>Category</h3>
          <div className="categories">
          <div className="category flex gap-2">
          <input type="checkbox" name="category" id="men" />
          <label htmlFor="category">Men</label>
          </div>
          <div className="category flex gap-2">
          <input type="checkbox" name="category" id="men" />
          <label htmlFor="category">Women</label>
          </div>
          <div className="category flex gap-2">
          <input type="checkbox" name="category" id="men" />
          <label htmlFor="category">Kids</label>
          </div>
          </div>
        </div>
        <div className="filter px-3 py-4 ml-16 mt-4 ring-1 ring-black rounded-sm mr-10">
          <h3 className='uppercase font-bold pb-3'>Type</h3>
          <div className="categories">
          <div className="category flex gap-2">
          <input type="checkbox" name="category" id="men" />
          <label htmlFor="category">Topwear</label>
          </div>
          <div className="category flex gap-2">
          <input type="checkbox" name="category" id="men" />
          <label htmlFor="category">Bottomwear</label>
          </div>
          <div className="category flex gap-2">
          <input type="checkbox" name="category" id="men" />
          <label htmlFor="category">Winterwear</label>
          </div>
          </div>
        </div>
      </div>
      <div className="colection md:w-[60vw]">
     <Collections>
        <h1>All Collection</h1>
        <select name="sortby" id="">
          <option value="relevent">Sort by: Relevent</option>
          <option value="Low to High">Sort by: Low to High</option>
          <option value="High to Low">Sort by: High to Low</option>
        </select>
     </Collections>
      </div>
    </div>
  )
}

export default CollectionPage
