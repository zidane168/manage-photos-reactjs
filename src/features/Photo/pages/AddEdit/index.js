import React from 'react'
import PhotoForm from "features/Photo/components/PhotoForm"
import Images from 'constants/images'

import styles from './AddEdit.module.scss'
import Banner from 'components/Banner'
import { useDispatch } from 'react-redux'

import { addPhoto } from 'features/Photo/photoSlice'
import { useNavigate } from 'react-router-dom'

AddEditPage.propTypes = {};

function AddEditPage(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleSubmit = (values) => {
    //     console.log('Form submit: ', values)

    //     const action = addPhoto(values) // action from reduce (photoSlice)
    //     console.log({ action })
    //     dispatch(action);

    //     navigate('/photos') // chuyen huong sang photos
    // }

    const handleSubmit = (values) => {

        return new Promise(resolve => {
            console.log(`Form submit: `, values);

            setTimeout(() => {
                values.id = Math.floor(Math.random()*90000) + 10000;
                const action = addPhoto(values) // action from reduce (photoSlice)
                console.log({ action })
                dispatch(action);
        
                navigate('/photos') // chuyen huong sang photos
                resolve(true)
            }, 2000)
        })
      
    }

    const initialValue = {
        title: '',
        categoryId: 1,
        photo: ''
    }

    return (
        <div>
            <Banner title="Pick your beautiful photo" backgroundURL={ Images.ADDEDIT_BANNER }/>

            <div className={ styles.form }>
                <PhotoForm 
                    initialValue = { initialValue }
                    onSubmit={ handleSubmit } />
            </div>
        </div>
    )
}

export default AddEditPage;