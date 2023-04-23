import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Banner from './components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <section className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        {/* left div */}
        <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
          <LeftSide />
        </div>
        {/* Middle */}
        <div className='w-full h-[90%] mx-auto p-4 font-montserratFont'>
          <Banner />
        </div>
        {/* right div */}
        <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
          <RightSide />
        </div>
      </section>
    </main>
  )
}
