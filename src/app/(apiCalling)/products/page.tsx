"use client";

import { useState } from "react";

function GetProducts() {
  const [productData, setProductData] = useState([
    {
      id: null,
      title: "",
      price: null,
    },
  ]);
  async function PostDataInApi() {
    const fecthData = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 120,
        description: "lorem ok",
        image: "hhttp//products",
        category: "Men's Shirt",
      }),
    });
    const getData = await fecthData.json();
    console.log("Post Data", getData);
    setProductData(getData);
  }
  return (
    <>
      <button onClick={PostDataInApi} className="p-4 bg-slate-500 mt-3">
        Api Data
      </button>
      {productData.map((item, index) => {
        return (
          <div key={index}>
            {item.id} - {item.title} - {item.price}
          </div>
        );
      })}
    </>
  );
}

export default GetProducts;
