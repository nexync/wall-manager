import React,{useContext} from 'react'
import {DatePicker, Input} from 'antd'
import { GlobalContext } from '../context/GlobalState'

export const RouteTag = ({id,field}) => {
   const {routes,editInfo} = useContext(GlobalContext);
   let fontsize,textalign,placeholder,type;

   if (field === "date") {
      return <DatePicker size = "small" onChange = {(e) => editInfo(id,e._d.getMonth()+1 + '/' + e._d.getDate(),field)} />
   }
   switch(field) {
      case "name":
         [fontsize,textalign] = ["18px","left",placeholder="Route Name", type = "text"];
         break;
      case "grade":
         [fontsize,textalign,placeholder,type] = ["14px","right",field.charAt(0).toUpperCase() + field.slice(1) + "       ","number"]
         break;
      case "wall":
         [fontsize,textalign,placeholder,type] = ["14px","center",field.charAt(0).toUpperCase() + field.slice(1),"number"]
         break
      default:
         [fontsize,textalign,placeholder,type] = ["14px","center",field.charAt(0).toUpperCase() + field.slice(1),"text"]
         break;
   }

   let [route] = routes.filter((r) => r.id === id);
   return (
      <Input type = {type} style = {{fontSize: fontsize, margin: "0px", padding: "0px", textAlign: textalign}} placeholder = {placeholder} value = {route[field]} bordered={false} onChange = {(e) => editInfo(id,e.target.value,field)}/>
   )
}

