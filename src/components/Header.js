import React from 'react'
import {AddRoute} from './AddRoute'

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

export const Header = () => {
   return (
      <StickyHeader className = 'header'
         header = {<>
         <label className = 'header-text'>Route List</label>
         <AddRoute/>
         </>}
      />


   )
}
