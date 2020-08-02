import React from 'react'
import HelloWorld from '../Components/HelloWorld'

export default function Home () {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>This is the Home page</h1>
      <HelloWorld name='Sandro' />
    </div>
  )
}
