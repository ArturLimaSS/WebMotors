import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NavBar } from '@/layout/NavBar'
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="flex flex-col align-middle"
    >
    
        <NavBar />
     
    </main>
  )
}
