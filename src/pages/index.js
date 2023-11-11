import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NavBar } from '@/layout/NavBar'
import 'tailwindcss/tailwind.css';
import { Carousel } from '@/components/Carousel/Carousel';
import { Header } from '@/layout/Header';
import { Body } from '@/layout/Body';
import { Footer } from '@/layout/Footer';
import { OptionsProvider } from '@/Context/OptionsContext';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main
      className="flex flex-col align-middle bg-zinc-100"
    >

      <NavBar />
      <Header />
      <Body />
      <Footer />
      <div>

      </div>

    </main>

  )
}
