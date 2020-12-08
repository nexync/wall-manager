import React from 'react';

import {Header} from './components/Header';
import {RouteList} from './components/RouteList';

import {GlobalProvider} from './context/GlobalState';

import './App.css';

import { Button } from 'antd';

function App() {
   return ( 

   <GlobalProvider>
      <Header/>
      <div className = "container">
         <RouteList/>
      </div>
   </GlobalProvider>
   );
}

export default App;
