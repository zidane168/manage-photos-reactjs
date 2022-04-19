import { PHOTO_CATEGORY_OPTIONS } from 'constants/global.js'
import Images from 'constants/images.js'

import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col, Button, FormGroup, Input, Label, Container } from 'reactstrap'
import { Formik, Form, FastField } from 'formik'

import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField'

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {

    const initialValue = {
        title: '',
        categoryId: null,
    }

    return (
        <Container> 
            <Row>
                <Col className="col-md-2"></Col>
                <Col className="col-md-8">
                    <Formik 
                        initialValues={initialValue}
                    >
                        { formikProps => {

                            const { values, errors, touched } = formikProps;
                            console.log({ values, errors, touched })


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
                                        <Label for="categoryId"> Photo </Label>
                                        <div>
                                            <Button type="button" outline color="primary"> Random a photo </Button>
                                            <div>
                                                <img width="200px" height="200px" src={Images.BANNER}  alt="Banner demo"/>
                                            </div>
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <Button color="primary"> Add to album </Button>
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