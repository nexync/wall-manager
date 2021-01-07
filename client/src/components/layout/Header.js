import React from 'react'
import {AddRoute} from './AddRoute'

import { Row, Col } from 'antd'

export const Header = ({setter}) => {
   return (
		<>
			{setter === true ? 
				<Row>
					<Col span = {23}><label className = 'text'>Route List</label></Col>
					<Col span = {1}><AddRoute/></Col>
				</Row> :
				<label className = 'text'>Route List</label>
			}  
		</>
   )
}
