import Banner from "components/Banner";
import { Container } from 'bootstrap-4-react'

import { Link } from 'react-router-dom'
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";

import PhotoList from 'features/Photo/components/PhotoList'
import { useNavigate } from "react-router-dom";

import { removePhoto } from 'features/Photo/photoSlice'

function MainPage(props) {

    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handlePhotoEditClick = (photo) => {
        console.log('edit: ', photo)

        navigate('/photos');
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo)

        const id = photo.id;
        dispatch(removePhoto(id))
    }
    return (
        <div>
           <Banner title="香港航空✈️公司" backgroundURL={ Images.BANNER }> </Banner>

           <Container className="text-center">
                <Link to='/photos/add'> Add new photo </Link>
                <PhotoList 
                    items={ photos }  
                    onPhotoEditClick = { handlePhotoEditClick }
                    onPhotoRemoveClick = { handlePhotoRemoveClick }
                >  
                </PhotoList>
           </Container>

        </div>
    )
}

export default MainPage;