import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
import * as actionTypes from '../../actions/counterActionsTypes';


class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubractCounter(5)}  />
                <hr></hr>
                <div>
                    <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store results</button>
                    <div>
                        <ul>
                            {this.props.results.map((result) => {
                                return <li onClick={() => this.props.removeResult(result.id)} 
                                                        key={result.id}> {result.value} </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return { ctr : state.ctr.counter,
            results: state.result.results}
}
const mapDispatchToProps = dispatch => {

    return { onIncrementCounter: () => dispatch({type:actionTypes.INC_COUNTER}),
    onDecrementCounter: () => dispatch({type:actionTypes.DEC_COUNTER}),
    onAddounter: (payload) => dispatch({type:actionTypes.ADD_COUNTER,payload}),
    onSubractCounter: (payload) => dispatch({type:actionTypes.SUB_COUNTER,payload}),
    onStoreResults: (payload) => dispatch({type:actionTypes.STORE_RESULTS,payload}),
    removeResult: (payload) => dispatch({type:actionTypes.REMOVE_RESULT,payload})
}
}

export default connect(mapStatetoProps,mapDispatchToProps)(Counter);