import React from 'react';
import {RouteTag} from './RouteTag';
import { GradeAdjust } from './GradeAdjust';
import {Card, Row, Col} from 'antd';
import { ColorPicker } from './ColorPicker';

export const Route = ({route}) => {
   let color;
   let editable = route.editable;
   switch (route.color) {
      case "Green":
				color = "#008000"
				break
      case "Red":
				color = "#FF0000"
				break
			case "Blue":
				color = "#0000ff"
				break;
			case "Pink":
				color= "#ff00ff"
				break;
			case "Purple":
				color = "#6600cc"
				break;
			case "Yellow":
				color = "#ffff00"
				break;
      default:
         color = "#FFFFFF"
   }
   let name = route.name !== undefined ? route.name : "Route Name";
   let setter = route.setter !== undefined ? route.setter : "Setter";
   let grade = route.grade !== undefined ? `5.${route.grade}` : "Grade";
   let gradea = route.gradea !== undefined ? route.gradea: '';
   let wall = route.wall !== undefined ? `Wall ${route.wall}` : "Wall";

   name = editable ? <RouteTag id={route._id} field = {"name"}/>  : name
   setter = editable ? <RouteTag id={route._id} field = {"setter"}/> : setter
   grade = editable ? <Row><Col span = {18}><RouteTag id={route._id} field = {"grade"}/></Col><Col span = {6}> <GradeAdjust id = {route._id}/> </Col></Row>  : <>{grade}{gradea}</>
   wall = editable ? <RouteTag id={route._id} field = {"wall"}/> : wall
	 let date = editable ? <RouteTag id={route._id} field = {"date"}/> : route.date
	 let colorp = editable ? <ColorPicker id = {route._id}/> : null

   return (
      <Card size = "small"
				title = {<Row align = "middle"> 
						<Col span = {14}>{name}</Col>
						<Col span = {4}>{colorp}</Col>
						<Col style = {{fontSize: "14px", textAlign: "right"}} span = {6}>{grade}</Col> 
				</Row>} 
				hoverable 
				bodyStyle = {{padding: "2px", fontSize: "14px", textAlign: "center"}} 
				headStyle = {{fontSize: "18px",borderRight: `5px solid ${color}` }} 
				style = {{width: '100%'}}
			>
				<Row align = {"middle"}>
					<Col span={8}>{setter}</Col>
					<Col span={8}>{date}</Col>
					<Col span={8}>{wall}</Col>
				</Row>
		</Card>
   )
}
