import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import useAxiosGet from '../Hooks/HttpRequests'

export default function Product () {
  const { id } = useParams()
  const url = `https://5f26dc810824d8001655ec9d.mockapi.io/products/${id}`

  const product = useAxiosGet(url)

  let content = null

  if (product.error) {
    content = <p>There was an error refresh or try again</p>
  }

  if (product.loading) {
    content = <Loader />
  }

  if (product.data) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className='font-bold text-xl mb-3'>$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    )
  }

  return <div>{content}</div>
}
