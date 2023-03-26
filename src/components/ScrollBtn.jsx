import upArrow from '../assets/images/up-arrow.svg'

const ScrollBtn = () => {
  const showScrollDiv = () => {
    if (window.scrollY > window.innerHeight) {
      return true
    }
    return false
  }

  console.log(window.scrollY > window.innerHeight)

  const handleScroll = () => {
    document.body.scrollIntoView()
  }

  window.addEventListener('scroll', showScrollDiv)

  return (
    <div className={`scroll ${showScrollDiv === true ? 'active' : null}`} role='button'>
      <span className='scroll__btn' onClick={handleScroll}>
        <img src={upArrow} alt='scroll to top' className='scroll__icon' />
      </span>
    </div>
  )
}

export default ScrollBtn
