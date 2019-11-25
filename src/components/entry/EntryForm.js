import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EntryForm.css'

class EntryForm extends Component {
    state = {
        date: "",
        mood: "",
        conceptsCovered: "",
        content: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEntry = evt => {
        evt.preventDefault();
        if (this.state.date === "" || this.state.mood === "" || this.state.conceptsCovered === "" || this.state.content === "") {
            window.alert("Please complete all fields");
        } else {
            this.setState({ loadingStatus: true });
            const entry = {
                date: this.state.date,
                mood: this.state.mood,
                conceptsCovered: this.state.conceptsCovered,
                content: this.state.content,
            };

            // Create the animal and redirect user to animal list
            APIManager.post(entry)
                .then(() => this.props.history.push("/entries"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="date">Date of entry</label>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date" />
                            <label htmlFor="mood">Mood of the Day</label>
                            <select id="mood">
                                <option value="exhausted"
                                    onChange={this.handleFieldChange}
                                >Exhausted</option>
                                <option value="BrightEyed"
                                    onChange={this.handleFieldChange}
                                >Bright Eyed</option>
                                <option value="amazed"
                                    onChange={this.handleFieldChange}
                                >amazed</option>
                                <option value="nervous"
                                    onChange={this.handleFieldChange}
                                >nervous</option>
                                <option value="dejected"
                                    onChange={this.handleFieldChange}
                                >dejected</option>
                            </select>
                            <label htmlFor="conceptsCovered">Concepts Covered</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="conceptsCovered"
                                placeholder="Concepts" />
                            <label htmlFor="content">Entry Contents</label>
                            <textarea required className="form-control"
                                onChange={this.handleFieldChange}
                                name="contents" id="content" rows="6"></textarea>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEntry}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EntryForm