"use client";

import { useState, useEffect } from "react";
function ApiCallComponenet() {
  const [apiData, setApiData] = useState([
    {
      id: null,
      title: "",
    },
  ]);
  const [loding, setLoading] = useState<boolean>(false);
  useEffect(() => {
    ApiCall();
  }, []);
  async function ApiCall() {
    setLoading(true);
    try {
      const fecthData = await fetch("https://fakestoreapi.com/products", {});
      const getData = await fecthData.json();
      setApiData(getData);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {loding && "loading..."}
      {apiData.map((item, index) => {
        return (
          <div className="p-4 bg-orange-300 mt-3" key={index}>
            {item.id} - {item.title}
          </div>
        );
      })}
    </>
  );
}

export default ApiCallComponenet;
