import './globals.css'
import { Lato } from 'next/font/google'
import Nav from './auth/Nav'


const lato = Lato({ 
  subsets: ['latin'], 
  weight: ["400", "700"], 
  variable: "--font-lato" })

export const metadata = {
  title: 'Postit',
  description: 'Social Media App',
}

export default function RootLayout({
  children 
}) {
  return (
    <html lang="en">
      <body 
      className={`mx-4 md:mx-48 xl:mx-96${lato.variable} bg-gray-20`}
      >
        <Nav/>
        {children}
        </body>
    </html>
  )
}
