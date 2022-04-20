import React  from 'react'
import PhotoForm from "features/Photo/components/PhotoForm"
import Images from 'constants/images'

import Banner from 'components/Banner'
import { useDispatch, useSelector } from 'react-redux'

import { editPhoto } from 'features/Photo/photoSlice'
import { useNavigate, useParams } from 'react-router-dom'

EditPage.propTypes = {};

function EditPage(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { photoId } = useParams();
    console.log(photoId)

    const editedPhoto = useSelector(state => state.photos.find(x => x.id == photoId))
    console.log('editedPhoto: ', editedPhoto)

    const handleSubmit = (values) => {
        console.log('Form submit: ', values)

        const action = editPhoto(values) // action from reduce (photoSlice)
        console.log({ action })
        dispatch(action);

        navigate('/photos') // chuyen huong sang photos
    }

    return (
        <div>
            <Banner title="Pick your beautiful photo" backgroundURL={ Images.ADDEDIT_BANNER }/>

            <div>
                <PhotoForm 
                    isEdit
                    initialValues = { editedPhoto }
                    onSubmit={ handleSubmit } />
            </div>
        </div>
    )
}

export default EditPage;