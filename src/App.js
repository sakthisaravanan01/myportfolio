// import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/Experience/Experience";
import Service from "./components/Service/Service";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
