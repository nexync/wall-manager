import React from 'react'
import {Card} from 'antd';

export const Route = () => {
   let color;
   switch (colorChoice) {
      case "green":
         color = "#2ecc71"
   }
   const gridStyle = {
      padding: "0px",
      margin: "0px",
      textAlign: "center",
      verticalAlign: "middle"
   }
   return (
      <Card size = "small" extra = "Grade" title = "Route Name" hoverable bodyStyle = {{height: "10%"}} headStyle = {{fontSize: "16px",borderRight: `5px solid ${color}` }} style = {{width: 300,}}>
            <Card.Grid hoverable = {false} style = {gridStyle}>Setter</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}>Date</Card.Grid>
            <Card.Grid hoverable = {false} style = {gridStyle}>Wall</Card.Grid>
      </Card>
   )
}
