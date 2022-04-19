
import PropTypes from 'prop-types'
import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap'

import Select from 'react-select'

import { ErrorMessage } from 'formik'

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    from: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

SelectField.defaultProps = {
   
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}

function SelectField(props) {

    const { field, options, label,  placeholder, disabled, form } = props

    // const { name, value, onChange, onBlur } = field
    const { name, value } = field
    const selectedOption = options.find(op => op.value === value)

    const { errors, touched } = form;

    const showError = errors[name] && touched[name]

    console.log(`showError: ${showError}`);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }

        field.onChange(changeEvent)
    }

    return (
        <FormGroup>
            { label &&  <Label for={ name }> { label } </Label> }
           
            <Select id={name}

                {...field}
                value={selectedOption}
                // name
                // value
                // onChange
                // onBlur
                onChange={handleSelectedOptionChange}
                disabled={disabled}
                placeholder={placeholder}
                options={options}
                className={ showError ? 'is-invalid' : ''}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

export default SelectField 