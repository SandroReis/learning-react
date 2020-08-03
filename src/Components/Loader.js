import React from 'react'

export default function Loader () {
  return (
    <div className='flex justify-center'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
