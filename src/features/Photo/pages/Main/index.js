import Banner from "components/Banner";
import { Container, Row, Col } from 'bootstrap-4-react'

import { Link } from 'react-router-dom'
import Images from "constants/images";
import { useSelector } from "react-redux";

import PhotoList from 'features/Photo/components/PhotoList'

function MainPage(props) {

    const photos = useSelector(state => state.photos);

    const handlePhotoEditClick = (photo) => {
        console.log('edit: ', photo)
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo)
    }
    return (
        <div>
           <Banner title="香港航空✈️公司" backgroundURL={ Images.BANNER }> </Banner>

           <Container className="text-center">
                <Link to='/photos/add'> Add new photo </Link>
                <PhotoList 
                    items={ photos }  
                    onPhotoEditClick = { handlePhotoEditClick }
                    onPhotoRemoveClick = {handlePhotoRemoveClick}
                >  
                </PhotoList>
           </Container>

        </div>
    )
}

export default MainPage;