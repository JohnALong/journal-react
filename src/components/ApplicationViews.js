import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import EntryList from './entry/EntryList'
import EntryDetail from './entry/EntryDetail'
import EntryForm from './entry/EntryForm'

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/entries" render={(props) => {
                    return <EntryList {...props} />
                }} />

                <Route path="/entries/new" render={(props) => {
                    return <EntryForm {...props} />
                }} />

                <Route path="/entries/:entryId(\d+)" render={(props) => {
                    // Pass the entryId to the AnimalDetailComponent
                    return <EntryDetail entryId={parseInt(props.match.params.entryId)} {...props} />
                }} />

                {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
            </React.Fragment>
        )
    }
}

export default ApplicationViews