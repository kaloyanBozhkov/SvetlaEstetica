import { useEffect } from 'react'

function useEscapeKeyPressEvent(fn) {
    useEffect(() => {
        const handleEvent = (event) => {
            if (event.key === 'Escape') fn()
        }
        window.addEventListener('keydown', handleEvent)
        return () => window.removeEventListener('keydown', handleEvent)
    }, [fn])
}

export default useEscapeKeyPressEvent
