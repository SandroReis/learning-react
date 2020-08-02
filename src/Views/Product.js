import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Product () {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const url = `https://5f26dc810824d8001655ec9d.mockapi.io/products/${id}`

  let content = null

  useEffect(() => {
    axios.get(url).then(response => {
      setProduct(response.data)
    })
  }, [url])

  if (product) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.name}</h1>
        <div>
          <img src={product.images[0].imageUrl} alt={product.name} />
        </div>
        <div className='font-bold text-xl mb-3'>$ {product.price}</div>
        <div>{product.description}</div>
      </div>
    )
  }

  return <div>{content}</div>
}
