import React, { Component } from 'react';
import data from './data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <div className="image-list">
        {
            data.map(image =>
                <ImageItem className="image-item" image={image.url} title={image.title} description={image.description} horns={image.horns}/>)
        }
            </div>
        )
    }
}
