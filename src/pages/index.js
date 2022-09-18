import React from 'react'
import { useState } from 'react'
import { Header, FirstPart, SecondPart } from '../components'
import { Divider } from '../components'

import { MobileSwiper } from '../components/mobileSwiper/index'

// import Learn from '../components/Learn.png'
// import Computer from '../components/computer.png'
// import Win from '../components/win.png'
// import HobbyLogo from '../components/hobbylogo.png'

import { Input } from '../components'
import { Checkbox } from '@mui/material'
import Link from 'next/link'

import { useContext } from 'react'
import { CartContext } from '../../context/maincontext'


// const list = [
//   { text: 'Learn To Code', background: 'bg-[#D1E3E4]', image: Learn, desc: ['js', 'python', 'React'] },
//   {
//     text: 'Make Their Own Website',
//     background: 'bg-[#0E5CCD]',
//     image: Computer,
//     desc: ['personal Portfolio website', 'Mini Games'],
//   },
//   { text: 'Enter Competitions', background: 'bg-[#14B4B4]', image: Win, desc: ['HACKATHONS', 'olympiads'] },
//   {
//     text: 'Make HOBBY SCHOOL’s Website',
//     background: 'bg-[#FFE401]',
//     image: HobbyLogo,
//     desc: ['we will make the official hobbyschool website'],
//   },
// ]

// export default function Home() {
//   const [fix, setFix] = useState(false)

//   if (typeof window !== 'undefined') {
//     const setFixed = () => {
//       if (window.scrollY >= 100) {
//         setFix(true)
//       } else {
//         setFix(false)
//       }
//       // console.log(fix)
//     }

//     window.addEventListener('scroll', setFixed)
//   }

//   return (
//     <div className=" flex flex-col items-center justify-center ">
//       <Header fix={fix} />

//       <div className=" h-[200px]"></div>

//       <div className="visible md:invisible relative md:absolute z-0 md:-z-50 md:top-0 max-w-[95vw]  overflow-hidden">
//         <Divider text="What Club members  will do" />
//         <div className="h-20 w-full text-center flex items-center justify-center text-[#BABABA]">{`Swipe->`}</div>
//         <MobileSwiper data={list} dataLength={4} slideClassName="px-[55px]" />
//         <div className="h-[100px]"></div>
//       </div>

//       <FirstPart />
//       <div className="h-14 md:h-32"></div>
//       <SecondPart />
//     </div>
//   )
// }

export default function Home() {
  let { data, setData, stat, setStat } = useContext(CartContext)

  return (
    <div className="flex flex-col items-center">
      <div className="w-[80vw]">
        <Input
          val={data.grade}
          onchange={(event) => {
            setData({
              ...data,
              ['grade']: event.target.value,
            })
          }}
          size="small"
          placeholder="ex: 11c"
        >
          Enter Class
        </Input>
      </div>

      <div className="flex flex-row w-[80vw] flex-wrap justify-between">
        <Input
          val={data.name}
          onchange={(event) => {
            setData({
              ...data,
              ['name']: event.target.value,
            })
          }}
          size="med"
          placeholder="ex: First Last"
        >
          Enter Name
        </Input>
        <Input
          val={data.email}
          onchange={(event) => {
            setData({
              ...data,
              ['email']: event.target.value,
            })
          }}
          size="med"
          placeholder="both Hobbyschool or Personal is fine  "
        >
          Enter Email
        </Input>
      </div>
      <Input
        val={data.reason}
        onchange={(event) => {
          setData({
            ...data,
            ['reason']: event.target.value,
          })
        }}
        size="big"
        placeholder="enter text here"
      >
        Why do you want to join?
      </Input>

      <div className="flex flex-row items-center text-white w-[80vw]">
        <Checkbox
          checked={stat}
          sx={{
            color: 'white',
            '& .MuiSvgIcon-root': { fontSize: 40 },
            '&.Mui-checked': {
              color: '#32DF16',
            },
            defaultValue: 'checked',
          }}
          onClick={() => {
            if (stat == true) {
              setStat(false)
            } else {
              setStat(true)
            }
            setTimeout(function () {
              scrollBy({ top: 300, left: 0, behavior: 'smooth' })
            }, 400)
          }}
        />

        <p className="font-roboto text-[20px] md:text-[30px]">Do you have any experience coding?</p>
      </div>

      <div className={`${stat == true ? 'flex' : 'hidden'} w-[80vw]`}>
        <Input
          val={data.xp}
          onchange={(event) => {
            setData({
              ...data,
              ['xp']: event.target.value,
            })
          }}
          size="big"
          placeholder="enter text here"
        >
          Please tell me about your experience
        </Input>
      </div>

      <Link href={'/check'}>
        <div
          onClick={() => {
            console.log({ ...data })
          }}
          className="md:fixed border-[2px] border-white text-white font-bebas text-[30px] md:border-0 cursor-pointer bottom-5 md:right-5 w-[275px] h-[95px] my-10 md:m-0 md:w-[100px] md:h-[100px] md:z-50 bg-[#EDAE49] rounded-[10px] flex justify-center items-center"
        >
          <h1 className="block md:hidden">APPLY</h1>
          <div className="hidden md:block">
            <svg width="82" height="59" viewBox="0 0 82 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.984678 51.757C-0.0535966 50.6845 -0.296589 49.075 0.379112 47.7458L3.66614 41.2799C11.4457 25.9767 27.2035 16.3311 44.4244 16.3311H46.0405C46.1584 13.781 46.3105 11.2321 46.4969 8.68502L46.8148 4.34148C47.0733 0.809185 51.0275 -1.16539 54.0237 0.741578C63.8527 6.99741 72.3976 15.0582 79.2027 24.4943L81.3399 27.4578C82.22 28.6781 82.22 30.3219 81.3399 31.5422L79.2027 34.5057C72.3976 43.9418 63.8527 52.0026 54.0237 58.2584C51.0275 60.1654 47.0733 58.1908 46.8148 54.6585L46.4969 50.315C46.2743 47.2732 46.1006 44.2288 45.9757 41.1829C35.9023 40.8932 25.841 42.9184 16.5944 47.1693L4.98704 52.5054C3.62896 53.1298 2.02295 52.8294 0.984678 51.757ZM11.3787 41.8565L13.6491 40.8127C24.947 35.6189 37.3431 33.4261 49.6437 34.3672C51.4351 34.5042 52.8342 35.9651 52.8873 37.7539C53.0067 41.7741 53.2132 45.7924 53.5069 49.806L53.5323 50.1535C61.2331 44.7317 67.9817 38.065 73.4943 30.4212L74.1587 29.5L73.4943 28.5788C67.9817 20.935 61.2331 14.2683 53.5323 8.8465L53.5069 9.19402C53.2447 12.7767 53.052 16.3631 52.9288 19.9513C52.864 21.8368 51.3107 23.332 49.4166 23.332L44.4244 23.332C30.8485 23.332 18.3471 30.4165 11.3787 41.8565Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}
