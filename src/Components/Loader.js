import React from 'react'

export default function Loader () {
  return (
    <div className='flex justify-center'>
      <div class='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
