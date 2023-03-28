import { useState, useEffect } from 'react'
import upArrow from '../assets/images/up-arrow.svg'

const ScrollBtn = () => {
  const [active, setActive] = useState(false)
  const showScrollDiv = () => {
    if (window.scrollY > window.innerHeight) setActive(true)
    else setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', showScrollDiv)
    return () => {
      window.removeEventListener('scroll', showScrollDiv)
    }
  })

  const handleScroll = () => {
    document.body.scrollIntoView()
  }

  return (
    <div className={`scroll ${active ? 'active' : null} `} role='button'>
      <span className='scroll__btn' onClick={handleScroll}>
        <img src={upArrow} alt='scroll to top' className='scroll__icon' />
      </span>
    </div>
  )
}

export default ScrollBtn
