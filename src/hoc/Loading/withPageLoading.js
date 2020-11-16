import React from 'react'

// Load components
import Loading from 'UI/Loading/Loading'

const withLoading = ({ loadingMsg }) => WrappedComponent => {
            
    const Spinner = ({ isLoading, ...otherProps }) => {
    
        return isLoading ? 
            <Loading loadingMsg={loadingMsg} isAbsolutelyPositioned />
           : 
            <WrappedComponent  {...otherProps}/>
    }

    return Spinner
}

export default withLoading
