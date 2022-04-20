
import { Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import './PhotoList.scss'

PhotoList.propTypes = {
    items: PropTypes.array
}

PhotoList.defaultProps = {
    items: []
}

function PhotoList(props) {

    const { items, arr } = props 
    console.log('-------- items: ', items)
    return (
        <Row className="photoList">
        {
            // console.log('-------->>> items: ', items)
            items.map( (item, index) => {
                return (
                    <Col className='col-md-4 position-relative mb-30' key={ index }>
                        <img src={ item.photo } alt = { item.title } />
                        <div className="photoList_title">  { item.title } </div> 
                        <button className="btn btn-lg btn-outline-warning photoList_editBtn text-white bold"> Edit </button>
                        <button className="btn btn-lg btn-danger photoList_deleteBtn bold"> Remove </button>
                    </Col>
                );
            })
        }
        </Row>
    )
}

export default PhotoList 

