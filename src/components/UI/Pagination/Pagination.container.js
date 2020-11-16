import React from 'react'
import Pagination from './Pagination'
import createPaginationLogic from './createPaginationLogic'

const DefaultPagination = ({
  endPageNumber,
  currentPageNumber = 1,
  numbersVisibleLeft = 2,
  numbersVisibleRight = 2,

  ...paginationProps
}) => {
  const pageRange = createPaginationLogic(
    currentPageNumber,
    endPageNumber,
    numbersVisibleLeft,
    numbersVisibleRight
  )
  return (
    <Pagination pageRange={pageRange} currentPageNumber={currentPageNumber} {...paginationProps} />
  )
}

export default DefaultPagination
