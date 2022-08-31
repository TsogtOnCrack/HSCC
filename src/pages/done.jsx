import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Loading from '../../public/assets/IMG_3726.GIF'

export default function Done() {
  const ran_num = Math.floor(Math.random() * 2000) + 1400
  const [showElement, setShowElement] = React.useState(true)
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false)
    }, ran_num)
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      {showElement ? (
        <div>
          <div className="flex justify-center items-center flex-col h-screen">
            <p className="text-[30px] font-bebas">loading...</p>
            <Image height={300} width={400} src={Loading}></Image>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <div className=" font-maze text-[100px] text-white">SENT!</div>
          <Link href="/">
            <div className="cursor-pointer underline text-[#EDAE49]">return to homePage</div>
          </Link>
        </div>
      )}
    </div>
  )
}
