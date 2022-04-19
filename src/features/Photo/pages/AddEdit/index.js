import React from 'react'
import PhotoForm from "features/Photo/components/PhotoForm"
import Images from 'constants/images'

import styles from './AddEdit.module.scss'
import Banner from 'components/Banner'


AddEditPage.propTypes = {};

function AddEditPage(props) {
    return (
        <div>
            <Banner title="Pick your beautiful photo" backgroundURL={ Images.ADDEDIT_BANNER }/>

            <div className={ styles.form }>
                <PhotoForm onSubmit={ values => console.log('Form submit: ', values)} />
            </div>
        </div>
    )
}

export default AddEditPage;