import React, { useEffect, useState } from 'react'

const PostsPage = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			setPosts(await response.json())
		}

		fetchPosts()
	}, [])

	console.log(posts)

	return (
		<div style={{ width: 800, margin: '0 auto' }}>
			<h1>Posts</h1>
			<ul>
				{posts?.slice(0, 10).map(item => (
					<Post key={item.id} post={item} />
				))}
			</ul>
		</div>
	)
}

const Post = ({ post }) => {
	return <li>
		<h3>{post.title}</h3>
		<p>{post.body}</p>
	</li>
}

export default PostsPage
