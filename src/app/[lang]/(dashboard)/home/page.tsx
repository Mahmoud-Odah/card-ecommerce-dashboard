import { fetchData } from '@/helpers/fetcher'
import Catalog from '../../_components/Catalog/Catalog'

interface pageProps {
  params: {
    lang: string
  }
}

export default async function Page({ params }: pageProps) {
  const lang = params.lang

  const dataCatalog = await fetchData({
    url: 'categories'
  })

  const data = dataCatalog?.data

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {data.map((el: any) => (
        <Catalog
          key={el.id}
          id={el.id}
          title={el.name}
          image={el.image}
          has_subcategories={el.has_subcategories}
          is_sub_catalog={false}
          lang={lang}
        />
      ))}
    </div>
  )
}
