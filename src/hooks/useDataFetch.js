import { useCallback, useEffect, useState } from 'react'

/**
 * @param {fetch func} fetcher => fetch
 * @param {func} checker => predicate acting as gate for fetch
 * @returns {[data, loading, error]}
 */
const useDataFetch = (fetcher, checker = () => true) => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [data, setData] = useState()

    const performDataFetch = useCallback((...args) => {
        // set loading
        setLoading(true)

        // start async promise, and update data or error when fulfilled (handle eiuther rejected or resolved)
        fetcher(...args)
            .then(resp => resp.json())
            .then(setData)
            .catch(setError)
    }, [fetcher])

    // on mount run fetch if check passes
    useEffect(() => checker() && performDataFetch(), [performDataFetch, checker])

    // return data loading error and fn to re-fetch data if needed
    return [data, loading, error, performDataFetch]
}

export default useDataFetch