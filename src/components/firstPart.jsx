import { Divider } from './divider'
import { Card } from './card'

import Learn from '../../public/assets/Learn.png'
import Computer from '../../public/assets/computer.png'
import Win from '../../public/assets/win.png'
import HobbyLogo from '../../public/assets/hobbylogo.png'

const list = [
  { text: 'Learn To Code', background: 'bg-[#D1E3E4]', image: Learn },
  { text: 'Make Their Own Website', background: 'bg-[#0E5CCD]', image: Computer },
  { text: 'Enter Competitions', background: 'bg-[#14B4B4]', image: Win },
  { text: 'Make HOBBY SCHOOL’s Website', background: 'bg-[#FFE401]', image: HobbyLogo },
]

export const FirstPart = () => {
  return (
    <div className=" flex-col items-center hidden md:flex">
      <Divider text="What Club members  will do" />

      <div className="flex flex-row justify-around h-[600px] w-[95vw] items-center">
        {list.map((el, index) => {
          return <Card text={el.text} back={el.background} image={el.image} b={index % 2 == 0 ? true : false} />
        })}
      </div>
    </div>
  )
}
