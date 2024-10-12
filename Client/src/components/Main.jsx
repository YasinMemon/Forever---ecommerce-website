import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import Policies from "./Policies";
import Subscribe from "./Subscribe";
import { collectionHeading, SellersHeading } from "../heading";
import Login from "./Login";
import SpinnerL from "./SpinnerL";
import axios from "axios";

function Main({ setToken,token }) {

  const [product, setProducts] = useState([]);
  useEffect(() => {
    const productFetching = async () => {
      const response = await axios.get(
        "https://forever-ecommerce-website.onrender.com/api/products/list"
      );
      setProducts(response.data.products);
    };

    productFetching();
  }, []);

  return (
    <div className="overflow-x-hidden w-auto">
      {token ? ( product.length > 0 ? (
        <>
        <Hero />
          <Collections products={product} >
            <h1 className="text-xl md:text-4xl">{collectionHeading}</h1>
          </Collections>
          <Collections products={product} >
            <h1 className="text-xl md:text-4xl">{SellersHeading}</h1>
          </Collections>
          <Policies />
          <Subscribe />{" "}
        </>
      ) : (
        <SpinnerL/>
      )
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default Main;
