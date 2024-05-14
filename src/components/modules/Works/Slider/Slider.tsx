import { FC } from 'react'
import classes from './Slider.module.scss'
import { IClassName } from '@/types/classInterface'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Item from './Item/Item'
import { IWorksDataType } from '@/constants/works'
import classesItem from './Item/Item.module.scss'

interface ISliderProps extends IClassName {
  data: IWorksDataType[]
}

const Slider: FC<ISliderProps> = ({ className, data }) => {
  return (
    <div className={`${classes.slider} ${className || ''}`}>
      <Swiper loop slidesPerView='auto' spaceBetween={50} centeredSlides>
        {data.map(({ id, img }) => {
          return (
            <SwiperSlide
              key={id}
              className={`${classesItem.item} works-slider__item`}
            >
              <Item img={img} id={id} />
            </SwiperSlide>
          )
        })}
        {/* ЗАГЛУШКА ИЗ ЗА НЕ ХВАТКИ СЛАЙДОВ} */}
        {data.map(({ id, img }) => {
          return (
            <SwiperSlide
              key={id}
              className={`${classesItem.item} works-slider__item`}
            >
              <Item img={img} id={id} />
            </SwiperSlide>
          )
        })}
        {/* .................................. */}
      </Swiper>
    </div>
  )
}

export default Slider
