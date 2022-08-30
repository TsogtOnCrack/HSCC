import { width } from '@mui/system'
import Image from 'next/image'
export const Card = (props) => {
  const { b = false, image, back, text } = props
  return (
    <div className={`flex items-center ${b == true ? ' flex-col-reverse' : 'flex-col'}`}>
      <h1
        className={`font-roboto text-white text-center text-[25px] min-h-[75px] max-w-[275px] flex ${
          b == true ? 'items-end' : 'items-center'
        } `}
      >
        {text}
      </h1>
      <div className={`${back} w-[262px] h-[343px] rounded-[20px] flex flex-col justify-center items-center`}>
        <p className="text-[#bababa] font-roboto flex justify-self-start">-hover over me-</p>
        <div className="max-h-[310px] h-[310px] flex flex-col justify-center overflow-hidden">
          <Image
            src={image}
            height={text == 'Make HOBBY SCHOOL’s Website' ? '310px' : ''}
            width={text == 'Make HOBBY SCHOOL’s Website' ? '245px' : ''}
          ></Image>
        </div>
      </div>
    </div>
  )
}
