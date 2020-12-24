import React from 'react'
import {AddRoute} from './AddRoute'

export const Header = () => {
   return (
      <div>
         <label className = 'header-text'>Route List</label>
         <AddRoute/>
      </div>
   )
}
