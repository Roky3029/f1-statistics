import Title from '@/components/Title'
import { getPostMetadata } from '@/data/getPostData'
import Link from 'next/link'
import Post from './components/Post'

const Blog = () => {
	const postMetadata = getPostMetadata()

	return (
		<div className='flex items-center justify-center flex-col gap-5 w-full pb-10'>
			<Title text='Blog' />

			{/* <div className='w-full px-5 lg:px-20 grid place-content-center lg:max-w-[80%] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
				{postMetadata.map(post => {
					return (
						<Link href={`/blog/${post.slug}`} key={post.slug}>
							<Post post={post} />
						</Link>
					)
				})}
			</div> */}

			<Title
				text='Very soon, featuring a blog bringing you all the newest news about F1. Stay tuned!'
				small
			/>
		</div>
	)
}

export default Blog
