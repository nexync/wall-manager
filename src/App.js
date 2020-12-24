import React from 'react';

import {Header} from './components/Header';
import {RouteList} from './components/RouteList';
import BreakdownSetter from './components/BreakdownSetter';
import { BreakdownGrade } from './components/BreakdownGrade';

import {GlobalProvider} from './context/GlobalState';

import './App.css';


function App() {
   return ( 
   <GlobalProvider>
      <div className = 'header'> 
         <Header/>
      </div>
      <div className = 'container'>
         <RouteList/>
      </div>
      <div className = 'pie-chart'>
         <BreakdownSetter/>
      </div>
      <div className = 'bar-graph'>
         <BreakdownGrade/>
      </div>
   </GlobalProvider>
   );
}
export default App;
