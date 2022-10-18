import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import('./utility-component/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const Work = lazy(() => import('./pages/Work'));
const SocialLink = lazy(() => import('./pages/SocialLinks'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <SocialLink />
      </Suspense>

    </div>

  );
}

export default App;
