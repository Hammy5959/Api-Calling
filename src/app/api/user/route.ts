import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  console.log("Get Call");

  const MobileBrands = [
    {
      title: "Samsung",
      description: "Samsung camera Pictures Is very Clear and Futuristic",
      price: "100,000",
      image: "URL",
    },
    {
      title: "Iphone",
      description: "Iphone mobile Is very Expensive",
      price: "450,000",
      image: "URL",
    },
    {
      title: "Oneplus",
      description: "Oneplus Mobile Pannel Is Delicate",
      price: "70,000",
      image: "URL",
    },
  ];
  return NextResponse.json(MobileBrands);
};

export const POST = async (req: NextRequest) => {
  let body = await req.json();
  console.log("Body", body);
  return NextResponse.json(body);
};
