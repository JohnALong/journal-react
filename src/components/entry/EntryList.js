import React, { Component } from 'react'
//import the components we will need
import EntryCard from './EntryCard'
import APIManager from '../../modules/APIManager'

class EntryList extends Component {
    //define what this component needs to render
    state = {
        entries: [],
        moods: []
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
        APIManager.getMoods()
            .then(moods => this.setState({ moods: moods }))
    }

    filterEntries = event => {
        console.log("event in filterEntries", event.target.value)
        APIManager.filterByMood(event.target.value)
            .then((newEntries) => {
                this.setState({
                    entries: newEntries
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
        console.log("list render", this.state.moods)

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/entries/new") }}>
                        New Entry</button>
                </section>
                <label>Select mood to filter entries</label>
                <select className="form-control" id="moodId"
                    value={this.state.moodId}
                    onChange={this.filterEntries}
                >
                    {this.state.moods.map(mood =>
                        <option key={mood.id} value={mood.id}>{mood.label}
                        </option>
                    )}
                </select>
                <div className="container-cards">
                    {this.state.entries.map(entry =>
                        <EntryCard
                            key={entry.id}
                            entry={entry}
                            deleteEntry={this.deleteEntry}
                            {...this.props}
                        />)}
                </div>
            </>
        )
    }
}

export default EntryList