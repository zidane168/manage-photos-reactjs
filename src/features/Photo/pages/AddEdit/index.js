import React from 'react'
import Banner from "./../../../../components/Banner"
import PhotoForm from "./../../components/PhotoForm"

import styles from './AddEdit.module.scss'

AddEditPage.propTypes = {};

function AddEditPage(props) {
    return (
        <div>
            <Banner title="Pick your beautiful photo"/>

            <div className={ styles.form }>
                <PhotoForm onSubmit={ values => console.log('Form submit: ', values)} />
            </div>
        </div>
    )
}

export default AddEditPage;