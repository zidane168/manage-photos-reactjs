import { PHOTO_CATEGORY_OPTIONS } from 'constants/global.js'
import Images from 'constants/images.js'

import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import { Row, Col, Button, Form, FormGroup, Input, Label, Container } from 'reactstrap'

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {

   return (
        <Container> 
            <Row>
                <Col className="col-md-2"></Col>
                <Col className="col-md-8">
                    <Form>
                    
                        <FormGroup>
                            <Label for="titleId"> Title </Label>
                            <Input name="title" id="titleId" placeholder="Eg: Wow nature ..."/>
                        </FormGroup>


                        <FormGroup>
                            <Label for="categoryId"> Category </Label>
                            <Select 
                                id="categoryId"
                                name="categoryId"
                                placeholder="What's your photo category?"
                                options={ PHOTO_CATEGORY_OPTIONS } 
                            />
                        </FormGroup>

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
                </Col>
                <Col className="col-md-2"></Col>
            </Row>
           
        </Container>
    )
}

export default PhotoForm;