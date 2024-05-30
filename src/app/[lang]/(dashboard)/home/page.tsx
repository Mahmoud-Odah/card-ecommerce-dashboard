import Catalog from '../../_components/Catalog/Catalog'

const data = [
  {
    title: 'PlayStation',
    image: 'https://e-giftly.com/images/brands/ps4.jpg',
    link: '/'
  },
  {
    title: 'PUBG Battlegrounds',
    image: 'https://e-giftly.com/images/brands/pubg.jpg',
    link: '/'
  },
  {
    title: 'Fortnite',
    image: 'https://e-giftly.com/images/brands/fortnite.jpg',
    link: '/about'
  }
]

export default async function Page() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {data.map((el, index) => (
        <Catalog key={index} link={el.link} title={el.title} image={el.image} />
      ))}
    </div>
  )
}
