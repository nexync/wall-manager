import React from 'react'
import {AddRoute} from './AddRoute'

import 'react-sticky-header/styles.css';

export const Header = () => {
   return (
      <>
         <label className = 'header-text'>Route List</label>
         <AddRoute/>
      </>
   )
}
