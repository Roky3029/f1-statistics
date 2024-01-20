import Title from '@/components/Title'
import { getPostMetadata } from '@/data/getPostData'
import Posts from './components/Posts'
import SocialLink from '@/components/Footer/SocialLink'
import { FaYoutube, FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Blog = () => {
	const postMetadata = getPostMetadata()

	const socialLinks = [
		{
			link: 'https://www.youtube.com/channel/UCBNAHGQteU5wBFTOlrmc5NA',
			icon: <FaYoutube size={40} />
		},
		{
			link: 'https://www.tiktok.com/@somebitsoff1',
			icon: <FaTiktok size={40} />
		},
		{
			link: 'https://www.instagram.com/somebitsoff1/',
			icon: <FaInstagram size={40} />
		},
		{
			link: 'https://twitter.com/SomeBitsOfF1',
			icon: <FaXTwitter size={40} />
		}
	]

	return (
		<div className='flex items-center justify-center flex-col gap-5 w-full pb-10'>
			<Title text='Blog' />

			<Posts postMetadata={postMetadata} />

			<div className='grid place-content-center sm:grid-cols-5 grid-cols-2 gap-10 pt-10'>
				{socialLinks.map(link => (
					<SocialLink icon={link.icon} link={link.link} key={link.link} />
				))}
			</div>
		</div>
	)
}

export default Blog
