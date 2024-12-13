import React from 'react'

const ObjectPropExemple = ({ data, onClick, children }) => {
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
			<button onClick={onClick}>{children}</button>
		</div>
	)
}

export default ObjectPropExemple