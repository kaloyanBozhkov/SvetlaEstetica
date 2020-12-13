import useDataFetch from './useDataFetch'

// allows to handle data/loading/erorr with ErrorBoundary and Suspense instead of variables returned
const useResource = (promiseFn, checker) => {
    const [response,, error, performDataFetch] = useDataFetch(promiseFn, checker)

    return {
        read() {
            if (error) throw error
            if (response) return response
            throw promiseFn
        },
        refetch(...args) {
            performDataFetch(...args)
        },
    }
}
 
export default useResource