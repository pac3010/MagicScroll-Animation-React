import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-black text-white py-10 lg:h-[736px] h-[400px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-2">
          <div className="flex flex-col w-full lg:w-1/3 justify-left items-start p-10">
            <h1 className="font-bold text-3xl md:text-5xl text-[#e61b33]">
              One HEART
            </h1>
            <h2 className="text-left text-3xl md:text-2xl md:leading-snug mb-2 text-[#e61b33]">
              #SatuHATIPenuhArti
            </h2>
            <p className="text-left text-sm md:text-xl text-gray-50 mb-4">
            Menciptakan solusi mobilitas bagi masyarakat dengan produk dan pelayanan terbaik.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-[#e61b33] text-[#e61b33] hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-[#e61b33] hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-[-130px] ml-0 md:ml-12 lg:w-2/3  justify-center">
            
              <div>
                <img
                  className="inline-block mt-10 hidden xl:block w-[100%] rounded-tl-lg rounded-br-lg"
                  src="https://cdn0-production-images-kly.akamaized.net/KovBakiqkIVySROCb3WQ8P9Jzxc=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4326475/original/006004000_1676538550-AHM.jpg"
                />
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;