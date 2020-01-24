
const redux = require('redux');



const initialState = {
    counter: 0
}
//reducer
const rootReducer = (state=initialState , action) => { 

    if(action.type === 'INC_COUNTER') {
        return { ...state , counter: state.counter +1}
    }else if (action.type === 'ADD_COUNTER') {
        return { ...state , counter: state.counter + action.payload}
    }
    return state;
};

//store
const store = redux.createStore(rootReducer);

console.log(store.getState());

//suscriptions
store.subscribe(() => {
    console.log('Store changed',store.getState());
});


//dispacthers
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', payload:10})
console.log(store.getState());
