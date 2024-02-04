import Title from '@/components/Title'
import { getPostContent, getPostMetadata } from '@/data/getPostData'
import Markdown from 'markdown-to-jsx'
import Data from './components/Data'
import { notFound } from 'next/navigation'
import { combineDate } from '@/helpers/combineDate'

export const generateStaticParams = async () => {
	const posts = getPostMetadata()

	return posts.map(post => ({
		slug: post.slug
	}))
}

const PostPage = (props: any) => {
	const slug = props.params.slug
	const post = getPostContent(slug)

	const releaseDate = combineDate(post.data.date, '08:00')
	const hasPassed = releaseDate.getTime() < new Date().getTime()
	if (!hasPassed) notFound()

	return (
		<div className='flex items-center justify-center flex-col'>
			<div className='px-3'>
				<Title text={post.data.title} small uppercase />
			</div>

			<Data
				author={post.data.author}
				introduction={post.data.introduction}
				date={post.data.date}
			/>

			<article className='prose lg:prose-xl px-5'>
				<Markdown>{post.content}</Markdown>
			</article>
		</div>
	)
}

export default PostPage
