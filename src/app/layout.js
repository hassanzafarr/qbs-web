import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QBS CO | The Ultimate Business Enterprise Solution',
  description: 'QBS Co is your most reliable business enterprise solutions partner and offers a wide variety of tech solutions across industries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
      
          <Header/>

          {children}
      
      </body>
      
    </html>
  )
}
