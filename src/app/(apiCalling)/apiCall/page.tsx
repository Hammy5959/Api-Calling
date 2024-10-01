"use client";
import { useState } from "react";
function ApiCallComponenet() {
  const [productsData, setProductsData] = useState([
    {
      id: null,
      price: null,
      title: "",
      category: "",
    },
  ]);

  async function getApiData() {
    const fetchData = await fetch("https://fakestoreapi.com/products");
    const getData = await fetchData.json();
    setProductsData(getData);
  }
  return (
    <>
      <button onClick={getApiData} className="bg-amber-500 p-5 mt-6">
        Api Call Button
      </button>
      {productsData.map((item) => {
        return (
          <div className="bg-orange-300 p-4 mt-2">
            {item.id} - {item.title} - Price: {item.price} - {item.category}
          </div>
        );
      })}
    </>
  );
}

export default ApiCallComponenet;
