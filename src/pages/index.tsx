import { Inter } from 'next/font/google'
import  Profile from './components/Profile'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="container  mx-auto">
      <Profile />
      {/* Outros conteúdos aqui */}
    </div>
    </>
  )
}
