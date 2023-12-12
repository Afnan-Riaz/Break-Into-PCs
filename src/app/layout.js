import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import Image from 'next/image'
import Link from 'next/link'
export const metadata = {
  title: 'Break Into PCs',
  description: 'A PC and games marketplace with lots of cool features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0 bg-black overflow-x-hidden'>
        <Header/>
        {children}
        <Link href={"/products/cart"} className='fixed bottom-14 right-14 p-3 rounded-lg transition-transform hover:scale-110 bg-red-gradient z-50'><Image src={"/icons/cart.png"} height={40} width={40}/></Link>
        <Footer/>
      </body>
    </html>
  )
}
