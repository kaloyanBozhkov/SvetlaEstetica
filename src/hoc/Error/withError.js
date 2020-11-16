import React from 'react'

const withError = (ErrorComponent = Error) => WrappedComponent => {
    const HasError = ({ hasError, ...otherProps }) => {
        return hasError ?
            <ErrorComponent error={hasError} />
            :
            <WrappedComponent {...otherProps} />
    }

    return HasError
}

export default withError