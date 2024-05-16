export type worksDataInfoType = {
  name: string
  thematic: string
  adaptive: string
  websiteType: string
  stack: string
  favicon: string
}
export type worksDataType = {
  id: number
  link?: string
  img: string
  info: worksDataInfoType
}

export const worksData: worksDataType[] = [
  {
    id: 1,
    img: '/images/Works/Slider/item-1.png',
    link: 'https://dzhambulat-kagermanov.github.io/portfolio-healthyFood/',
    info: {
      name: 'Healthy Food',
      thematic: 'Ресторан',
      adaptive: 'Присутствует',
      websiteType: 'Одностраничный',
      stack: 'React, Redux',
      favicon: '/images/Works/Slider/favicon-1.svg',
    },
  },
  {
    id: 2,
    img: '/images/Works/Slider/item-2.png',
    link: 'https://dzhambulat-kagermanov.github.io/portfolio-vrGaming/',
    info: {
      name: 'VR Gaming',
      thematic: 'Virtual gaming',
      adaptive: 'Присутствует',
      websiteType: 'Одностраничный',
      stack: 'HTML, LESS, JS',
      favicon: '/images/Works/Slider/favicon-2.svg',
    },
  },
  {
    id: 3,
    img: '/images/Works/Slider/item-3.png',
    link: 'https://dzhambulat-kagermanov.github.io/portfolio-stansAssets/',
    info: {
      name: "Stan's Assets",
      thematic: 'Дизайнерская студия',
      adaptive: 'Присутствует',
      websiteType: 'Многостраничный',
      stack: 'HTML, CSS, JS',
      favicon: '/images/Works/Slider/favicon-3.svg',
    },
  },
  {
    id: 4,
    img: '/images/Works/Slider/item-4.png',
    link: 'https://potrfolio-booking-houses.vercel.app/',
    info: {
      name: 'Booking Houses',
      thematic: 'Аренда домов',
      adaptive: 'Присутствует',
      websiteType: 'Многостраничный',
      stack: 'React, Redux Toolkit, TypeScript, Next, Material UI, Sass',
      favicon: '/images/Works/Slider/favicon-4.svg',
    },
  },
]
