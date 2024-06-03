import Image from 'next/image'
import Link from 'next/link'

const Catalog = ({ title, image, id, has_subcategories, is_sub_catalog, lang }: any) => {
  return (
    <Link
      href={has_subcategories ? `/${lang}/brand/${id}` : `/${lang}/product/${id}`}
      className={`flex flex-col items-center bg-white shadow-md rounded-lg  hover:scale-[1.02] transition duration-300 group ${is_sub_catalog ? "hover:bg-custom-gradient" : ""}`}
    >
      <Image
        width={'400'}
        height={'200'}
        className='w-full h-full object-cover rounded-t-lg group-hover:opacity-95 transition duration-300 '
        src={image ?? 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
        alt={title}
      />
      <h2 className={`text-lg font-bold mt-4 mb-4 ${is_sub_catalog ? "group-hover:text-white" : ""}`}>{title}</h2>
    </Link>
  )
}

export default Catalog
