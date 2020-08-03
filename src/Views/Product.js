import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import useAxiosGet from '../Hooks/HttpRequests'
import PrimaryButton from '../Components/PrimaryButton'

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
      <div className='object-contain'>
        <h1 className='font-sans text-5xl text-gray-800 text-center mb-4'>
          {product.data.name}
        </h1>
        <div className='flex m-4 flex-col lg:flex-row  max-w-full'>
          <img
            className='max-w-full object-contain mb-8 m-auto lg:ml-2 lg:max-w-xl lg:mr-4 shadow-md '
            src={product.data.images[0].imageUrl}
            alt={product.data.name}
          />
          <div className=''>
            <h1 className='font-bold text-lg text-green-800'>
              {product.data.name}
            </h1>
            <p className='mt-4 mb-4 md:mb-12 font-sans text-gray-800'>
              {product.data.description}
            </p>
            <span className='mt-2'>Price: R$ {product.data.price}</span>
            <div className='flex flex-wrap m-2 justify-center'>
              <PrimaryButton link='buy-page' text='Comprar agora' />
              <PrimaryButton link='carrinho' text='Adicionar ao carrinho' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div>{content}</div>
}
