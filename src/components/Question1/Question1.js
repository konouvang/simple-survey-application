import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Question1 extends Component {

    constructor(props){
        super(props)
        this.state = {
            question1: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
                question1: event.target.value
        });
    }


    submitAge = (event) => {
        this.props.dispatch({
            type: 'ADD_QUESTION1',
            payload: this.state.question1,
        });
        this.props.history.push('/questiontwo');
    }

    render() {
        return (
            <div>
                <h2>How are old are you?</h2>
            <input onChange={this.handleFieldChange} type="number" min="1" max="100" />
            <button onClick={this.submitAge}>NEXT</button>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Question1));