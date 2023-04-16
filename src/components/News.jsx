import React, { useState, useEffect } from 'react'

import NewsItem from './NewsItem'
import Pagination from './Pagination'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

function News({ country = 'IN', category = 'world', pageSize = 10, setTopLoading }) {
  const [articles, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  const getNews = async () => {
    setTopLoading(10)
    const url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=${country}&lang=en&page_size=${pageSize}&page=${page}&topic=${category}`
    const res = await fetch(url, {
      headers: {
        'x-api-key': import.meta.env.VITE_apiKey,
      },
    })
    const data = await res.json()
    setArticle(data.articles)
    setTotalResults(data.total_hits)
    setLoading(false)
    setTopLoading(100)
  }

  useEffect(() => {
    getNews()
  }, [page])

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1, string.length)

  document.title = `HeadLiner | ${category == 'general' ? 'Home' : capitalize(category)}`

  return (
    <main>
      <section className='top-heading'>
        <h1>{category == 'general' ? 'Top Headlines' : `Top ${capitalize(category)} Headlines`}</h1>
      </section>

      <section
        className='main  columns is-multiline is-vcentered '
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
                key={article.link}
                title={article.title}
                description={article.summary}
                imageURL={article.media}
                URL={article.link}
                author={article.author}
                date={article.published_date}
                source={article.rights}
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
