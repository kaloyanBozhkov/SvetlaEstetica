import { useState } from 'react'

/**
 * Hook for input capturing and validation
 * 
 * Additional inputHandler functions should be added to handle more complex forms and edge case that are not handled
 * 
 * @param {object} defaultValues: Form Object to be initialised.
 * See helper fromStore for object structure
 */
function useFormValidation(defaultValues) {

    // loosing undefined, Infinity, RegExp + other valuable data -- make sure this is acceptable or circumvent it!
    const deepClone = JSON.parse(JSON.stringify(defaultValues))

    const [form, setInput] = useState(deepClone)

    // General input handler
    const handleInputChange = (event) => {

        // Our target attributes
        const target = event.target
        const value = target.checked ? target.checked : target.value
        const name = target.name

        // confirmPassword is nested inside password so we check here
        if (name === 'confirmPassword') {
            return setInput({
                ...form, 
                password: {
                    ...form.password,
                    validation: {
                        ...form.password.validation,
                        confirmPassword: value,
                        touched: true,
                        valid: checkValidation(value, form.password.validation, form.password.value)
                    }
            }})
        }

        // Make a copy of the form
        const updatedForm = {...form}

        // Update the form
        const updatedFormElement = {...updatedForm[name]}
        updatedFormElement.value = value
        updatedFormElement.validation.valid = checkValidation(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.validation.touched = true
        updatedForm[name] = updatedFormElement

        setInput(updatedForm)
    }

    // Reset store to default valus
    const setDefaults = () => {
        setInput({...defaultValues})
    }

    // Format our form and return only the values
    const setFormSubmission = () => {
        const formData = {}

        // Loop through our form and get the values
        for (let formElementIdentifier in form) { 
            formData[formElementIdentifier] = form[formElementIdentifier].value
        }

        return formData
    }

    return [form, handleInputChange, setFormSubmission, setDefaults] 
}

/**
 * General validation function for form inputs
 * 
 * @param {string} value 
 * @param {object} validation 
 * @param {string} stateValue 
 */
export function checkValidation(value, validation, stateValue) {
    const { required, rules} = validation
    let isValid = true

    if (required) {
        isValid = value.trim() !== '' && isValid
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.passwordRequirements) {
        /**
        * Minimum of eight (8) characters in length. 
        * Must containt at least 1 of the following: 
        * Uppercase letter (A-Z), 
        * lowercase (a-z), number (0-9) and any special character.
        */
        isValid = new RegExp(rules.passwordRequirements).test(value) && isValid
    }

    if (rules.passwordMatch) {
        isValid = value === stateValue && isValid
    }

    if (rules.selectChoice) {
        isValid = value !== 'please choose' && isValid
    }

    return isValid
}

export default useFormValidation
