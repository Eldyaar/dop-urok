import React, { useState } from 'react'
import PostsPage from './PostsPage'

const MainPage = () => {
	const [content, setContent] = useState('home')

	return (
		<div>
			{content === 'posts' ? (
				<PostsPage />
			) : (
				<div style={{ width: 500, margin: '0 auto' }}>
					<h1>Home Page</h1>
					<p>This is the home page</p>
					<button onClick={() => setContent('posts')}>get posts</button>
				</div>
			)}
		</div>
	)
}

export default MainPage
