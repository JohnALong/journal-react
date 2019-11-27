import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./EntryForm.css"

class EntryEditForm extends Component {
    //set the initial state
    state = {
        date: "",
        moodId: "",
        conceptsCovered: "",
        content: "",
        loadingStatus: true,
        moods: []
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEntry = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEntry = {
            id: parseInt(this.props.match.params.entryId),
            date: this.state.date,
            moodId: parseInt(this.state.moodId),
            conceptsCovered: this.state.conceptsCovered,
            content: this.state.content
        };
console.log("edited entry", editedEntry)
        APIManager.update(editedEntry, this.props.match.params.entryId)
            .then(() => this.props.history.push("/entries"))
    }

    componentDidMount() {
        APIManager.get(this.props.match.params.entryId)
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

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="date">Date of entry</label>
                            <input
                                type="date" value={this.state.date}
                                required
                                onChange={this.handleFieldChange}
                                id="date" />
                            <label htmlFor="mood">Mood of the Day</label>
                            <select className="form-control" id="moodId"
                                value={this.state.moodId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.moods.map(mood =>
                                    <option key={mood.id} value={mood.id}>{mood.label}
                                    </option>
                                )}
                            </select>
                            <label htmlFor="conceptsCovered">Concepts Covered</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="conceptsCovered"
                                value={this.state.conceptsCovered} />
                            <label htmlFor="content">Entry Contents</label>
                            <textarea required className="form-control"
                                value={this.state.content}
                                onChange={this.handleFieldChange}
                                name="contents" id="content" rows="6"></textarea>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEntry}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EntryEditForm