import React, { Component } from 'react'
import ImageItem from './ImageItem.js';
import data from './data.js';

export default class ImageList extends Component {
    state = {
        filter: '',
        horns: ''
    }

    handleKeywordChange = e => {
        this.setState({
            filter: e.target.value
        });
    }

    handleHornChange = e => {
        this.setState({
            horns: e.target.value
        });
    }

    render() {
        const filteredImages = data.filter((image) => {
            if (!this.state.filter) return true;

            if (image.keyword === this.state.filter) return true;

            return false
        })

        .filter((image) => {
            if (!this.state.horns) return true;

            if (image.horns === Number(this.state.horns)) return true;

            return false
        });


        return (
            <>
            <div className="dropdown-section">
                <div className="keyword-dropdown">
                    <select onChange={this.handleKeywordChange}>
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
                </div>
                <div className="horns-dropdown">
                    <select onChange={this.handleHornChange}>
                        <option value=''>Show All</option>
                        <option value='1'>One Horn</option>
                        <option value='2'>Two Horns</option>
                        <option value='3'>Three Horns</option>
                        <option value='100'>100 Horns</option>
                    </select>
                </div>
            </div>
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
