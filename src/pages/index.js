import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NavBar } from '@/layout/NavBar'
import 'tailwindcss/tailwind.css';
import { Carousel } from '@/components/Carousel/Carousel';
import { Header } from '@/layout/Header';
import { Body } from '@/layout/Body';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="flex flex-col align-middle"
    >

      <NavBar />
      <Header />
      <Body />
      <div>

      </div>

    </main>
  )
}
