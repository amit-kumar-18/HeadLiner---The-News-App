const Pagination = ({ page, setPage, totalResults, pageSize }) => {
  const maxPage = Math.ceil(totalResults / pageSize)
  const midPage = maxPage / 2

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
      className='pagination is-rounded is-centered is-fixed-bottom is-align-self-flex-end '
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
      <ul className='pagination-list '>
        <li>
          <a
            className={`pagination-link ${page == 1 ? 'is-current' : null}`}
            aria-label='Goto page 1'
          >
            1
          </a>
        </li>
        <li>
          <span className='pagination-ellipsis'>&hellip;</span>
        </li>
        <li>
          <a
            className={`pagination-link ${page !== maxPage && page !== 1 ? 'is-current' : null}`}
            aria-label={'goto page' + midPage}
          >
            {page !== 1 && page !== maxPage ? page : midPage}
          </a>
        </li>

        <li>
          <span className='pagination-ellipsis'>&hellip;</span>
        </li>
        <li>
          <a
            className={`pagination-link ${page == maxPage ? 'is-current' : null}`}
            aria-label={'goto page' + maxPage}
          >
            {maxPage}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
