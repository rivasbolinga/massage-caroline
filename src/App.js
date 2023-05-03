import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route, Routes,
} from 'react-router-dom';
import AOS from 'aos';
import Navigation from './components/features/navigation/Navigation';
import NavigationMobile from './components/features/navigation/NavigationMobile';
import Home from './components/Home';
import About from './components/aboutPage/About';
import Contact from './components/contactpage/Contact';
import Sophrology from './components/sophrology/Sophrology';
import Massages from './components/Massages';
// import Default404 from './components/Default404';
import Default404 from './components/Default404';
import Footer from './components/features/footer/Footer';
import 'aos/dist/aos.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleClick = () => {
    // select the first button element with the given class name
    const button = document.querySelector('.slick-dots button:first-of-type');
    if (button) {
      // click the button if it exists
      button.click();
    }
  };
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    AOS.init();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // add an event listener for beforeunload
    window.addEventListener('load', handleClick);

    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleClick);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {width < 769 ? <NavigationMobile /> : <Navigation />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sophrology" element={<Sophrology />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="*" element={<Default404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
