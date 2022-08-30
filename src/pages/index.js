import React from 'react'
import { useState } from 'react'
import { Header, FirstPart, SecondPart } from '../components'

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
    <div className=" flex flex-col items-center justify-center  ">
      <Header fix={fix} />

      <div className=" h-32"></div>

      <FirstPart />
      <SecondPart />
    </div>
  )
}
