import type { AppProps } from 'next/app'
import { Geist, Geist_Mono } from 'next/font/google'
import MycelialField from '../components/MycelialField'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import '../styles/globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`app-root ${geist.variable} ${geistMono.variable}`}>
      <MycelialField />
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </div>
  )
}
