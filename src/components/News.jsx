import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

export default function News() {
  const [articles, setArticle] = useState([])
  useEffect(() => {
    const getArticles = async () => {
      const URL =
        'https://newsapi.org/v2/everything?q=india&pageSize=15&apiKey=4a5cc3ec9fbe4317970e129ba5682533'
      const res = await fetch(URL)
      const data = await res.json()
      setArticle(data.articles)
    }
    getArticles()
  })

  return (
    <div
      className=" section columns is-multiline is-centered "
      style={{ gap: '2.5rem' }}
    >
      {articles.map((article) => {
        return (
          <NewsItem
            key={article.url}
            title={article.title}
            description={article.description}
            imageURL={article.urlToImage}
            URL={article.url}
          />
        )
      })}
    </div>
  )
}
