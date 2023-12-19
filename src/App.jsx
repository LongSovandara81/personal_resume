import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Knowledge from "./Component/Pages/Knowledge";
import Service from "./Component/Pages/Service";
import Contact from "./Component/Pages/Contact";
import Footer from "./Component/Pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-width">
        <Home />
        <About />
        <Knowledge />
        <Service />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
