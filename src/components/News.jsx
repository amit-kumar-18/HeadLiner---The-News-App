import React, { useState, useEffect } from 'react'

import NewsItem from './NewsItem'
import Pagination from './Pagination'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

function News({ country = 'in', category = 'general', pageSize = 10 }) {
  const [articles, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  const getNews = async () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=33a6b26cda9046009121cbc5c1b281c0&pageSize=${pageSize}&page=${page}`
    setLoading(true)
    const res = await fetch(URL)
    const data = await res.json()
    setArticle(data.articles)
    setTotalResults(data.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    getNews()
  }, [page])

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1, string.length)

  document.title = `HeadLiner - ${capitalize(category)}`

  return (
    <main>
      <section className='top-heading'>
        <h1>
          {'HeadLiner - '}
          {category == 'general' ? 'Top Headlines' : `Top ${capitalize(category)} Headlines`}
        </h1>
      </section>

      <section
        className='main px-6 columns is-multiline is-vcentered '
        style={{
          gap: '1rem',
          justifyContent: 'space-evenly',
          minHeight: '90vh',
        }}
      >
        {loading && <Spinner />}
        {!loading &&
          articles.map((article) => {
            return (
              <NewsItem
                key={article.url}
                title={article.title}
                description={article.description}
                imageURL={article.urlToImage}
                URL={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            )
          })}
      </section>

      <section className='pagination'>
        <Pagination
          page={page}
          setPage={setPage}
          getNews={getNews}
          totalResults={totalResults}
          pageSize={pageSize}
        />
      </section>
    </main>
  )
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}

export default News
