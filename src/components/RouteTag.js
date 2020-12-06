import React,{useState} from 'react'
import {Input} from 'antd'

export const RouteTag = ({text}) => {
   const [value,setValue] = useState(text);
   return (
      <Input value = {value} bordered={false} onChange = {(e) => setValue(e.target.value)}/>
   )
}
