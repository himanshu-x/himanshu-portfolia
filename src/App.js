import React from "react";
import Navbar from "./utility-component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Work from './pages/Work'
import SocialLink from './pages/SocialLinks'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <SocialLink />
    </div>

  );
}

export default App;
