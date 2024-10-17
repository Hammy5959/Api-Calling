const apiDat = async () => {
  const fetchdata = await fetch("/api/user");
  console.log(fetchdata);
};

async function ApiFetch() {
  const data = await apiDat();
  console.log(data);
  return (
    <>
      <div></div>
    </>
  );
}

export default ApiFetch;
