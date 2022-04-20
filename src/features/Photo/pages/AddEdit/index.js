import React from 'react'
import PhotoForm from "features/Photo/components/PhotoForm"
import Images from 'constants/images'

import styles from './AddEdit.module.scss'
import Banner from 'components/Banner'
import { useDispatch } from 'react-redux'

import { addPhoto } from 'features/Photo/photoSlice'

AddEditPage.propTypes = {};

function AddEditPage(props) {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log('Form submit: ', values)

        const action = addPhoto(values)
        console.log({ action })
        dispatch(action);
    }

    return (
        <div>
            <Banner title="Pick your beautiful photo" backgroundURL={ Images.ADDEDIT_BANNER }/>

            <div className={ styles.form }>
                <PhotoForm onSubmit={ handleSubmit } />
            </div>
        </div>
    )
}

export default AddEditPage;