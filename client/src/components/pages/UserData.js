import React, {useContext} from 'react'
import { useHistory } from 'react-router';

import { GlobalContext } from '../../context/GlobalState'

export default function UserData() {
	const {currUser} = useContext(GlobalContext)
	const history = useHistory();

	if (currUser === null) {
		history.push('/dashboard')
	}

	return (
		<div>
			Testing
		</div>
	)
}
