import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './EntryForm.css'
import { Button, Form, FormControl } from 'react-bootstrap';

class EntryForm extends Component {
    state = {
        date: "",
        moodId: "",
        conceptsCovered: "",
        content: "",
        loadingStatus: false,
        moods: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        console.log("state to change", stateToChange)
        this.setState(stateToChange);
    };

    componentDidMount() {
        APIManager.getMoods()
            .then(entry => {
                this.setState({
                    date: entry.date,
                    moodId: entry.moodId,
                    conceptsCovered: entry.conceptsCovered,
                    content: entry.content,
                    loadingStatus: false,
                });
            });

        APIManager.getMoods()
            .then(moods => this.setState({ moods: moods }))
    }

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full entry list
    */
    constructNewEntry = evt => {
        evt.preventDefault();
        if (this.state.date === "" || this.state.mood === "" || this.state.conceptsCovered === "" || this.state.content === "") {
            window.alert("Please complete all fields");
        } else {
            this.setState({ loadingStatus: true });
            const entry = {
                date: this.state.date,
                moodId: parseInt(this.state.moodId),
                conceptsCovered: this.state.conceptsCovered,
                content: this.state.content,
            };

            // Create the animal and redirect user to animal list
            APIManager.post(entry)
                .then( () => this.props.history.push("/entries"));
        }
    };

    render() {

        return (
            <>
                <Form>
                    <fieldset>
                        <div className="formgrid">
                            <Form.Group className="small-boxes">
                                <Form.Label htmlFor="date">Date of entry</Form.Label>
                                <Form.Control
                                    type="date"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="date" />
                            </Form.Group>
                            <Form.Group className="small-boxes">
                                <Form.Label htmlFor="mood">Mood of the Day</Form.Label>
                                <select className="form-control" id="moodId"
                                    value={this.state.moodId}
                                    onChange={this.handleFieldChange}
                                >
                                    {this.state.moods.map(mood =>
                                        <option key={mood.id} value={mood.id}>{mood.label}
                                        </option>
                                    )}
                                </select>
                            </Form.Group>
                            <Form.Group className="small-boxes">
                                <Form.Label htmlFor="conceptsCovered">Concepts Covered</Form.Label>
                                <FormControl
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="conceptsCovered"
                                    placeholder="Concepts" />
                            </Form.Group>
                            <Form.Group className="large-boxes">
                                <Form.Label htmlFor="content">Entry Contents</Form.Label>
                                <FormControl as="textarea" rows="6" required className="form-control"
                                    onChange={this.handleFieldChange}
                                    name="contents" id="content"></FormControl>
                            </Form.Group>
                        </div>
                        <div>
                            <Button
                                className="float-right" type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEntry}
                            >Submit</Button>
                        </div>
                    </fieldset>
                </Form>
            </>
        )
    }
}

export default EntryForm