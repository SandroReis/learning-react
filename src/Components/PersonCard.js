import React from 'react'

export default function PersonCard () {
  return (
    <>
      <div className='max-w-sm w-full lg:max-w-full lg:flex'>
        <div
          className='h-48  lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
          style={{
            'background-image':
              'url("http://lorempixel.com/640/480/nightlife/")'
          }}
          title='Me'
        />
        <div className=' border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-8'>
            <div className='text-gray-900 font-bold text-xl mb-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
