import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card } from '../card'

type Props = {
  data: object[]
  dataLength: number
  slideClassName: string
}

export const MobileSwiper = (props: Props) => {
  const { dataLength, data, slideClassName } = props

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      loop={true}
      touchRatio={1.5}
      navigation={true}
      effect={'flip'}
      className="mySwiper"
    >
      {data.map((el) => {
        return (
          <SwiperSlide>
            <Card m b image={el.image} back={el.background} text={el.text}></Card>{' '}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
