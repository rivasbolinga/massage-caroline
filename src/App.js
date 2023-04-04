import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/features/navigation/Navigation';
import NavigationMobile from './components/features/navigation/NavigationMobile';
import Home from './components/Home'
import About from './components/aboutPage/About'
import Contact from './components/Contact'
import Sophrology from './components/Sophrology'
import Bookings from './components/Bookings'
import GiftCard from './components/GiftCard'
import {
  BrowserRouter,
  Route, Routes,
} from 'react-router-dom';
import Massages from './components/Massages';
import Default404 from './components/Default404';
import Footer from './components/features/footer/Footer';
import AboutPhone from './components/aboutPage/AboutPhone';
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <BrowserRouter>
        {width < 769 ? <NavigationMobile /> : <Navigation />}
        <hr id="top" />
        <Routes>
          <Route path="/" element={<Home />} />
          {width < 769 ? (
            <Route path="/about" element={<AboutPhone />} />
          ) : (
            <Route path="/about" element={<About />} />
          )}
          
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/sophrology" element={<Sophrology />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="*" element={<Default404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
