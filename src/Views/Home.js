import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import useAxiosGet from '../Hooks/HttpRequests'

export default function Home () {
  let content = null
  const url =
    'https://5f26dc810824d8001655ec9d.mockapi.io/products?page=1&limit=10'

  const products = useAxiosGet(url)

  if (products.error) {
    content = <p>There was an error refresh or try again</p>
  }

  if (products.loading) {
    content = <Loader />
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <li key={product.id} className='max-w-full md:max-w-sm  m-auto flex mb-4'>
        <ProductCard product={product} />
      </li>
    ))
  }

  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>Best Sellers</h1>
      <ul className='flex flex-wrap'>{content}</ul>
    </div>
  )
}
