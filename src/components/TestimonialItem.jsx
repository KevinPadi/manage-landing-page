import React from 'react'

function TestimonialItem ({ text, author, avatar }) {
  return (
    <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
      <img src={avatar} alt='avatar' className='w-20' />
      <p className='text-lg text-DarkBlue font-bold'>{author}</p>
      <p className='text-DarkGrayishBlue'>{text}</p>
    </div>
  )
}

export default TestimonialItem
