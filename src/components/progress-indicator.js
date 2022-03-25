import React from 'react'

const ProgressIndicator = () => {
  return (
    <div>
      <div className='grid grid-cols-5'>
        <span className='inline-flex items-center'>
          <p className='px-2 rounded-full border'>1</p>
          <hr className='w-full' />
        </span>
        <span className='inline-flex items-center'>
          <p className='px-2 rounded-full border'>2</p>
          <hr className='w-full' />
        </span>
        <span className='inline-flex items-center'>
          <p className='px-2 rounded-full border'>3</p>
          <hr className='w-full' />
        </span>
        <span className='inline-flex items-center'>
          <p className='px-2 rounded-full border'>4</p>
          <hr className='w-full' />
        </span>
        <span className='inline-flex items-center'>
          <p className='px-2 rounded-full border'>5</p>
        </span>
      </div>

      <div className='grid grid-cols-5'>
        <p>description longer for 1</p>
        <p>description for 2</p>
        <p>description for 3</p>
        <p>description for 4</p>
        <p>description for 5</p>
      </div>
    </div>
  )
}

export default ProgressIndicator
