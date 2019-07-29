import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload};
    } else if (action.type === 'ADD_QUESTION1') {
        return {...state, understanding: action.payload};
    } else if (action.type === 'ADD_QUESTION2') {
        return {...state, understanding: action.payload};
    }



    // } else if (action.type === 'ADD_UNDERSTANDING') {
    //     return {...state, understanding: action.payload};
    // } else if (action.type === 'ADD_SUPPORT') {
    //     return {...state, support: action.payload};
    // } else if (action.type === 'ADD_COMMENT') {
    //     return {...state, comments: action.payload};
    // } else if (action.type === 'FINAL_ADD_ALL_FEEDBACK_TO_REVIEW') {
    //     return action.payload;
    // }
    return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);


export default storeInstance;