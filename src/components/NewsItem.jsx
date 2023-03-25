import React from 'react'
import defaultImg from '../assets/images/defaultImg.jpg'

export default function NewsItem({ title, description, imageURL, URL, author, date, source }) {
  return (
    <div className='card column  is-one-third-tablet is-3-desktop is-relative'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={imageURL ? imageURL : defaultImg} alt='Placeholder image' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title ' style={{ overflow: 'hidden' }}>
              {title}
            </p>
          </div>
        </div>

        <div className='content'>{description ? description : 'To read more follow the link'}</div>
        <p className='my-4 has-text-info'>
          {author ? `By ${author} on` : null} {new Date(date).toUTCString()}
        </p>
        <span className='tag is-danger '>{source}</span>

        <a href={URL} target='_blank' className='button is-info is-small'>
          Read More
        </a>
      </div>
    </div>
  )
}
