import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Dispatches action object initialized with a Component's prop parameter passed to it
 * @param  {func} action => action obj creator
 * @param  {string} param => name of prop to take from props, does not delete it
 * @param {func} customChecks => optional: custom checks fn to run on prop value
 */
const withPropDispatch = (action, prop, customChecks) => WrappedComponent => (props) => {
    const value = props[prop]

    // if no match in props (withRouter missing) or route var not present then return component?
    if (value === undefined) {
        return <WrappedComponent {...props} hasError={`property ${prop} not found!`} />
    }


    const dispatch = useDispatch()

    // Make request onMount
    useEffect(() => {

        // d nothing if custom chek fails
        if (!customChecks(value)) {
            return
        }

        dispatch(action(value))
        
    }, [dispatch, value])

    return <WrappedComponent {...props} />
}

withPropDispatch.propTypes = {
    action: PropTypes.objectOf({
        type: PropTypes.string.isRequired,
        payload: PropTypes.any
    }),
    prop: PropTypes.string
}

export default withPropDispatch
