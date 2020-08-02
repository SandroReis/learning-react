import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard ({
  product: { name, price, description, images, id }
}) {
  return (
    <div className='border mb-4 rounded overflow-hidden'>
      <Link to={`/products/${id}`}>
        <div
          className='w-full h-64 bg-blue bg-cover'
          style={{
            backgroundImage: `url('${images[0].imageUrl}')`
          }}
        />
      </Link>
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
