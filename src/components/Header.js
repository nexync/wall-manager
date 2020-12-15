import React from 'react'
import {AddRoute} from './AddRoute'
import {DeleteRoute} from './DeleteRoute'

import {Divider} from 'antd'

import 'react-sticky-header/styles.css';

export const Header = () => {
   return (
      <>
         <label className = 'header-text'>Route List</label>
         <AddRoute/>
         <Divider type = "vertical"/>
         <DeleteRoute/>
      </>
   )
}
