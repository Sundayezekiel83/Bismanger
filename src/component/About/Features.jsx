import React from "react";
import Mysvg from "../../assets/Mysvg";

const Features = ({ icon, text1, text2, text3, color }) => {
  return (
    <>
      <div
        className={`container flex items-center justify-center md:justify-evenly  ${color} shadow-md opacity-100 rounded-2xl pl-3 py-12`}
      >
        <div className="text w-1/2">
          <p className="text-base sm:text-lg md:text-3xl font-bold tracking-tighter leading-normal sm:mt-5 text-[#505780]">
            {text1}
            <br />
            {text2}
          </p>
          <p className="mt-4 mr-3 text-[0.6rem] md:text-sm tracking-tight text-[#505780]">
            {text3}
          </p>
          <a className="font-sf text-[0.6rem] md:text-sm font-bold text-[#505780] flex tracking-tighter items-center mt-4">
            explore more features
            <Mysvg />
          </a>
        </div>
        {icon}
      </div>
    </>
  );
};

export default Features;
