import React from 'react'
import loading from '../assets/images/loading.gif'

const Spinner = () => {
  return (
    <div className="has-text-centered">
      <img src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
