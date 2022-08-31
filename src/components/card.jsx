import { width } from '@mui/system'
import Image from 'next/image'
export const Card = (props) => {
  const { m = false, b = false, image, back, text, className, desc } = props
  return (
    <div className={`m-5 flex items-center ${b != true ? ' flex-col-reverse' : 'flex-col'} ${className}`}>
      <div className={`${back} w-[262px] h-[343px] rounded-[20px] flex flex-col justify-center items-center`}>
        <p className="text-[#bababa] font-roboto flex justify-self-start">{m ? '-tap on me-' : '-hover over me-'}</p>
        <div className="max-h-[310px] h-[310px] flex flex-col justify-center overflow-hidden">
          <Image
            src={image}
            height={text == 'Make HOBBY SCHOOL’s Website' ? '310px' : ''}
            width={text == 'Make HOBBY SCHOOL’s Website' ? '245px' : ''}
          ></Image>
        </div>
      </div>
      <h1
        className={`font-roboto text-white text-center text-[25px] min-h-[75px] max-w-[275px] flex ${
          m != true ? 'items-end' : 'items-center'
        } `}
      >
        {text}
      </h1>
      <div className="z-40 absolute opacity-0 hover:opacity-100 backdrop-blur-sm w-[262px] h-[343px] rounded-[20px] flex flex-col text-center justify-center items-center">
        {desc != undefined
          ? desc.map((el) => {
              return <p className="my-1">{el}</p>
            })
          : console.log('not ready ')}
      </div>
    </div>
  )
}
