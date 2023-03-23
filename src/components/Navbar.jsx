function NavBar() {
  return (
    <nav
      className="navbar is-spaced "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item is-size-3" href="https://bulma.io">
          HeadLiner
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">General</a>
          <a className="navbar-item">Entertainment</a>
          <a className="navbar-item">Technology</a>
          <a className="navbar-item">Health</a>
          <a className="navbar-item">Sports</a>
          <a className="navbar-item">Business</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item"></div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
