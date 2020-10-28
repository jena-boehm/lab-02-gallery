import React, { Component } from 'react'
import data from './data.js';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-item">
                <img className='image' src={this.props.image} alt={this.props.title} />
                <div className="title">{this.props.title}</div>
                <div className="description">{this.props.description}</div>
                <div className="horns">{this.props.horns}</div>
                <div className="keyword">{this.props.keyword}</div>
            </div>
        )
    }
}

