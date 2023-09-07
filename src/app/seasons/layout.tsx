import '@/app/(site)/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import { Providers } from '@/app/(site)/providers'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
	title: 'F1 Statistics',
	description:
		'Get all the important stats of the F1 championship. All in one single page.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`font-f1 w-full min-h-screen`}>
				<Providers>
					<div
						className={`flex min-h-screen flex-col items-center bg-slate-200 space-y-6`}
					>
						<Header />
						{children}
						<Footer />
						<ScrollToTop />
					</div>
				</Providers>
			</body>
		</html>
	)
}
