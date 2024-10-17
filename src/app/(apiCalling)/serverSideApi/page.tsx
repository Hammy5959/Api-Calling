const ApiCall = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const getData = await res.json();
    return getData;
  } catch {}
};
async function ServerSideApiData() {
  const apiData = await ApiCall();
  return (
    <>
      {apiData.map((item: any) => {
        return (
          <div className="p-3 mt-3 bg-slate-500 text-white">
            {item.id} - {item.title} - Price: {item.price}
          </div>
        );
      })}
    </>
  );
}

export default ServerSideApiData;
