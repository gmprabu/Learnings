import * as actionTypes from '../actions/counterActionsTypes';

const initialState = {
    results:[]
}

const resultReducer = (state=initialState , action) => { 
    switch(action.type) {
        case actionTypes.STORE_RESULTS: 
            return { ...state , results: state.results.concat({id: new Date(), value:action.payload}) }
        case actionTypes.REMOVE_RESULT:
            const copy = state.results.filter((result) => action.payload !== result.id);
            return { ...state , results: copy }
        default:
            return state;
    }
};

export default resultReducer;
