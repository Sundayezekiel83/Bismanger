import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <section className="py-6  px-10  top-0 bg-white flex shadow-lg z-50 sticky backdrop-blur-0 lg:px-20">
        <div className="container flex mx-auto space-x-7 sm:justify-between items-center">
          <p className=" text-2xl font-bold text-[#43010b]">BizManger</p>
          <div className="hidden lg:flex lg:text-tiny w-full items-center justify-between pt-1">
            <ul className="grid grid-cols-3 items-center hover:cursor-pointer">
              <Link
                className="hover:text-[#fa9608]"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                Home
              </Link>
              <Link
                className="hover:text-[#fa9608]"
                to="features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                features
              </Link>

              <Link
                className="hover:text-[#fa9608]"
                to="eazy-step"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                Start Now
              </Link>
            </ul>
            <div>
              <button className="rounded-2xl text-white px-4 text-center bg-[#fa9608] py-1 hidden lg:block hover:animate-pulse hover:cursor-pointer">
                Download BizManger
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={() => toggleState()}
              className="text-3xl font-bold"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => toggleState()}
              className="text-3xl font-bold"
            />
          )}
        </div>
      </section>
      {/* Mobile View */}
      {toggle && (
        <>
          {" "}
          <nav className="lg:hidden text-2xl " data-aos="fade-down">
            {" "}
            <div className="absolute bg-white opacity-100 h-[100%]  grid grid-cols-1 place-items-center w-full z-50 ">
              <div className="grid grid-cols-1 place-items-center">
                <ul className="text-lg font-bold grid grid-cols-1 place-items-center text-center space-y-3">
                  <Link
                    className="hover:text-[#fa9608]"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => toggleState()}
                  >
                    {" "}
                    Home
                  </Link>
                  <Link
                    className="hover:text-[#fa9608]"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => toggleState()}
                  >
                    {" "}
                    features
                  </Link>

                  <Link
                    className="hover:text-[#fa9608]"
                    to="eazy-step"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => toggleState()}
                  >
                    Start Now
                  </Link>
                  <a href="/">
                    <button className="rounded-2xl px-4 text-center bg-[#fa9608] py-1 text-white hover:animate-pulse hover:cursor-pointer">
                      download BizManger
                    </button>
                  </a>
                </ul>
              </div>
            </div>
          </nav>{" "}
        </>
      )}
    </>
  );
};

export default Header;
