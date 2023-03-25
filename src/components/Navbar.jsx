import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar is-spaced ' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item is-size-3' href='/'>
          HeadLiner
        </a>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
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
