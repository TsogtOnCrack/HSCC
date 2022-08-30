import { Divider } from './divider'
import { ListComp } from './listcomp'
import { useEffect, useState } from 'react'

const list = [
  { name: 'Are you in Grade 9 or above?', stat: 0 },
  { name: 'Do you have a Laptop', stat: 0 },
  { name: 'Will you be SUPER motivated and determined', stat: 0 },
]

export const SecondPart = () => {
  const [ans, setAns] = useState(false)
  useEffect(() => {
    console.log(list)
  }, list)

  useEffect(() => {
    list.map((el) => {
      if (el.stat % 2 != 0) {
        setAns(true)
      } else {
        setAns(false)
      }
    })
  }, list)

  return (
    <div className="min-h-[570px] flex flex-col items-center">
      <Divider text="How do you Join?" />

      <div className="flex flex-col items-center justify-around min-h-[230px] py-12">
        {list.map((el, index) => {
          return <ListComp text={el.name} className="py-5" index={index} list={list} />
        })}
      </div>

      <div
        className={`w-[275px] h-[95px] ${
          ans == true ? 'bg-[#EDAE49]' : ' bg-[#B78F50]'
        } rounded-[20px] border-[2px] border-[#bababa] flex items-center text-center text-[#bababa] font-bebas text-[30px] justify-center`}
      >
        Apply
      </div>
    </div>
  )
}
