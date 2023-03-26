import React from 'react'
import loading from '../assets/images/loading.gif'

const Spinner = () => {
  return (
    <div className='has-text-centered'>
      <img src={loading} alt='loading' className='is-2' height={100} width={100} />
    </div>
  )
}

export default Spinner
