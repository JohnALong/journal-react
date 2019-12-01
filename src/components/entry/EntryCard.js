import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Card, Button } from 'react-bootstrap';
import "./Entry.css"

class EntryCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body className="card">
                    <Card.Title>Date of Entry: <span className="card-entrydate">{this.props.entry.date}</span></Card.Title>
                    <Card.Text>Mood of day: {this.props.entry.mood.label}</Card.Text>
                    <Card.Text>Concepts covered: {this.props.entry.conceptsCovered}</Card.Text>
                    <Link to={`/entries/${this.props.entry.id}`}><Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>
        );
    }
}

export default EntryCard;