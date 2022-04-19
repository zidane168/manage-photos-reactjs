
import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label } from 'reactstrap'

import Select from 'react-select'

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

    const { field, options, label,  placeholder, disabled } = props

    // const { name, value, onChange, onBlur } = field
    const { name, value } = field
    const selectedOption = options.find(op => op.value === value)

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
            />
        </FormGroup>
    )
}

export default SelectField 