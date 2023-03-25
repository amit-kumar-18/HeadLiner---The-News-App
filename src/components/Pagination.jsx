const Pagination = ({ page, setPage, totalResults, pageSize }) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1)
      window.scrollTo(top)
    }
  }
  const handleNext = () => {
    if (page < totalResults / pageSize) {
      setPage(page + 1)
      window.scrollTo(top)
    }
  }

  return (
    <nav
      className='pagination is-rounded is-centered is-fixed-bottom is-align-self-flex-end my-4 '
      role='navigation'
      aria-label='pagination'
      style={{ width: '100%' }}
    >
      <a
        className='pagination-previous has-text-white '
        onClick={handlePrevious}
        disabled={page <= 1}
      >
        Previous
      </a>
      <a
        className='pagination-next has-text-white '
        onClick={handleNext}
        disabled={page >= totalResults / pageSize}
      >
        Next page
      </a>
    </nav>
  )
}

export default Pagination
