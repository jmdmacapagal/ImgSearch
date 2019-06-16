import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        query: ''
    }

    onInputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="fields">
                        <input
                            type="text"
                            placeholder="Search....."
                            name="query"
                            value={this.state.query}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}