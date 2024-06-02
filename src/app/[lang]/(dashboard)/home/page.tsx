import { fetchData } from '@/helpers/fetcher'
import Catalog from '../../_components/Catalog/Catalog'

export default async function Page() {
  const dataCatalog = await fetchData({
    url: "/categories"
  })

  const data = dataCatalog?.data
  console.log('data', data)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {data.map((el : any) => (
        <Catalog key={el.id} id={el.id} title={el.name} image={el.image} has_subcategories={el.has_subcategories}/>
      ))}
    </div>
  )
}
