import React from "react";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import LSMSlogo from "/assets/LSMSlogo.png";

const ProductCard = ({
  title,
  description,
  url,
  thumbnail,
  buttonLabel,
  highlightUrl,
}) => {
  return (
    <>
      <div className="flex flex-col items-center  bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 max-w-[1280px]">
        {/* Thumbnail Section */}
        <div className="w-full h-72 bg-gray-100">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover  w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-full p-6 flex flex-col justify-between">
          {/* <h2 className="text-green-600 text-lg font-bold mb-2">{title}</h2> */}
          <img
            src={title}
            alt={title}
            className=" text-center w-[25rem] mx-auto "
          />
          <p className="text-gray-700 text-sm mb-4">{description}</p>

          <div className="flex flex-col gap-4">
            {/* Product URL Button */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                <FaExternalLinkAlt />
                {buttonLabel}
              </button>
            </a>

            {/* Highlighted YouTube Button */}
            <a
              href={highlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition shadow-lg">
                <FaYoutube />
                Watch Demo Video
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProductDevelopment = () => {
  const product1 = {
    title: "/assets/LSMSlogo.png",
    description:
      "Labour Supply Management System streamlines operations with tailored dashboards.",
    url: "https://lsms-soil-soft-eszy.vercel.app/",
    thumbnail: "/assets/lsmss.png", // Replace with the actual logo/image URL
    buttonLabel: "Visit Product URL",
    highlightUrl: "https://youtu.be/IYHl5nUxFbY", // No highlight for this card
  };

  // const product2 = {
  //   title: "/assets/apigenlogo.png",
  //   description:
  //     "APIGen simplifies API testing, debugging, validation, and performance analysis.",
  //   url: "https://apigen-eight.vercel.app/",
  //   thumbnail: "/assets/apigen.png", // Replace with the actual logo/image URL
  //   buttonLabel: "Visit Product URL",
  //   highlightUrl: "https://youtu.be/QllN8JGEUFQ",
  // };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gray-50 w-full">
      <ProductCard
        title={product1.title}
        description={product1.description}
        url={product1.url}
        thumbnail={product1.thumbnail}
        buttonLabel={product1.buttonLabel}
        highlightUrl={product1.highlightUrl}
      />
{/*       <ProductCard
        title={product2.title}
        description={product2.description}
        url={product2.url}
        thumbnail={product2.thumbnail}
        buttonLabel={product2.buttonLabel}
        highlightUrl={product2.highlightUrl}
      /> */}
    </div>
  );
};

export default ProductDevelopment;
