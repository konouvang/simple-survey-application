import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Question2 extends Component {

    constructor(props){
        super(props)
        this.state = {
            question2: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
                question2: event.target.value
        });
    }


    submitTimeSpent = (event) => {
        this.props.dispatch({
            type: 'ADD_QUESTION2',
            payload: this.state.question2,
        });
        this.props.history.push('/questionthree');
    }

    render() {
        return (
            <div>
                <h2>How much time in hours do you spend per week on video games related goods and services
(including consoles, games, accessories, DLC, subscriptions, events, etc.)?</h2>
            <input onChange={this.handleFieldChange} type="number" min="1" max="200" />
            <button onClick={this.submitTimeSpent}>NEXT</button>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Question2));