import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

    render() {

        return (
            <header>
                <h1 className="site-title">My Journal in React<br />
                    <small>Just because it's done, doesn't mean it can't be done again.</small>
                </h1>
                <nav>
                    <ul className="container">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/entries">Entries</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;
