import fs from 'fs'
import matter from 'gray-matter'

interface PostMetadata {
	title: string
	date: string
	subtitle: string
	slug: string
	author: string
	introduction: boolean
}

export const getPostMetadata = (): PostMetadata[] => {
	const folder = 'src/posts/'
	const files = fs.readdirSync(folder)
	const markdownPosts = files.filter(file => file.endsWith('.md'))

	const posts = markdownPosts.map(fileName => {
		const fileContents = fs.readFileSync(`src/posts/${fileName}`, 'utf-8')
		const matterResult = matter(fileContents)

		return {
			title: matterResult.data.title,
			date: matterResult.data.date,
			subtitle: matterResult.data.subtitle,
			author: matterResult.data.author,
			introduction: matterResult.data.introduction,
			slug: fileName.replace('.md', '')
		}
	})

	const sortedData = posts.sort((a, b) => {
		const dateA: any = new Date(
			a.date.split('-').reverse().join('-') // Reversing the date string for proper Date object creation
		)
		const dateB: any = new Date(b.date.split('-').reverse().join('-'))

		return dateB - dateA // Sort in descending order (newest to oldest)
	})

	return sortedData
}

export const getPostContent = (slug: string) => {
	const folder = 'src/posts/'
	const file = `${folder}/${slug}.md`
	const content = fs.readFileSync(file, 'utf-8')
	const matterResult = matter(content)
	return matterResult
}
