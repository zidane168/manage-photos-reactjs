
import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label } from 'reactstrap'
import RandomPhoto from 'components/RandomPhoto'

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
        </FormGroup>
    )
}

export default RandomPhotoField 