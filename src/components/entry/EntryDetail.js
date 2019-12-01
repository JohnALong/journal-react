import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EntryDetail.css'
import { Button, Card } from 'react-bootstrap';

class EntryDetail extends Component {

  state = {
    date: "",
    mood: "",
    conceptsCovered: "",
    content: "",
    id: "",
    loadingStatus: true,
  }

  componentDidMount() {
    console.log("EntryDetail: ComponentDidMount");
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(this.props.entryId)
      .then((entry) => {
        this.setState({
          date: entry.date,
          id: parseInt(entry.id),
          mood: entry.mood.label,
          conceptsCovered: entry.conceptsCovered,
          content: entry.content,
          loadingStatus: false
        });
      });
  }

  handleDelete = () => {
    //invoke the delete function in APIManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    APIManager.delete(this.props.entryId)
      .then(() => this.props.history.push("/entries"))
  }

  render() {
    return (
      <Card style={{ width: '18rem' }} 
      className="card card-detail">
        <div className="card-content">
          <Card.Img variant="top" src={require("../../images/NSS2.png")} />
          <Card.Header as="h3">Date: <span>{this.state.date}</span></Card.Header>
          <Card.Body>
          <Card.Title>Mood of the day: {this.state.mood}</Card.Title>
          <Card.Title>Concepts Covered: {this.state.conceptsCovered}</Card.Title>
          <Card.Title>Entry:</Card.Title>
          <Card.Text>{this.state.content}</Card.Text>
          <Button className="btn" variant="primary"
            onClick={() => { this.props.history.push(`/entries/${this.state.id}/edit`) }}>Edit</Button>
          <Button className="btn" variant="secondary" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</Button>
        </Card.Body>
        </div>
      </Card>
    );
  }
}
export default EntryDetail;