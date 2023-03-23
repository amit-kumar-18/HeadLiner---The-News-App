const Pagination = ({ page, setPage, req, getNews }) => {
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1)
  }
  const handleNext = () => {
    if (page < 100) setPage(page + 1)
  }

  return (
    <nav
      className="pagination is-rounded is-centered is-fixed-bottom is-align-self-flex-end mb-4"
      role="navigation"
      aria-label="pagination"
      style={{ width: '100%' }}
    >
      <a
        className="pagination-previous"
        onClick={handlePrevious}
        disabled={page <= 1}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        onClick={handleNext}
        disabled={page >= 100}
      >
        Next page
      </a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link is-current" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>

        <li>
          <a
            className="pagination-link "
            aria-label="Page 46"
            aria-current="page"
          >
            3
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            4
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            6
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
