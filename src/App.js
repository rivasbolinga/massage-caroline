import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/features/Navigation';
import NavigationMobile from './components/features/NavigationMobile';

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
    <div className="App">
      {width < 427 ? <NavigationMobile /> : <Navigation />}
      <h1>hello from app</h1>
    </div>
  );
}

export default App;
