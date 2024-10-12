import React from "react";
import { useNavigate } from "react-router-dom";

function Collections({ children, products }) {
  const navigate = useNavigate();

  const redirectUser = (item) => {
    navigate(`/product/${item._id}`, {
      state: {
        img: item.images,
        name: item.name,
        desc: item.description,
        price: item.price,
        sizes: item.sizes,
      },
    });
  };

  return (
    <div className="md:w-[74vw] mx-auto px-4 md:px-0 overflow-x-hidden">
      {/* Heading */}
      <div className="heading justify-center font-bold font-serif mt-8 text-2xl md:text-3xl flex gap-2 items-center">
        {children}
      </div>
      <p className="mx-auto text-center text-sm md:text-base max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        corrupti inventore obcaecati fugit exercitationem.
      </p>

      {/* Collection Grid */}
      <div className="collection my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((item) => {
          return (
            <div
              onClick={() => redirectUser(item)}
              key={item._id}
              className="card cursor-pointer w-full p-4 bg-white shadow-lg rounded-md transform transition-transform hover:scale-105"
            >
              <img
                className="h-60 w-full object-cover object-center sm:object-top rounded-md"
                src={item.images[0]}
                alt={item.name}
              />
              <h4 className="font-sans mt-2 text-center font-bold mb-4 text-base md:text-lg">
                {item.name}
              </h4>
              <span className="block text-center text-lg font-semibold mt-1">
                ₹{item.price}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
