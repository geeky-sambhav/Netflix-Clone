import Card from './components/card/card'
import Navbar from './components/nav/navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar username="sambhavgandhi02@gmail.com"/>
       
        {children}</body>
    </html>
  )
}
