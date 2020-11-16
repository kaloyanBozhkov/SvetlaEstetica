import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/**
 * Dispatches action object when component unmounts, good for cleanup (e.g. clear toteRaces when not on tote/cards/:cardId page)
 * @param  {func} action => action obj
 */
const withUnmountDispatch = (actionObject) => WrappedComponent => ({ ...otherProps }) => {
    const dispatch = useDispatch()

    // dispatch on unmount
    useEffect(() => {
        return () => dispatch(actionObject)
    }, [dispatch])

    return <WrappedComponent {...otherProps} />
}

export default withUnmountDispatch