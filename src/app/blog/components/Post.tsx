import Avatar from './Avatar'

interface Post {
	title: string
	date: string
	subtitle: string
	slug: string
	author: string
	introduction: boolean
}

interface PostProps {
	post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
	return (
		<div className='bg-white px-6 py-3 rounded-lg flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all shadow-lg'>
			<h2 className='text-2xl font-extrabold text-center font-serif'>
				{post.title}
			</h2>

			<div className='w-full flex items-center justify-between px-5 py-2 bg-slate-300 rounded-lg'>
				<div className='flex gap-2 items-center justify-center'>
					{post.author === 'M' ? (
						<>
							<Avatar author={post.author} />
							<p>Miguel R.</p>
						</>
					) : (
						<>
							<Avatar author={post.author} />
							<p>David</p>
						</>
					)}
				</div>

				<p>{post.date}</p>
			</div>

			<p>{post.subtitle}</p>
		</div>
	)
}

export default Post
