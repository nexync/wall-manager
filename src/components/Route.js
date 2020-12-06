import React from 'react';
import {RouteTag} from './RouteTag';
import {Card, Row, Col} from 'antd';
import EditRoute from './EditRoute';

export const Route = ({route}) => {
   let color;
   let editable = route.editable;
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
      verticalAlign: "middle",
      width: "25%",
   }
   return (
      <Card size = "small" extra = {grade} title = {name} hoverable bodyStyle = {{padding: "2px", fontSize: "14px", textAlign: "center"}} headStyle = {{fontSize: "18px",borderRight: `5px solid ${color}` }} style = {{width: 500}}>
            <Row align = {"middle"}>
               <Col span={7}>{setter}</Col>
               <Col span={7}>{route.date}</Col>
               <Col span={7}>{wall}</Col>
               <Col span={1} offset = {2}><EditRoute id={route.id}/></Col>
            </Row>
      </Card>
   )
}
