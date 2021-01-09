export default function comparator(route1,route2,field) {
	//since date is always defined

	if (field === "dated") {
		const date1 = route1['date'].split('/')
		const date2 = route2['date'].split('/')

		if (parseInt(date1[2]) < parseInt(date2[2]))	return -1
		else if (parseInt(date1[2]) > parseInt(date2[2])) return 1
		else {
			if (parseInt(date1[0]) < parseInt(date2[0]))	return -1
			else if (parseInt(date1[0]) > parseInt(date2[0])) return 1
			else {
				if (parseInt(date1[1]) < parseInt(date2[1]))	return -1
				else return 1
			}
		}
	}
	else if (field === "dateu") {
		const date1 = route1['date'].split('/')
		const date2 = route2['date'].split('/')

		if (parseInt(date1[2]) < parseInt(date2[2]))	return 1
		else if (parseInt(date1[2]) > parseInt(date2[2])) return -1
		else {
			if (parseInt(date1[0]) < parseInt(date2[0]))	return 1
			else if (parseInt(date1[0]) > parseInt(date2[0])) return -1
			else {
				if (parseInt(date1[1]) < parseInt(date2[1]))	return 1
				else return -1
			}
		}
	}

	if (route1[field]===undefined) return -1;
	if (route2[field] === undefined) return 1;
	if (field === "wall") return route1[field] - route2[field];
	else if (field === "grade") {
		if (route1[field] < route2[field])	return -1;
		else if (route1[field] > route2[field])	return 1
		else {
			if (route1['gradea'] === '-')	return -1;
			if (route2['gradea'] === '-') return 1;
			if (route1['gradea'] === '+' && route2['gradea'] === '')	return 1;
			else return -1;
		}
	}
	else return route1[field].toLowerCase().localeCompare(route2[field].toLowerCase());
 }
