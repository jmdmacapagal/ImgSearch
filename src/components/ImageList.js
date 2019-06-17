import '../styles/ImageList.css'
import React from 'react'

const ImageList = props => {
    const images = props.images.map(image => {
        return <img key={image.id} src={image.urls.small} alt={image.description} className="ui fluid image" />
    })

    return (
        <div className="image-list">
            { images }
        </div>
    )
}

export default ImageList