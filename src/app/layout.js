import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
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
        <Footer/>
      </body>
    </html>
  )
}
