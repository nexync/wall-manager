import React from 'react';
import {RouteTag} from './RouteTag';
import {Card} from 'antd';
import EditRoute from './EditRoute';

export const Route = ({route}) => {
   let color;
   let editable = false;
   switch (route.color) {
      case "green":
         color = "#008000"
         break
      case "red":
         color = "#FF0000"
         break
      default:
         color = "#FFFFFF"
   }
   let name = route.name !== undefined ? route.name : "Route Name:";
   let setter = route.setter !== undefined ? route.setter : "Setter";
   let grade = route.grade !== undefined ? `5.${route.grade}` : "Grade";
   let wall = route.wall !== undefined ? `Wall ${route.wall}` : "Wall";

   name = editable ? <RouteTag text = {name}/> : name
   setter = editable ? <RouteTag text = {setter}/> : setter
   grade = editable ? <RouteTag text = {grade}/> : grade
   wall = editable ? <RouteTag text = {wall}/> : wall


   const gridStyle = {
      padding: "0px",
      margin: "0px",
      textAlign: "center",
      verticalAlign: "middle"
   }
   return (
      <Card size = "small" extra = {grade} title = {name} hoverable bodyStyle = {{height: "10%"}} headStyle = {{fontSize: "16px",borderRight: `5px solid ${color}` }} style = {{width: 500}}>
            <Card.Grid hoverable = {false} style = {gridStyle}>{setter}</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}>{route.date}</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}>{wall}</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}><EditRoute/></Card.Grid>
      </Card>
   )
}
