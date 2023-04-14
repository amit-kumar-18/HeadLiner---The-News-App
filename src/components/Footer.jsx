import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'
import email from '../assets/images/email.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content '>
        <div className='footer__links'>
          <h1 className='logo__text has-text-white has-text-centered'>HeadLiner</h1>
          <ul>
            <li>
              <a href='https://github.com/amit-kumar-18' target='_blank'>
                <img src={github} alt='GitHub' title='GitHub' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/amit-kumar-86393722a' target='_blank'>
                <img src={linkedin} alt='LinkedIn' title='LinkedIn' />
              </a>
            </li>
            <li>
              <a href='mailto:amitrawal316@gmail.com' target='_blank'>
                <img src={email} alt='Email' title='Email' />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <p className='has-text-black'>
          powered by
          <a href='https://newscatcherapi.com/' target='_blank'>
            &lt;/newscatcher&gt;
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
