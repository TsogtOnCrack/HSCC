import React from 'react'
import { useState } from 'react'
import { Header, FirstPart, SecondPart } from '../components'
import { Divider } from '../components'

import { MobileSwiper } from '../components/mobileSwiper/index'

import Learn from '../components/Learn.png'
import Computer from '../components/computer.png'
import Win from '../components/win.png'
import HobbyLogo from '../components/hobbylogo.png'

const list = [
  { text: 'Learn To Code', background: 'bg-[#D1E3E4]', image: Learn, desc: ['js', 'python', 'React'] },
  {
    text: 'Make Their Own Website',
    background: 'bg-[#0E5CCD]',
    image: Computer,
    desc: ['personal Portfolio website', 'Mini Games'],
  },
  { text: 'Enter Competitions', background: 'bg-[#14B4B4]', image: Win, desc: ['HACKATHONS', 'olympiads'] },
  {
    text: 'Make HOBBY SCHOOL’s Website',
    background: 'bg-[#FFE401]',
    image: HobbyLogo,
    desc: ['we will make the official hobbyschool website'],
  },
]

export default function Home() {
  const [fix, setFix] = useState(false)

  if (typeof window !== 'undefined') {
    const setFixed = () => {
      if (window.scrollY >= 100) {
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

      <div className=" h-[200px]"></div>

      <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0 max-w-[95vw]  overflow-hidden">
        <Divider text="What Club members  will do" />
        <div className="h-20 w-full text-center flex items-center justify-center text-[#BABABA]">{`Swipe->`}</div>
        <MobileSwiper data={list} dataLength={4} slideClassName="px-[55px]" />
        <div className="h-[100px]"></div>
      </div>

      <FirstPart />
      <div className="h-14 md:h-32"></div>
      <SecondPart />
    </div>
  )
}
