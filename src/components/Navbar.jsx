import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function NavBar() {
  const navbarItems = document.querySelectorAll('.navbar-item')
  const navbarMenu = document.getElementById('navbarMenu')
  const navbarBurger = document.getElementById('navbarBurger')
  navbarItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      document.body.scrollIntoView()
      handleNavbarMenu()
    })
  })

  const handleNavbarMenu = () => {
    navbarBurger.classList.toggle('is-active')
    navbarMenu.classList.toggle('is-active')
  }

  return (
    <nav className='navbar is-fixed-top ' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item is-size-3 ' href='/' id='logo'>
          <img src={logo} alt='Headline Logo' className='logo__icon' />
          <span className='logo__text'>HeadLiner</span>
        </a>

        <a
          role='button'
          className='navbar-burger has-text-white '
          id='navbarBurger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarMenu'
          onClick={handleNavbarMenu}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarMenu' className='navbar-menu'>
        <div className='navbar-start'>
          <Link to={'/'} className='navbar-item'>
            Home
          </Link>

          <Link to={'/entertainment'} className='navbar-item'>
            Entertainment
          </Link>
          <Link to={'/tech'} className='navbar-item'>
            Tech
          </Link>
          <Link to={'/politics'} className='navbar-item'>
            Politics
          </Link>
          <Link to={'/sport'} className='navbar-item'>
            Sports
          </Link>
          <Link to={'/business'} className='navbar-item'>
            Business
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
