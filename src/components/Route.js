import React from 'react'
import {Card} from 'antd';

export const Route = ({route}) => {
   let color;
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
   const gridStyle = {
      padding: "0px",
      margin: "0px",
      textAlign: "center",
      verticalAlign: "middle"
   }
   return (
      <Card size = "small" extra = {route.grade} title = {route.name} hoverable bodyStyle = {{height: "10%"}} headStyle = {{fontSize: "16px",borderRight: `5px solid ${color}` }} style = {{width: 500}}>
            <Card.Grid hoverable = {false} style = {gridStyle}>{route.setter}</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}>{route.date}</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}>Wall {route.wall}</Card.Grid>
      </Card>
   )
}
