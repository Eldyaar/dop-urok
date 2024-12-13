import React from 'react'
import ObjectPropExemple from '../components/ObjectPropExemple'
import UserInfo from '../components/UserInfo'

const obj = {
	title: 'dsabdmshabdha',
	body: 'bhjdbasmdsbdmsadb nduksandj',
}

const ErrorPage = () => {
	const handleClick = () => {
		alert('hello')
	}

	return (
		<div>
			<ObjectPropExemple data={obj} onClick={handleClick}>
				<p>This is Children</p>
			</ObjectPropExemple>
			<UserInfo />
		</div>
	)
}

export default ErrorPage
