import React, { Component } from 'react';
import { Link } from "react-router-dom"

class EntryCard extends Component {
    render() {
        console.log("entry card", this.props)
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Date of Entry: <span className="card-entrydate">{this.props.entry.date}</span></h2>
                    <p>Mood of day: {this.props.entry.mood.label}</p>
                    <p>Concepts covered: {this.props.entry.conceptsCovered}</p>
                    <Link to={`/entries/${this.props.entry.id}`}><button>Details</button></Link>
                </div>
            </div>
        );
    }
}

export default EntryCard;