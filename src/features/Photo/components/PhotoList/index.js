
import { Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import './PhotoList.scss'

import { PHOTO_CATEGORY_OPTIONS } from 'constants/global.js'

PhotoList.propTypes = {
    items: PropTypes.array
}

PhotoList.defaultProps = {
    items: []
}

function PhotoList(props) {

    const { items, onPhotoEditClick, onPhotoRemoveClick } = props 

    const handleEdit = (item) => {
        if (onPhotoEditClick ) {
            onPhotoEditClick(item)
        }
    }

    const handleRemove = (item) => {
        if (onPhotoRemoveClick) {
            onPhotoRemoveClick(item)        // goi lai callback
        }
    }

    const getCategoryName = (id) => {
        // console.log('categoryId: ', id)
        // return id;

        PHOTO_CATEGORY_OPTIONS.forEach(category => {
            console.log('id: ===== ', id);
            
            let name = ""
            if (category['value'] == id) {
                name =  category['label']
                console.log('name: ===== ', name)
                return name;
            }

            return name;
        
        });
        
    }
    

    const text = (id) => {

        // PHOTO_CATEGORY_OPTIONS.forEach(category => {
        //     console.log('id: ===== ', id);
            
            
        //     if (category['value'] == id) {
        //         name =  category['label']
        //         console.log('name: ===== ', name)
        //         break;
        //     }
        
        // });

        for (let i = 0; i <= PHOTO_CATEGORY_OPTIONS.length; i++) {
            if (PHOTO_CATEGORY_OPTIONS[i].value == id) {
                return `Category: ${PHOTO_CATEGORY_OPTIONS[i].label}`
            }
        }
        return ''
        // return `Hello, World: ${id}`
    }

    // console.log('-------- items: ', items)
    return (
        <Row className="photoList">
        {
            // console.log('-------->>> items: ', items)
            items.map( (item, index) => {

                return (
                    <Col className='col-md-4 position-relative mb-30' key={ index }>
                        <img className="photoList_image" src={ item.photo } alt = { item.title } />
                        <div className="photoList_title">  { item.title } </div> 
                        <div className="photoList_category">  { text(item.categoryId) } </div> 
                        <button 
                            onClick={ () => handleEdit(item) }
                            className="btn btn-lg btn-outline-warning photoList_editBtn text-white bold"> Edit </button>
                        <button 
                            onClick={ () => handleRemove(item) }
                            className="btn btn-lg btn-danger photoList_deleteBtn bold"> Remove </button>
                    </Col>
                );
            })
        }
        </Row>
    )
}

export default PhotoList 

