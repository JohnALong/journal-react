import React, { Component } from 'react'
//import the components we will need
import EntryCard from './EntryCard'
import APIManager from '../../modules/APIManager'

class EntryList extends Component {
    //define what this component needs to render
    state = {
        entries: [],
    }

    componentDidMount() {
        console.log("Entry LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        APIManager.getAll()
            .then((entries) => {
                this.setState({
                    entries: entries
                })
            })
    }

    deleteEntry = id => {
        APIManager.delete(id)
            .then(() => {
                APIManager.getAll()
                    .then((newEntries) => {
                        this.setState({
                            entries: newEntries
                        })
                    })
            })
    }

    render() {
        console.log("Entry LIST: Render");

        return (
            <div className="container-cards">
                {this.state.entries.map(entry => <EntryCard
                    key={entry.id}
                    entry={entry}
                    deleteEntry={this.deleteEntry}
                />)}
            </div>
        )
    }
}

export default EntryList