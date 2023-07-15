import React from "react";
import Mysvg from "../../assets/Mysvg";
import Features from "./Features";
import { Svg1 } from "../../assets/Svg1";
import Svg4 from "../../assets/Svg4";
import Svg3 from "../../assets/Svg3";
import Svg2 from "../../assets/Svg2";

const About = () => {
  return (
    <>
      <section className="px-7 sm:px-14 mt-3 md:px-16 lg:px-20 xl:px-24 2xl:px-28 lg:pt-20">
        <p
          id="features"
          className="md:text-left  text-xl md:text-3xl text-center font-bold tracking-tighter leading-10"
        >
          if Making money isnt Eazy
          <br />
          using it shouldnt be difficult
        </p>
        <div className="grid lg:grid-cols-2 gap-4 mt-10">
          {/* features 1 */}
          <div data-aos="fade-left">
            <Features
              text1="Cash out and Payment"
              text2={"Made Eazy"}
              text3={
                "with kiosk you can now have access to finance that helps grow your business savings, loans, and joining coperative society"
              }
              icon={<Svg1 />}
              color={"bg-[#f1e5ff]"}
            />
          </div>
          <div data-aos="fade-right">
            <Features
              text1="Cash out and Payment"
              text2={"Made Eazy"}
              text3={
                "with kiosk you can now have access to finance that helps grow your business savings, loans, and joining coperative society"
              }
              icon={<Svg2 />}
              color="bg-[#f0f3ff]"
            />
          </div>
          <div data-aos="fade-left">
            <Features
              text1="Cash out and Payment"
              text2={"Made Eazy"}
              text3={
                "with kiosk you can now have access to finance that helps grow your business savings, loans, and joining coperative society"
              }
              icon={<Svg3 />}
              color="bg-[#ffede3]"
            />
          </div>
          <div data-aos="fade-right">
            <Features
              text1="Cash out and Payment"
              text2={"Made Eazy"}
              text3={
                "with kiosk you can now have access to finance that helps grow your business savings, loans, and joining coperative society"
              }
              icon={<Svg4 />}
              color="bg-[#f0f3ff]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
