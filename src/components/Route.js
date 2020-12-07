import React from 'react';
import {RouteTag} from './RouteTag';
import {EditRoute} from './EditRoute';
import { GradeAdjust } from './GradeAdjust';

import {Card, Row, Col} from 'antd';

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
   let name = route.name !== undefined ? route.name : "Route Name";
   let setter = route.setter !== undefined ? route.setter : "Setter";
   let grade = route.grade !== undefined ? `5.${route.grade}` : "Grade";
   let wall = route.wall !== undefined ? `Wall ${route.wall}` : "Wall";

   name = editable ? <RouteTag id={route.id} field = {"name"}/> : name
   setter = editable ? <RouteTag id={route.id} field = {"setter"}/> : setter
   grade = editable ? <><RouteTag id={route.id} field = {"grade"}/> <GradeAdjust/></>  : grade
   wall = editable ? <RouteTag id={route.id} field = {"wall"}/> : wall
   let date = editable ? <RouteTag id={route.id} field = {"date"}/> : route.date

   return (
      <Card size = "small" 
            title = {<Row>
               <Col span = {20}>{name}</Col>
               <Col span = {4}>{grade}</Col> 
            </Row>} 
            hoverable 
            bodyStyle = {{padding: "2px", fontSize: "14px", textAlign: "center"}} 
            headStyle = {{fontSize: "18px",borderRight: `5px solid ${color}` }} 
            style = {{width: 500}
      }>
         <Row align = {"middle"}>
            <Col span={7}>{setter}</Col>
            <Col span={7}>{date}</Col>
            <Col span={7}>{wall}</Col>
            <Col span={1} offset = {2}><EditRoute id={route.id}/></Col>
         </Row>
      </Card>
   )
}
