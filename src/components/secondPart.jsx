import { Divider } from './divider'
import { ListComp } from './listcomp'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const SecondPart = () => {
  const [list, setList] = useState([
    { name: 'Are you in Grade 9 or above?', stat: false },
    { name: 'Do you have a Laptop', stat: false },
    { name: 'Will you be SUPER motivated and determined', stat: false },
  ])
  const [ans, setAns] = useState(false)

  useEffect(() => {
    let temp = 0

    list.map((el) => {
      if (el.stat == false) {
        temp = temp + 1
      }
    })

    if (temp > 0) {
      setAns(false)
    } else setAns(true)
  }, [list])

  return (
    <div className="min-h-[570px] flex flex-col items-center">
      <Divider text="How do you Join?" />

      <div className="flex flex-col items-center justify-around min-h-[230px] my-12">
        {list.map((el, index) => {
          return (
            <div
              className="w-full"
              onClick={() => {
                setList(
                  list.map((e) => {
                    let tempStat = e.stat == true ? false : true
                    return e.name == el.name ? { name: e.name, stat: tempStat } : { name: e.name, stat: e.stat }
                  }),
                )
              }}
            >
              {' '}
              <ListComp text={el.name} className="py-5" index={index} checked={el.stat} />
            </div>
          )
        })}
      </div>
      <Link href={ans ? '/form' : ''}>
        <div
          onClick={() => {
            console.log('check')
            console.log(list)
          }}
          className={`w-[275px] h-[95px] ${
            ans == true ? 'bg-[#EDAE49] text-white border-white' : ' bg-[#B78F50] text-[#bababa] border-[#bababa]'
          } rounded-[20px] border-[2px] border-[#bababa] flex items-center text-center font-bebas text-[30px] justify-center`}
        >
          Apply
        </div>
      </Link>
      <div className="h-10"></div>
    </div>
  )
}
