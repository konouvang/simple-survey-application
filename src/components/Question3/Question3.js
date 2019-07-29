import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Question3 extends Component {

    constructor(props){
        super(props)
        this.state = {
            question3: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
                question3: event.target.value
        });
    }


    submitMoneySpent = (event) => {
        this.props.dispatch({
            type: 'ADD_QUESTION3',
            payload: this.state.question3,
        });
        this.props.history.push('/questionfour');
    }

    render() {
        return (
            <div>
                <h3>How much money do you spend per week on video games related goods and services
(including consoles, games, accessories, DLC, subscriptions, events, etc.)?</h3>
            <input onChange={this.handleFieldChange} type="number" min="1" max="300" />
            <button onClick={this.submitMoneySpent}>NEXT</button>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Question3));