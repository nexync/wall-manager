import React, {useEffect, useRef, useState} from 'react';

import {Header} from './components/Header';
import {RouteList} from './components/RouteList';

import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
   const [isSticky, setSticky] = useState(false);
   const ref = useRef(null);
   const handleScroll = () => {
      if (ref.current) {
         setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', () => handleScroll);
      };
    }, []);

   return ( 
   <GlobalProvider>
      <div className = {`${isSticky ? 'sticky' : ''}`} ref={ref}>
         <Header/>
      </div>
      <div className = "container">
         <RouteList/>
      </div>
   </GlobalProvider>
   );
}

export default App;
