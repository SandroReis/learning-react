import React from 'react'
import { Link } from 'react-router-dom'

export default function PrimaryButton ({ link, text }) {
  return (
    <Link to={`/${link}`}>
      <button className='bg-green-700 m-2 hover:bg-green-600 text-white p-2 flex justify-center'>
        {text}
      </button>
    </Link>
  )
}
