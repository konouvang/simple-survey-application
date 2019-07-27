import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {

    constructor(props){
        super(props)
        this.state = {
            feeling: '',
        }
    }S

    handleFieldChange = (event) => {
         this.setState({
            
                feeling: event.target.value
        });
    }


    submitFeeling = (event) => {
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state.feeling,
        });
        // navigate to the Review page after checkout
        this.props.history.push('/understanding');
    }

    

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <p>
                Feeling?
                </p>
            <input onChange={this.handleFieldChange} type="number" min="1" max="5" />
            <button onClick={this.submitFeeling}>NEXT</button>
            </div>
        )
    }
}

export default withRouter(connect(mapReduxStateToProps)(Feeling));