import React, { useState, useEffect } from 'react'

const UserInfo = () => {
	const [test, setTest] = useState('')


	const handleChange = () => {
		alert(test)
	}

	useEffect(() => {
		handleChange()
	}, [])

	return (
		<div>UserInfo: 
			<input type="text" value={test} onChange={e => setTest(e.target.value)} />
		</div>
	)
}

export default UserInfo