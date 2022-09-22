import React from 'react'
import { useState } from 'react'
import { Header, FirstPart, SecondPart } from '../components'
import { Divider } from '../components'
import Image from 'next/image'
import schoolpic from "./schoolpic.jpeg"


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


    return <div className=" flex flex-col items-center justify-center ">
    <Header fix={fix} />
    <div className="h-14 md:h-32"></div>

    <Divider text="What HSCC will do this year:" />

    <Image src ={schoolpic} width = "1200px" height={"500px"}></Image>

    

    <div className='h-32'></div>


    <SecondPart />
  </div>

}