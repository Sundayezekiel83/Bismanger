import React from "react";

import image from "../../assets/easy.jpg";

const Eazysteps = () => {
  return (
    <>
      <div
        className=" px-2 md:px-14 lg:px-20 text-white mx-auto "
        id="eazy-step"
      >
        <section
          className="px-2 md:px-16 py-4 md:py-8 mx-auto md:[5rem] bg-[#20274d] rounded-[1rem] grid lg:grid-cols-2 gap-8 lg:justify-center items-center mt-6"
          data-aos="zoom-in-up"
        >
          <div className="grid gap-16 justify-center">
            <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl lg:text-left font-bold">
              Three Eazy Steps
            </h2>
            <div className="grid gap-15">
              <div className="flex gap-4 justify-center">
                <div class="flex-shrink-0 h-12 w-12 flex justify-center bg-[#c97884] items-center text-2xl font-bold rounded-full">
                  1
                </div>
                <div class="grid gap-2">
                  <h3 class="md:text-xl">Browse businesses &amp; share link</h3>
                  <p class="text-sm md:text-base max-w-md">
                    All you need is to check for businesses &amp; share their
                    links to your audiences on all platforms
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-15">
              <div className="flex gap-4 justify-center">
                <div class="flex-shrink-0 h-12 w-12 flex justify-center bg-[#c97884] items-center text-2xl font-bold rounded-full">
                  2
                </div>
                <div class="grid gap-2">
                  <h3 class="md:text-xl">Browse businesses &amp; share link</h3>
                  <p class="text-sm md:text-base max-w-md">
                    All you need is to check for businesses &amp; share their
                    links to your audiences on all platforms
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-15">
              <div className="flex gap-4 justify-center">
                <div class="flex-shrink-0 h-12 w-12 flex justify-center bg-[#c97884] items-center text-2xl font-bold rounded-full">
                  3
                </div>
                <div class="grid gap-2">
                  <h3 class="md:text-xl">Browse businesses &amp; share link</h3>
                  <p class="text-sm md:text-base max-w-md">
                    All you need is to check for businesses &amp; share their
                    links to your audiences on all platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] shadow-2xl mx-auto">
            <img
              src={image}
              alt="Steps_Image"
              className="rounded-2xl h-[40rem]"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Eazysteps;
