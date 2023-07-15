import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Eazysteps from "./component/Eazysteps/Eazysteps";
import Footer from "./component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white">
        <Header />
        <Hero />
        <About />
        <Eazysteps />
        <Footer />
      </div>
    </>
  );
}

export default App;
