import { Button, Flex, Grid, Input } from '@chakra-ui/core'
import React, { useEffect } from 'react'

// import hooks
import useFormValidation from '~/hooks/useFormValidation'
import useEscapeKeyPressEvent from '~/hooks/useEscapeKeyPressEvent'

// import components
import Icon from 'UI/Icon/Icon'
import { SpinnerCircular } from 'spinners-react'

const styles = {
    contianer: {
        bg: 'white',
        paddingTop: '22'
    },
    input: {
        height: '8rem',
        border: 'none',
        textTransform: 'capitalize'
    },
    searchWrapper: {
        borderBottom: '1px solid',
        borderBottomColor: 'neutral.100',
        h: 'min-content',
        w: '100%'
    }
}

let timer = null

const initialInputs = {
    search: {
        value: '',
        validation: {
            required: true,
            touched: false,
            valid: false,
            customRules: {
                isMinLength: (v) => v.toString().length > 2
            }
        }
    }
}

const Search = ({ searchActive = false, isLoading = false, onClearSearch = (f) => f, onSearch = (f) => f, onCloseSearch = (f) => f }) => {
    // hook controlling escape on window to close search
    useEscapeKeyPressEvent(onCloseSearch)

    const [inputs, handleInputChange, onSubmit, onSetDefaults, consumeValidation] = useFormValidation(initialInputs)

    // handle search by input
    useEffect(() => {
        // if input is valid (passes its customRules)
        if (inputs.search.validation.valid) {

            const value = onSubmit().search

            // if timer is already counting, restart it!
            if (timer) window.clearTimeout(timer)

            timer = window.setTimeout(() => {
                onSearch(value)

                // after running this block, consume validation so to allow it to run only after on input makes it pass validation again
                consumeValidation()
            }, 500)

            // on unmount be sure to clear
            return () => window.clearTimeout(timer)
        }
    }, [inputs.search, onSearch, onSubmit, consumeValidation])

    const clearSearchClick = () => {
        if (searchActive) onClearSearch()
        onSetDefaults(initialInputs)
    }

    return (
        <Flex {...styles.contianer}>
            <Flex {...styles.searchWrapper}>
                <Input data-test-id="input" placeholder="search by typing.. (write 'test' to fall back to stubs)" name="search" value={inputs.search.value} onChange={handleInputChange} {...styles.input} />
                {(searchActive || !isLoading) && (
                    <Flex alignItems="center" padding="2">
                        <Button data-test-id="clearSearchBtn" bg="none" onClick={clearSearchClick}>clear search</Button>
                    </Flex>
                )}
                <Flex padding="4" alignItems="center">
                    {isLoading ? (
                        (<SpinnerCircular data-test-id="spinner" size="18" color="black" thickness="135" />)
                    ) : (<Button data-test-id="closeSearchBtn" bg="none" onClick={onCloseSearch}><Icon icon="times" /></Button>)}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Search