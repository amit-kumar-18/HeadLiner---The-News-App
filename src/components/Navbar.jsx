import { Link } from 'react-router-dom'

function NavBar() {
  const handleNavbarMenu = () => {}

  return (
    <nav className='navbar ' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item is-size-3' href='/' id='logo'>
          HeadLiner
        </a>

        <a
          role='button'
          className='navbar-burger has-text-white '
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          onClick={handleNavbarMenu}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <Link to={'/'} className='navbar-item'>
            Home
          </Link>

          <Link to={'/entertainment'} className='navbar-item'>
            Entertainment
          </Link>
          <Link to={'/technology'} className='navbar-item'>
            Technology
          </Link>
          <Link to={'/health'} className='navbar-item'>
            Health
          </Link>
          <Link to={'/sports'} className='navbar-item'>
            Sports
          </Link>
          <Link to={'/business'} className='navbar-item'>
            Business
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
