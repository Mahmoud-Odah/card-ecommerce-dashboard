import Product from '../../../_components/Product/Product'
import { fetchData } from '@/helpers/fetcher'

export default async function Page({ params }: any) {
  const id = params.id

  const dataProduct = await fetchData({
    url: `products/${id}`
  })

  const data = dataProduct.data

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
      {data.map((el: any) => (
        <Product key={el.id} image={el.image} name={el.name} price={el.price} description={el.description} />
      ))}
    </div>
  )
}
