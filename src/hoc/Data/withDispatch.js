import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/**
 * HOC pattern with hooks
 */
const withDispatch = ({ type, payload={} }) => WrappedComponent => {
    const HasData = ({ ...otherProps }) => {
        const dispatch = useDispatch()
        
        // Make request onMount
        useEffect(() => {
            dispatch({
                type,
                payload
            })
        }, [dispatch])

        return <WrappedComponent {...otherProps} />
    }
    return HasData
}

export default withDispatch