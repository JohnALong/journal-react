import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
// import EntryCard from './entry/EntryCard'
import EntryList from './entry/EntryList'

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/entries" render={(props) => {
          return <EntryList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews