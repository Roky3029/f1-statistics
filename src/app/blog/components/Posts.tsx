'use client'
import Link from 'next/link'
import Post from './Post'
import Title from '@/components/Title'
import { useEffect, useState } from 'react'

interface PostsProps {
	postMetadata: any
}

const Posts: React.FC<PostsProps> = ({ postMetadata }) => {
	const [hasBeenVisited, setHasBeenVisited] = useState(false)
	useEffect(() => {
		const visited = localStorage.getItem('visited')
		setHasBeenVisited(Boolean(visited))
	}, [])

	return (
		<>
			{!postMetadata.length && (
				<Title
					text="There are not any posts yet. But very soon, we'll add one!"
					uppercase
					small
				/>
			)}
			<div className='w-full px-5 lg:px-20 grid place-content-center lg:max-w-[80%] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
				{postMetadata.map((post: any) => {
					if (post.introduction && !hasBeenVisited) {
						return (
							<Link
								className='col-start-1 col-end-2 lg:col-end-3 xl:col-end-4 row-start-1'
								href={`/blog/${post.slug}`}
								key={post.slug}
							>
								<Post post={post} />
							</Link>
						)
					}
					return (
						<Link href={`/blog/${post.slug}`} key={post.slug}>
							<Post post={post} />
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default Posts
