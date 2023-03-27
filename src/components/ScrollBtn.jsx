import upArrow from '../assets/images/up-arrow.svg'

const ScrollBtn = () => {
  const handleScroll = () => {
    document.body.scrollIntoView()
  }

  return (
    <div className='scroll active' role='button'>
      <span className='scroll__btn' onClick={handleScroll}>
        <img src={upArrow} alt='scroll to top' className='scroll__icon' />
      </span>
    </div>
  )
}

export default ScrollBtn
