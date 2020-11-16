import React from 'react'
import PropTypes from 'prop-types'

// Load component
import Overlay from 'UI/Overlay/Overlay'

const withComponentLoading = (WrappedComponent) => {
  const LoadingOverlay = ({isLoading, loadingMsg,...otherProps}) => {
    return isLoading ? (
      <Overlay loadingMsg={loadingMsg}>
        <WrappedComponent {...otherProps} />
      </Overlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return LoadingOverlay
}

withComponentLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default withComponentLoading
