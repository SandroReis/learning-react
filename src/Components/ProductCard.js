import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard ({
  product: { name, price, description, images, id }
}) {
  return (
    <div className='border :max-w-sm mb-4 rounded'>
      <div className=''>
        <Link to={`/products/${id}`}>
          <img className='object-contain' src={images[0].imageUrl} alt={name} />
        </Link>
      </div>
      <div className='p-3'>
        <h3 className='font-bold text-xl mb-3'>
          <Link to={`/products/${id}`}>{name}</Link>
        </h3>
        <div>$ {price}</div>
        <div className='mb-3'>{description}</div>
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
