import React, { useEffect } from 'react'
import Link from 'next/link'
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
            <img
              className="h-[300px] w-[400px]"
              src="https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif"
              alt=""
            />{' '}
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
