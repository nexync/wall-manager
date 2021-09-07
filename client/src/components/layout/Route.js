import React, {useContext} from 'react';
import {RouteTag} from './RouteTag';

import { GlobalContext } from '../../context/GlobalState';
import { GradeAdjust } from './GradeAdjust';
import {Card, Row, Col, Button} from 'antd';
import { ColorPicker } from './ColorPicker';

export const Route = ({route, selectRoute}) => {
	const {editRouteState, deleteRoute} = useContext(GlobalContext)
	
	
	let color;
	if (route.editable === -1) {
		return (
			<Card size = "small"
			title = {"Confirm Route Deletion"}
			hoverable 
			bodyStyle = {{padding: "2px", fontSize: "14px", textAlign: "center"}}
			headStyle = {window.innerWidth <= 1100 ? {fontSize: "16px", textAlign: "center"} : {fontSize: "18px", textAlign: "center"}} 
			style = {{width: '100%', backgroundColor: 'aliceblue', color: '#333333'}}
		>
			<Row align = {"middle"}>
				<Col span={12}><Button fontSize = {window.innerWidth <= 1100 ? "12px" : "14px"} size = "small" block = "true" ghost = "true" style = {{color: "#000000"}} onClick = {() => deleteRoute(route._id)}>Yes, erase it forever.</Button></Col>
				<Col span={12}><Button fontSize = {window.innerWidth <= 1100 ? "12px" : "14px"} size = "small" block = "true" ghost = "true" style = {{color: "#000000"}} onClick = {() => editRouteState(route, route._id, "delete")}>Noooooo</Button></Col>
			</Row>
	</Card>
		)
	}

	let editable = route.editable === 1;
	switch (route.color) {
		case "Green":
			color = "#008000"
			break
		case "Orange":
			color = "#ffa500"
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
		case "Black":
			color = "#000000"
			break;
		case "Grey":
			color = "#808080"
			break;
		case "Lime Green":
			color = "#32cd32"
			break;
		case "Tan":
			color = "#d2b48c"
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
	if (route.grade >= 10) {
		if (gradea === '+') {
			gradea = "c/d"
		}
		else if (gradea === '') {
			gradea = "b/c"
		}
		else {
			gradea = "a/b"
		}
	}
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
			bodyStyle = {window.innerWidth <= 1100 ? {padding: "2px", fontSize: "12px", textAlign: "center"}: {padding: "2px", fontSize: "14px", textAlign: "center"}} 
			headStyle = {window.innerWidth <= 1100 ? {fontSize: "16px",borderRight: `3px solid ${color}` } : {fontSize: "18px",borderRight: `5px solid ${color}` }} 
			style = {{width: '100%', backgroundColor: 'aliceblue', color: '#333333'}}
			onClick = {() => {
				try {
					selectRoute(route)
				} catch(err) {}
			}}
		>
			<Row align = {"middle"}>
				<Col span={8}>{setter}</Col>
				<Col span={8}>{date}</Col>
				<Col span={8}>{wall}</Col>
			</Row>
	</Card>
		
	)
}
