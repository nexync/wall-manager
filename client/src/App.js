import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalProvider} from './context/GlobalState';

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Dashboard from './components/pages/Dashboard'
import Data from './components/pages/Data'
import Profile from './components/pages/Profile'
import UserData from './components/pages/UserData'

import './App.css';


function App() {
   return ( 
   <GlobalProvider>
      <Router>
				<Switch>
					<Route exact path = '/' component = {Home}/>
					<Route exact path = '/login' component = {Login}/>
					<Route exact path = '/register' component = {Register}/>
					<Route exact path = '/dashboard' component = {Dashboard}/>
					<Route exact path = '/data' component = {Data}/>
					<Route exact path = '/profile' component = {Profile}/>
					<Route exact path = '/userdata' component = {UserData}/>
				</Switch>
			</Router>
   </GlobalProvider>
   );
}
export default App;
