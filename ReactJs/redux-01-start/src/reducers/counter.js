import * as actionTypes from '../actions/counterActionsTypes';

const initialState = {
    counter: 10
}

const rootReducer = (state=initialState , action) => { 
    switch(action.type) {
        case actionTypes.INC_COUNTER: 
            return { ...state , counter: state.counter +1 }
        case actionTypes.DEC_COUNTER: 
            return { ...state , counter: state.counter -1 }

        case actionTypes.ADD_COUNTER: 
            return { ...state , counter: state.counter + action.payload }

        case actionTypes.SUB_COUNTER: 
            return { ...state , counter: state.counter - action.payload }
        default:
            return state;
    }
};

export default rootReducer;
