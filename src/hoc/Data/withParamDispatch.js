import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/**
 * Dispatches action object initialized with a routing parameter passed to it
 * @param  {func} action => action obj creator
 * @param  {string} param => name of route var to take from match.params
 */
const withParamDispatch = (action, param) => WrappedComponent => ({ ...otherProps }) => {
    const { match } = otherProps

    // if no match in props (withRouter missing) or route var not present then return component?
    if (!match || (match && !match.params[param])) {
        return <WrappedComponent {...otherProps} hasError="Routing not set-up properly?" /> // @TODO maybe a different erorr msg?
    }

    const dispatch = useDispatch()

    // Make request onMount
    useEffect(() => {
        dispatch(action(match.params[param]))
    }, [dispatch, match])

    return <WrappedComponent {...otherProps} />
}

export default withParamDispatch
