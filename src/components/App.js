import React, { Component } from 'react'
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

export default class App extends Component {

    state = {
        images: []
    }

    onFormSubmit = async query => {
        try {
            const images = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: query },
                headers: {
                    Authorization: 'Client-ID e0eda079b0e1af60a9adfd942026a4ead007ca0cdc5a3a185ff5c0da37dc72d0'
                }
            })
            this.setState({
                images: images.data.results
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}