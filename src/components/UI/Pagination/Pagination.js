import React from 'react'
import { NavLink } from 'react-router-dom'

// import styles
import styles from './pagination.module.scss'

export const Pagination = ({
  worksWithStateInsteadOfRoutes,
  currentPageNumber,
  onClickUpdatePageState,
  pageRange,
}) => {

  // Do not render pagination if we only have 1 page
  if (pageRange.length === 1) {
    return null
  }
  return (
    <div className={styles.pagination}>
      {pageRange.map((num, key) => {
        return num !== '...' ? (
          worksWithStateInsteadOfRoutes ? (
            <button
              key={key}
              className={num === currentPageNumber ? styles.pagination_activeButton : ''}
              onClick={() => onClickUpdatePageState(num)}
              disabled={num === currentPageNumber}
            >
              {num}
            </button>
          ) : (
            <NavLink key={key} activeClassName={styles.pagination_activeButton} to={num + ''}>
              {num}
            </NavLink>
          )
        ) : (
          <span key={key}>{num}</span>
        )
      })}
    </div>
  )
}

export default Pagination
