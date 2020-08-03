import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard ({
  product: { name, price, description, images, id }
}) {
  return (
    <div className='shadow-md max-w-full md:max-w-sm p-2 object-contain'>
      <Link to={`/products/${id}`} href='/products/[product]'>
        <img
          className='object-contain w-full'
          src={images[0].imageUrl}
          alt={name}
        />
      </Link>
      <div className='shadow-md p-2'>
        <p className='text-sm'>{description}</p>
        <span className=''>R$ {price}</span>
        <Link
          to={`/products/${id}`}
          className='bg-green-700 hover:bg-green-600 text-white p-2 flex justify-center'
        >
          View
        </Link>
      </div>
    </div>
  )
}
