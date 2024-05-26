import React, { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import CardList from "../components/CardList";

const ProductSection = () => {
  const section1Img = useRef(null);
  const section2Img = useRef(null);
  const section1Text = useRef(null);
  const section2Text = useRef(null);

  useEffect(() => {
    // ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    // Image Animation Sec1: Slide in from the Left
    new ScrollMagic.Scene({
      triggerElement: section1Img.current,
      triggerHook: 0.5,
      offset: -200,
    })
      .setClassToggle(section1Img.current, "slide-in-left")
      .addTo(controller);

    // Image Animation Sec2: Slide in from the Right
    new ScrollMagic.Scene({
      triggerElement: section2Img.current,
      triggerHook: 0.6,
      offset: -200,
    })
      .setClassToggle(section2Img.current, "slide-in-right")
      .addTo(controller);

    //Animation for Text Sec1: sliding from the right
    new ScrollMagic.Scene({
      triggerElement: section1Text.current,
      triggerHook: 0.5,
      offset: -200,
    })
      .setClassToggle(section1Text.current, "slide-in-right")
      .addTo(controller);

    // Animation for Text Sec2: Slide in from the Left
    new ScrollMagic.Scene({
      triggerElement: section2Text.current,
      triggerHook: 0.6,
      offset: -200,
    })
      .setClassToggle(section2Text.current, "slide-in-left")
      .addTo(controller);

    // Closing up controller
    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="flex bg-white" style={{ height: 600 }}>
          <div
            ref={section1Img}
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)" }}
          >
            <div
              className="h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/product-draft/lifestyle/lifestyle-banner-1-37-25072023-085629.jpg)",
                backgroundPosition: "111% 120%",
              }}
            >
              <div className="h-full bg-black opacity-25" />
            </div>
          </div>
          <div
            ref={section1Text}
            className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
          >
            <div>
              <h2 className="text-3xl font-semibold text-[#e61b33] md:text-4xl ml-[-80px] mb-2">
                Honda <span className="text-black">Genio</span>
              </h2>
              <CardList />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex bg-white" style={{ height: 600 }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div ref={section2Text}>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Spesifikasi
              </h2>
              <p className="mt-8 text-sm text-gray-500 md:text-base">
                <h3 className="text-xl font-semibold text-[#e61b33] mt-6">
                  Dimensi dan Berat
                </h3>
                <p>
                  Panjang X Lebar X Tinggi
                  <span className="ml-[4rem]">: 1.862 x 694 x 1.061 mm</span>
                </p>
                <p>
                  Tinggi Tempat Duduk<span className="ml-[88px]">: 744 mm</span>
                </p>
                <p>
                  Jarak Sumbu Roda<span className="ml-[109px]">: 1.251 mm</span>
                </p>
                <p>
                  Jarak Terendah Ke Tanah
                  <span className="ml-[67px]">: 150 mm</span>
                </p>
                <p>
                  Curb Weight
                  <span className="ml-[150px]">
                    : 92 kg (Tipe CBS) 93kg (Tipe CBS - ISS)
                  </span>
                </p>

                <h3 className="text-xl font-semibold text-[#e61b33] mt-4">
                  Kelistrikan
                </h3>
                <p>
                  Tipe Baterai Atau Aki
                  <pre>
                    : MF 12 V – 3Ah ( Tipe CBS ) , MF 12 V – 5 Ah ( Tipe CBS –
                    ISS )
                  </pre>
                </p>
                <p>Sistem Pengapian Full Transisterized</p>
                <pre>: Tipe Busi NGK MR9C-9N</pre>
              </p>
            </div>
          </div>
          <div
            ref={section2Img}
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)" }}
          >
            <div
              className="h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1400,pr-true,f-auto/uploads/product-draft/lifestyle/lifestyle-banner-2-35-25072023-085636.jpg)",
                backgroundPosition: "100% 120%",
              }}
            >
              <div className="h-full bg-black opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
