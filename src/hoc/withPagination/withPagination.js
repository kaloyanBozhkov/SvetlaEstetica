import React from 'react'

import Pagination from 'UI/Pagination/Pagination.container'

const withPagination = (WrappedComponent) => ({ pagination, onChangePage, ...otherProps }) => {

  // if there is an error, return the wrapped component immediatelly
  if (otherProps.hasError) {
    return <WrappedComponent {...otherProps} />
  }

  return (
    <React.Fragment>
      <WrappedComponent {...otherProps} />
      {pagination && ( // pagination is indeed set (not null)
        <Pagination
          endPageNumber={Math.ceil(pagination.total / pagination.limit)}
          currentPageNumber={pagination.page}
          onClickUpdatePageState={onChangePage}
          worksWithStateInsteadOfRoutes
        />
      )}
    </React.Fragment>
  )
}

export default withPagination
