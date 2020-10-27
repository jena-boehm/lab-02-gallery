import React, { Component } from 'react'
import ImageItem from './ImageItem.js';
import data from './data.js';

export default class Dropdown extends Component {
    state = {
        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredImages = data.filter((image) => {
            if (!this.state.filter) return true;

            if (image.keyword === this.state.filter) return true;

            return false
        });

        return (
            <>
            <select onChange={this.handleChange}>
                <option value=''>Show All</option>
                <option value='narwhal'>Narwhal</option>
                <option value='rhino'>Rhino</option>
                <option value='unicorn'>Unicorn</option>
                <option value='unilego'>Unilego</option>
                <option value='triceratops'>Triceratops</option>
                <option value='markhor'>Markhor</option>
                <option value='mouflon'>Mouflon</option>
                <option value='addax'>Addax</option>
                <option value='chameleon'>Chameleon</option>
                <option value='lizard'>Lizard</option>
                <option value='dragon'>Dragon</option>
            </select>
            <div className="image-list">
            {
                filteredImages.map(image =>
                    <ImageItem 
                    className="image-item" 
                    image={image.url} 
                    title={image.title} 
                    description={image.description} 
                    horns={image.horns}
                    keyword={image.keyword} />)
            }
                </div>
            </>
        )
    }
}
