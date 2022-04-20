import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'reactstrap'

import styles from './RandomPhoto.module.scss'

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string,
    onImageURLChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
}

RandomPhoto.defaultProps = {
    name: '',
    imageURL: '',
    onImageURLChange: null,
    onRandomButtonBlur: null,
}

const getRandomImageURL = () => {
    let id = Math.trunc(Math.random() * 2000)
    return `http://picsum.photos/id/${id}/300/300`;
} 

function RandomPhoto(props) {
    const { name, imageURL, onImageURLChange, onRandomButtonBlur } = props;

    // console.group('Random Photo');
    // console.log( { name, imageURL, onImageURLChange, onRandomButtonBlur } )
    // console.groupEnd();

    const handleRandomPhotoClick = async() => {
        if (onImageURLChange) {
            const randomImageURL = getRandomImageURL();
            onImageURLChange(randomImageURL);

        }
    }

    return (
        <>
            <div className={ styles.button }>
                <Button
                    name={name}
                    color="danger"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random new photo
                </Button>
            </div>

            <div className='image'> 
                { imageURL && 
                    <img 
                        src={ imageURL } 
                        alt="Oooopos Not found" 
                        onError={ e => getRandomImageURL() }


                />}
            </div>
        </>
    )

}

export default RandomPhoto;