import React from "react";

const CardList = () => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center z-0">
          <div className="min-w-[375px] md:min-w-[150px] xl:w-[500px] mt-6 grid grid-cols-1 gap-[50px]">
            <div className="ml-[-60px]">
            <div className="relative flex flex-grow flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
              <div className="flex h-[20px] w-auto flex-row items-center"></div>

              <div className="h-[40px] flex w-auto flex-row">
                <h4 className="text-md font-bold text-navy-700 dark:text-white mr-4 text-left">
                  <i className="fa-solid fa-1"></i>
                </h4>
                <p className="font-dm text-sm font-medium text-gray-600 text-left">
                  Perjalanan makin seru dengan mesin irit dan responsif
                </p>
              </div>
            </div>
            </div>

            <div className="ml-[-40px]">
            <div className="relative flex flex-grow flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
              <div className="flex h-[20px] w-auto flex-row items-center"></div>

              <div className="h-[40px] flex w-auto flex-row">
                <h4 className="text-md font-bold text-navy-700 dark:text-white mr-4 text-left">
                <i className="fa-solid fa-2"></i>
                </h4>
                <p className="font-dm text-sm font-medium text-gray-600 text-left">
                Makin gesit dan stabil dengan ban velg trendy.
                </p>
              </div>
            </div>
            </div>

            <div className="ml-[-20px]">
            <div className="relative flex flex-grow flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
              <div className="flex h-[20px] w-auto flex-row items-center"></div>

              <div className="h-[40px] flex w-auto flex-row">
                <h4 className="text-md font-bold text-navy-700 dark:text-white mr-4 text-left">
                <i className="fa-solid fa-3"></i>
                </h4>
                <p className="font-dm text-sm font-medium text-gray-600 text-left">
                Nge-charge kapan aja dan dimana aja makin praktis!
                </p>
              </div>
            </div>
            </div>

            <div className="ml-0">
            <div className="relative flex flex-grow flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
              <div className="flex h-[20px] w-auto flex-row items-center"></div>

              <div className="h-[40px] flex w-auto flex-row">
                <h4 className="text-md font-bold text-navy-700 dark:text-white mr-4 text-left">
                <i className="fa-solid fa-4"></i>
                </h4>
                <p className="font-dm text-sm font-medium text-gray-600 text-left">
                Bagasi luas muat bawa barang apa aja untuk ngeksis.
                </p>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
