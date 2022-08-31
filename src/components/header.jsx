import { useSwipeable } from 'react-swipeable'
import { useScrollBy } from 'react-use-window-scroll'
import React, { useEffect, useState } from 'react'

function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
export const Header = (props) => {
  const { fix } = props

  return (
    <div
      onClick={() => {
        ScrollToTop()
      }}
      className={` flex h-[13vh] flex-col w-full items-center  fixed z-50 top-0 ${
        !fix ? '' : ' backdrop-blur-sm rounded-b-md border-b-2 border-[#EDAE49]'
      }`}
    >
      <div className="w-fit">
        <h1
          className={`font-maze ${
            !fix
              ? 'text-[70px] md:text-[120px] h-[70px] md:h-[100px]'
              : 'text-[40px] md:text-[60px] h-[40px] md:h-[50px]'
          } mt-5 flex justify-center items-center text-white `}
        >
          HSCC
        </h1>
        <h1
          className={`font-bebas ${
            !fix
              ? 'text-[20px] md:text-[25px] h-[25px] md:h-[25px] mx-2'
              : '  text-[10px] md:text-[15px] h-[15px] md:h-[15px mx-1]'
          } flex justify-center md:justify-start items-center  text-[#EDAE49] `}
        >
          Hobbyschool coding club
        </h1>
      </div>
    </div>
  )
}
