import React from 'react'

import {Header} from './components/Header'
import {RouteList} from './components/RouteList'

import {GlobalProvider} from './context/GlobalState'

import './App.css';
function App() {
  return (
   <GlobalProvider>
      <Header/>
      <RouteList/>
   </GlobalProvider>
  );
}

export default App;
