import React from "react";

import image from "../../assets/easy.jpg";

const Eazysteps = () => {
  return (
    <>
      <section id="eazy-step" className="md:px-16 lg:px-20 mt-16 md:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 ">
          <div className="text-2xl">
            <h2
              data-aos="fade-right"
              className=" text-lg text-center md:text-left md:text-2xl text-[#43010b] font-bold leading-10"
            >
              {" "}
              Do more with your Business. <br />
              Get BisManger Today
            </h2>
            <p
              data-aos="fade-right"
              className=" text-[0.8rem] md:text-base mt-4 text-center md:text-left"
            >
              Download the BizManger App Today and Begin your <br />
              Business growth Today
            </p>
            <div
              className="flex flex-row gap-2 mt-10 justify-center items-center md:justify-start 
              "
              data-aos="fade-left"
            >
              <img
                src="https://luca.africa/_next/static/image/src/Assets/Images/button1.739d246165928b415b985aa27a9fd8a5.svg?imwidth=640"
                alt="applestore"
                className="w-[130px]  md:w-[150px]"
              />
              <img
                src="https://luca.africa/_next/static/image/src/Assets/Images/button2.1e94410b3309e73af6c93ad58b94e602.svg?imwidth=640"
                alt="downladpic"
                className="w-[130px]  md:w-[150px]"
              />
            </div>
          </div>
          <div className=" w-[70%] flex justify-center items-center mx-auto md:w-[100%]">
            <img
              src="https://luca.africa/_next/static/image/src/Assets/Images/download-app.428491e8d6331b8d24948409feeddbaa.svg?imwidth=1920"
              className="mb-0 rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Eazysteps;
