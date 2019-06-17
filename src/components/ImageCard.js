import React, { Component } from 'react'

class ImageCard extends Component {
   render() {
       const { urls, description } = this.props.images
    return (
        <div>
            <img
                src={urls.small}
                alt={description}
            />
        </div>
    )
   }
}

export default ImageCard