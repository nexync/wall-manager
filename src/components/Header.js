import React from 'react'
import AddRoute from './AddRoute'

export const Header = () => {
   return (
      <span className = 'header'>
         <label className = 'header-text'>Route List</label>
         <AddRoute/>
      </span>
   )
}
