import './globals.css'
import { Lato } from 'next/font/google'
import Nav from './auth/Nav'
import QueryWrapper from './auth/QueryWrapper'



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
      className={`mx-4 md:mx-48 xl:mx-96${lato.variable} bg-gray-200`}
      >
        <QueryWrapper>
        <Nav/>
        {children}
        </QueryWrapper>
        </body>
    </html>
  )
}
