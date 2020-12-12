import { useEffect, useState } from 'react'

/**
 * @param {fetch func} fetcher => fetch
 * @param {func} checker => predicate acting as gate for fetch
 * @returns {[data, loading, error]}
 */
const useDataFetch = (fetcher, checker) => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [data, setData] = useState()

    useEffect(() => {

        if (checker()) {

            // set loading
            setLoading(true)

            // start async promise, and update data or error when fulfilled (handle eiuther rejected or resolved)
            fetcher()
                .then(resp => resp.json())
                .then(setData)
                .catch(setError)
        }
    }, [fetcher, checker])


    return [data, loading, error]
}

export default useDataFetch