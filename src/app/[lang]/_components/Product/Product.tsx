import React from 'react'

import Image from 'next/image'

const Product = ({image, name, price, description}: any) => {
  return (
    <div className='flex flex-col justify-between gap-2 bg-transparent p-4 shadow-md rounded-lg overflow-hidden group'>
    <Image
      width={700}
      height={250}
      src={image ?? 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
      alt={name}
      className='w-full rounded-md mb-2 group-hover:scale-[1.01] transition duration-300'
    />
    <div className=''>
      <h2 className='text-lg font-semibold mb-2' style={{ lineHeight: '20px' }}>
        {name}
      </h2>
      <p className='text-[#b6b6b6] mb-0 text-sm'>{description}</p>
      <p className='font-bold mt-2 text-[#7367f0]'>${price}</p>
      <button className='mt-4 w-full bg-custom-gradient font-bold text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer'>
        Buy Now
      </button>
    </div>
  </div>
  )
}

export default Product