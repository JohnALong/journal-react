import React, { Component } from "react"
import NavBar from './nav/NavBar'
import ApplicationViews from "./ApplicationViews"
import "./Journal.css"

class Journal extends Component {
    render() {
        return (
            <>
            <NavBar />
            <ApplicationViews />
            </>
        );
    }
}

export default Journal;