
import PropTypes from 'prop-types'
import React from 'react'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { Formik, Form, FastField } from 'formik'

import InputField from 'custom-fields/InputField'
import PasswordField from 'custom-fields/PasswordField'

import 'assets/styles/global.scss'

import * as Yup from 'yup'


LoginForm.propTypes = {
    onSubmit: PropTypes.func
}

LoginForm.defaultProps = {
    onSubmit: null,
}

function LoginForm(props) {

    const { initialValues } = props;

    // console.log('initialValues: LoginForm: ', initialValues)

    const validateSchema = Yup.object().shape({
        username: Yup.string().required('This fields is required'),
        password: Yup.string().required('This fields is required'),
    })

    return (
        <div className="d-flex"> 
            <Formik 
                initialValues={ initialValues }
                validationSchema={validateSchema}
                onSubmit={props.onSubmit}       // co button submit moi co dong nay
            >
                { formikProps => {
                    const { isSubmitting } = formikProps;
                    return(
                        <Form className="login-form">
                            <FastField
                                name="username"
                                component={ InputField }
                                label="username"
                                placeholder="Input your username"
                            />

                            <FastField
                                name="password"
                                component={ PasswordField }
                                label="password"
                                placeholder="Input your password"
                            />

                            <FormGroup className="text-right">
                                <Button type="submit" color="primary" className="btn-large" > 
                                    { isSubmitting && <Spinner size="md" />}           {/* dang submit , khi click submit chua chay xong va hien thi cai Spinner (reactstrap) */}                                    
                                    Login
                                </Button>

                                <Button type="reset" color="warning" className="ml-10 btn-large" > 
                                    Reset
                                </Button>
                            </FormGroup> 
                        </Form>
                    )
                }}
                
            </Formik>
           
        </div>
    )
}

export default LoginForm;