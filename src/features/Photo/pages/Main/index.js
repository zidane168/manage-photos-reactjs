import Banner from "components/Banner";
import { Container } from 'bootstrap-4-react'

import { Link } from 'react-router-dom'
import Images from "constants/images";
import { useSelector } from "react-redux";

function MainPage(props) {

    const photos = useSelector(state => state.photos);
    console.log('List off photo: ', photos)

    return (
        <div>
           <Banner title="香港航空✈️公司" backgroundURL={ Images.BANNER }> </Banner>

           <Container className="text-center">
                <Link to='/photos/add'> Add new photo </Link>
           </Container>
        </div>
    )
}

export default MainPage;