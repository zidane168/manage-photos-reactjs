import { PHOTO_CATEGORY_OPTIONS } from 'constants/global.js'
import Images from 'constants/images.js'

import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col, Button, FormGroup, Input, Label, Container } from 'reactstrap'
import { Formik, Form, FastField } from 'formik'

import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField'

import * as Yup from 'yup'

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {

    const initialValue = {
        title: '',
        categoryId: 1,
        photo: ''
    }

    const validateSchema = Yup.object().shape({
        title: Yup.string().required('This fields is required'),
        categoryId: Yup.number().required('This fields is required').nullable(),
        photo: Yup.string().required('This fields is required'),
    })

    return (
        <Container> 
            <Row>
                <Col className="col-md-2"></Col>
                <Col className="col-md-8">
                    <Formik 
                        initialValues={initialValue}
                        validationSchema={validateSchema}
                        onSubmit={props.onSubmit}       // co button submit moi co dong nay
                    >
                        { formikProps => {

                            const { values, errors, touched } = formikProps;
                            // console.log({ values, errors, touched })


                            return(
                                <Form>
                                    <FastField
                                        name="title"
                                        component={ InputField }

                                        label="Title"
                                        placeholder="Ex: This is title of photo"
                                    />

                                    <FastField
                                        name="categoryId"
                                        component={ SelectField }

                                        label="Category"
                                        placeholder="Ex: This is option of photo"
                                        options={ PHOTO_CATEGORY_OPTIONS }
                                    />

                                    <FastField
                                        name="photo"
                                        component={ RandomPhotoField }

                                        label="Photo"
                                    />


                                    <FormGroup>
                                        <Button type="submit" color="primary"> Add to album </Button>
                                    </FormGroup> 
                                </Form>
                            )
                           
                        }}
                        
                    </Formik>
                </Col>
                <Col className="col-md-2"></Col>
            </Row>
           
        </Container>
    )
}

export default PhotoForm;