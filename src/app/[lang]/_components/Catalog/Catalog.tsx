import Image from 'next/image'
import Link from 'next/link'

const Catalog = ({ title, image, id, has_subcategories }: any) => {
  return (
    <Link
      href={has_subcategories ? `/brand/${id}` : `/products/${id}`}
      className='flex flex-col items-center bg-white shadow-md rounded-lg  hover:scale-[1.02] transition duration-300 group'
    >
      <Image width={"400"} height={"200"} className='w-full h-full object-cover rounded-t-lg group-hover:opacity-95 transition duration-300' src={image ?? "https://e-giftly.com/images/brands/ps4.jpg"} alt={title} />
      <h2 className='text-lg font-bold mt-4 mb-4'>{title}</h2>
    </Link>
  )
}

export default Catalog
