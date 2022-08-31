import React from 'react'
import { useState } from 'react'
import { Header, FirstPart, SecondPart } from '../components'
import { Divider } from '../components'

import { MobileSwiper } from '../components/mobileSwiper/index'

import Learn from '../../public/assets/Learn.png'
import Computer from '../../public/assets/computer.png'
import Win from '../../public/assets/win.png'
import HobbyLogo from '../../public/assets/hobbylogo.png'

const list = [
  { text: 'Learn To Code', background: 'bg-[#D1E3E4]', image: Learn },
  { text: 'Make Their Own Website', background: 'bg-[#0E5CCD]', image: Computer },
  { text: 'Enter Competitions', background: 'bg-[#14B4B4]', image: Win },
  { text: 'Make HOBBY SCHOOL’s Website', background: 'bg-[#FFE401]', image: HobbyLogo },
]

export default function Home() {
  const [fix, setFix] = useState(false)

  if (typeof window !== 'undefined') {
    const setFixed = () => {
      if (window.scrollY >= 200) {
        setFix(true)
      } else {
        setFix(false)
      }
      // console.log(fix)
    }

    window.addEventListener('scroll', setFixed)
  }

  return (
    <div className=" flex flex-col items-center justify-center ">
      <Header fix={fix} />

      <div className=" h-32"></div>

      <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0 max-w-[95vw]  overflow-hidden">
        <Divider text="What Club members  will do" />
        <div className="h-20 w-full text-center flex items-center justify-center text-[#BABABA]">{`Swipe->`}</div>
        <MobileSwiper data={list} dataLength={4} slideClassName="px-[55px]" />
        <div className="h-[100px]"></div>
      </div>

      <FirstPart />
      <SecondPart />
    </div>
  )
}
