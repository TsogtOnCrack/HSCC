import { Divider } from './divider'
import { Card } from './card'

import Learn from 'public/assets/Learn.png'
import Computer from 'public/assets/computer.png'
import Win from 'public/assets/win.png'
import HobbyLogo from 'public/assets/hobbylogo.png'

const list = [
  { text: 'Learn To Code', background: 'bg-[#D1E3E4]', image: Learn, desc: ['js', 'python', 'React'] },
  {
    text: 'Make Their Own Website',
    background: 'bg-[#0E5CCD]',
    image: Computer,
    desc: ['personal Portfolio website', 'Mini Games'],
  },
  { text: 'Enter Competitions', background: 'bg-[#14B4B4]', image: Win, desc: ['HACKATHONS', 'olympiads'] },
  {
    text: 'Make HOBBY SCHOOL’s Website',
    background: 'bg-[#FFE401]',
    image: HobbyLogo,
    desc: ['we will make the official hobbyschool website'],
  },
]

export const FirstPart = () => {
  return (
    <div className=" flex-col items-center hidden md:flex">
      <Divider text="What Club members  will do" />

      <div className="flex flex-row justify-center flex-wrap min-h-[600px] w-[95vw] items-center">
        <div className="flex">
          {list.map((el, index) => {
            if (index < 2) {
              return (
                <Card
                  text={el.text}
                  back={el.background}
                  image={el.image}
                  b={index % 2 == 0 ? true : false}
                  desc={el.desc}
                />
              )
            }
          })}
        </div>
        <div className="flex">
          {list.map((el, index) => {
            if (index >= 2) {
              return (
                <Card
                  text={el.text}
                  back={el.background}
                  image={el.image}
                  b={index % 2 == 0 ? true : false}
                  desc={el.desc}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
