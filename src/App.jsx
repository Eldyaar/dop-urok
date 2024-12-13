import React, { useEffect, useState } from 'react'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'

const App = () => {
	const [users, setUsers] = useState({})
	const [page, setPage] = useState('')

	const user = {
		firstName: 'John',
		lastName: 'Johns',
	}

	useEffect(() => {
		if (!users || Object.keys(users).length === 0) {
			const firstName = prompt('Enter your name')
			const lastName = prompt('Enter your last name')

			setUsers({ firstName, lastName })

			if (firstName === user.firstName && lastName === user.lastName) {
				setPage('mainPage')
			} else {
				setPage('errorPage')
			}
		}
	}, [])

	return <div>{page === 'mainPage' ? <MainPage /> : <ErrorPage />}</div>
}

export default App
