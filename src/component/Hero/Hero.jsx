import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        id="home"
        className="container mx-auto z-20 overflow-hidden px-[3rem] md:px-[7rem] md:mt-20 mt-10 lg:mt-28 lg:px-[12rem]"
      >
        <section className="grid md:grid-cols-2 md:justify-between md:items-center h-[80%] mx-auto justify-center">
          <div data-aos="fade-in">
            <h1 className="font-bold md:text-left text-center text-[1.5rem] text-black lg:text-[2rem] md:text-[1.5rem]">
              Manage All your Business Operations with{" "}
              <p className=" text-[#43010b]"> Kiosk </p>
            </h1>
            <p className="text-base mt-6 md:text-left text-center max-w-xl  text-slate-500 mx-auto md:mx-0">
              keep all your business records, customers, inventory, orders, and
              suppliers in one space
            </p>
            <div className="mt-8 mx-auto">
              <div className="flex  gap-8 mx-auto justify-center md:justify-start">
                <button className=" text-white items-center py-2 px-10  bg-[#43010b] rounded-2xl hover:animate-pulse">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://paysure.ng/static/media/hero-image.d6c2a67f.png"
            className="w-96 mx-auto mt-4 md:mt-0"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </section>
      </div>
    </>
  );
};

export default Hero;
