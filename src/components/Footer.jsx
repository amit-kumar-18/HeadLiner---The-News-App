const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content '>
        <h1 className='logo__text has-text-white has-text-centered'>HeadLiner</h1>
        <div className='footer__links'>
          <p className='is-size-5'>
            HeadLiner is a React based News Application which fetches news using News-Catchers API.
            You can read news of multiple genres like Word Affaires, Entertainment, Sports, Politics
            and Business.
          </p>
          <ul>
            <li>
              <a href=''>GitHub</a>
            </li>
            <li>
              <a href=''>LinkedIn</a>
            </li>
            <li>
              <a href=''>Email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
