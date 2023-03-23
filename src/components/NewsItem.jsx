import React from 'react'

export default function NewsItem({ title, description, imageURL, URL }) {
  return (
    <div className="card column  is-one-third-tablet is-3-desktop">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={
              imageURL
                ? imageURL
                : 'https://cdn.ndtv.com/common/images/ogndtv.png'
            }
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-5" style={{ overflow: 'hidden' }}>
              {title}
            </p>
          </div>
        </div>

        <div className="content is-6">
          {description ? description : 'To read more follow the link'}
        </div>
        <a href={URL} target="_blank" className="button is-info is-small">
          Read More
        </a>
      </div>
    </div>
  )
}
