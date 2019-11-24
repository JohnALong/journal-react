import React, { Component } from 'react';

class EntryCard extends Component {
    render() {
        console.log("entry card", this.props)
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Date of Entry: <span className="card-entrydate">{this.props.entry.date}</span></h2>
                    <p>Mood of day: {this.props.entry.mood.label}</p>
                    <button type="button" onClick={() => this.props.deleteEntry(this.props.entry.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default EntryCard;