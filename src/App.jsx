import React, { useState } from 'react';
import './App.css';
import Typography from './components/Typography';
import { useAppContext } from './context/AppContext';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import About from './components/About';
import Counter from './components/Counter';
import Story from './components/Story';
import Divider from './components/Divider';
import { AnimatePresence } from 'framer-motion';
import AdvancedSpiral from './components/signature';
import ProcessSection from './components/process';
import JewelryDetails from './components/details';
import FeaturedWorks from './components/works';
import TestimonialSection from './components/testimonial';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const { count, increment } = useAppContext();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen finishLoading={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className="container">
        <Hero />
        <About />
        <Counter />
        <Story />
        <Divider />
        <AdvancedSpiral />
        <Divider />
        <ProcessSection />
        <FeaturedWorks />
        {/* <TestimonialSection /> */}
        {/* <Divider /> */}
        <Contact />
        <JewelryDetails />
        {/* <Divider /> */}
        <Faq />
        <Divider />
        <Footer />
      </div>
    </>
  );
}

export default App;
