import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EntryDetail.css'

class EntryDetail extends Component {

  state = {
      date: "",
      mood: "",
      conceptsCovered: "",
      content: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("EntryDetail: ComponentDidMount");
    //get(id) from APIManager and hang on to the data; put it into state
    APIManager.get(this.props.entryId)
    .then((entry) => {
      this.setState({
        date: entry.date,
        mood: entry.mood.label,
        conceptsCovered: entry.conceptsCovered,
        content: entry.content,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in APIManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    APIManager.delete(this.props.entryId)
    .then(() => this.props.history.push("/entries"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Date: <span style={{ color: 'darkslategrey' }}>{this.state.date}</span></h3>
            <p>Mood of the day: {this.state.mood}</p>
            <p>Concepts Covered: {this.state.conceptsCovered}</p>
            <p>Entry:</p>
            <p>{this.state.content}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EntryDetail;