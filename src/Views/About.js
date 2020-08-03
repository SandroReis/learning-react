import React from 'react'
import PersonCard from '../Components/PersonCard'

export default function About () {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>About me</h1>
      <PersonCard />
      <p className='mt-2 lg:mt-6'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        est id tempore accusamus ullam facere ipsum minima corrupti repudiandae,
        aliquid illo, quaerat labore et aliquam possimus esse perspiciatis totam
        voluptatibus.
      </p>
    </div>
  )
}
