
import PropTypes from 'prop-types'
import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import RandomPhoto from 'components/RandomPhoto'
import { ErrorMessage } from 'formik'

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    from: PropTypes.object.isRequired,

    label: PropTypes.string,
}

RandomPhotoField.defaultProps = {
    label: '',
}


function RandomPhotoField(props) {

    const { field, form, label } = props

    // const { name, value, onChange, onBlur } = field
    const { name, value, onBlur } = field

    const { errors, touched } = form;

    const showError = errors[name] && touched[name]

    const handleImageURLChange = (newUrl) => {
        form.setFieldValue(name, newUrl)
    }

    return (
        <FormGroup>
            { label &&  <Label for={ name }> { label } </Label> }
           
            <RandomPhoto 
                name={name}
                imageURL={value}
                onImageURLChange={handleImageURLChange}
                onRandomButtonBlur={onBlur}
            />

            <div className={ showError ? 'is-invalid': ''}> </div>
            <ErrorMessage name={name} component={FormFeedback}> </ErrorMessage>
        </FormGroup>
    )
}

export default RandomPhotoField 