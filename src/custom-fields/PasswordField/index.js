
import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import { ErrorMessage } from 'formik'

PasswordField.propTypes = {
    field: PropTypes.object.isRequired,
    from: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

PasswordField.defaultProps = {
    type: 'password',
    label: '',
    placeholder: '',
    disabled: false
}


function PasswordField(props) {

    const { 
        field, form,
        type, label, placeholder, disabled
    } = props

    // const { name, value, onChange, onBlur } = field
    const { name } = field

    const { errors, touched } = form;

    const showError = errors[name] && touched[name]

    return (
        <FormGroup>
            { label &&  <Label for={ name }> { label } </Label> }
           
            <Input id={name}

                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}

                invalid={ showError }   // invalid de cho mau do
            />
            
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

export default PasswordField 