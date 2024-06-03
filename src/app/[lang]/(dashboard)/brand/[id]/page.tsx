import Catalog from '../../../_components/Catalog/Catalog'
import { fetchData } from '@/helpers/fetcher'

export default async function Page({ params }: any) {
  const id = params.id
  const lang = params.lang

  const dataCategory = await fetchData({
    url: `categories`,
    params: { parent_id: id }
  })

  const data = dataCategory.data

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
      {data.map((el: any) => (
        <Catalog key={el.id} id={el.id} title={el.name} image={el.image} has_subcategories={el.has_subcategories} lang={lang} />
      ))}
    </div>
  )
}
