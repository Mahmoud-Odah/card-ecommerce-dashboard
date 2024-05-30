import Link from 'next/link'

const Catalog = ({ title, image, link }: any) => {
  return (
    <Link
      href={link}
      className='flex flex-col items-center bg-white shadow-md rounded-lg  hover:scale-[1.02] transition duration-300 group'
    >
      <img className='w-full h-full object-cover rounded-t-lg group-hover:opacity-95 transition duration-300' src={image} alt={title} />
      <h2 className='text-lg font-bold mt-4 mb-4'>{title}</h2>
    </Link>
  )
}

export default Catalog
