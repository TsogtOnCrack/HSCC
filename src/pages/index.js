import React from 'react'
import { useState } from 'react'
import { Header, FirstPart, SecondPart } from '../components'
import { Divider } from '../components'
import Image from 'next/image'
import schoolpic from './schoolpic.jpeg'
import schoolpic2 from './schoolpic2.jpeg'
import code from './code.jpeg'
import Error from '../components/Error'

export default function Page() {
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
      <div className="h-32 md:h-48"></div>

      <Divider text="What HSCC will do this year:" />
      <div className="md:my-[100px] my-[50px] flex flex-col justify-center px-5 md:p-0">
        <Image className=" rounded-3xl" src={code} width="900px" height={'436px'}></Image>
        <h1 className=" font-bebas text-white text-[30px] text-center"> Learn to code</h1>
      </div>

      <div className="md:my-[100px] my-[50px] flex flex-col justify-center px-5 md:p-0">
        <Image className=" rounded-3xl" src={schoolpic2} width="900px" height={'436px'}></Image>
        <h1 className=" font-bebas text-white text-[30px] text-center"> make hobby school's website</h1>
      </div>

      <Divider text="Schedule / location" />
      <div className="flex flex-col md:my-[100px] my-[50px] items-center">
        <div>
          <div className=" flex flex-row justify-start md:my-2">
            <h1 className=" font-bebas text-[#EDAE49] text-[25px] md:text-[30px] w-24  "> time:</h1>
            <h1 className=" font-bebas text-white text-[20px] md:text-[25px] w-32 md:w-40 "> EVERY Friday</h1>
            <h1 className=" font-sans text-white text-[18px] md:text-[20px]  "> 3:15 - 4:30</h1>
          </div>
          <div className=" flex flex-row justify-start md:my-2">
            <h1 className=" font-bebas text-[#EDAE49] text-[25px] md:text-[30px] w-24  "> place:</h1>
            <h1 className=" font-bebas text-white text-[20px] md:text-[25px] w-32 md:w-40 "> Room</h1>
            <h1 className=" font-sans text-white text-[18px] md:text-[20px]  "> 312</h1>
          </div>
        </div>
      </div>

      <SecondPart />
    </div>
  )

  // return <Error/>
}
