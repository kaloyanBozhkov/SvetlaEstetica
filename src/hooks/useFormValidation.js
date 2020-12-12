import { useState } from 'react'

const cloneDefaultValues = (defaultValues) => {

    // this will overlook functions, regexp etc.. so we gotta apply the custom rules again
    const deepClone = JSON.parse(JSON.stringify(defaultValues))

    // get { fieldName: customRules } from defaultValues obj
    Object.keys(defaultValues).forEach((formName) => {
        const customRules = defaultValues[formName]?.validation?.customRules || null
        if (defaultValues[formName]?.validation) {
            deepClone[formName].validation.customRules = customRules
        }
    })

    return deepClone
}
/**
 * Hook for input capturing and validation
 * 
 * Additional inputHandler functions should be added to handle more complex forms and edge case that are not handled
 * 
 * @param {object} defaultValues: Form Object to be initialised => { inputName: { value: '', validation: { touched: bool, required: bool, valid: bool, customChecks: fn } } }
 * See helper fromStore for object structure
 */
function useFormValidation(defaultValues) {
    const [form, setInput] = useState(cloneDefaultValues(defaultValues))

    // General input handler
    const handleInputChange = (event) => {

        // Our target attributes
        const target = event.target
        const value = target.checked ? target.checked : target.value
        const name = target.name

        // Make a copy of the form
        const updatedForm = { ...form }

        // Update the form
        const updatedFormElement = { ...updatedForm[name] }
        updatedFormElement.value = value
        updatedFormElement.validation.valid = checkValidation(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.validation.touched = true
        updatedForm[name] = updatedFormElement

        setInput(updatedForm)
    }

    // Reset store to default valus
    const setDefaults = () => {
        setInput({ ...defaultValues })
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

    const consumeValidation = (name) => {
        if (name) {

            // Make a copy of the form
            const updatedForm = { ...form }

            // Update the form
            const updatedFormElement = { ...updatedForm[name] }
            updatedFormElement.validation.valid = false
            updatedFormElement.validation.touched = false
            updatedForm[name] = updatedFormElement

            setInput(updatedForm)
        }

        return setInput(Object.keys(form).reduce((acc, key) => ({
            ...acc,
            [key]: {
                ...form[key],
                validation: {
                    ...form[key].validation,
                    touched: false,
                    valid: false,
                }
            }
        }), {}))
    }

    return [form, handleInputChange, setFormSubmission, setDefaults, consumeValidation]
}

/**
 * General validation function for form inputs
 * 
 * @param {string} value 
 * @param {object} validation: { required, customChecks: { p: fn, ... }} => customChecks should be a predicate fn else coercion will handle bool conversion
 */
export function checkValidation(value, validation) {
    const { required, customRules } = validation
    let isValid = true

    if (required) {
        isValid = value.trim() !== '' && isValid
    }

    if (customRules) {
        // loop all custom checks and make sure none are failing
        const passesAllTests = Object.values(customRules).every((check) => check(value))
        isValid = passesAllTests && isValid
    }

    return isValid
}

export default useFormValidation