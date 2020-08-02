import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

export default function Home () {
  let content = null
  const url =
    'https://5f26dc810824d8001655ec9d.mockapi.io/products?page=1&limit=10'
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  })

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    })
    axios
      .get(url)
      .then(response => {
        setProducts({
          loading: false,
          data: response.data,
          error: false
        })
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true
        })
      })
  }, [url])

  if (products.error) {
    content = <p>There was an error refresh or try again</p>
  }

  if (products.loading) {
    content = <Loader />
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ))
  }

  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>Best Sellers</h1>
      {content}
    </div>
  )
}
