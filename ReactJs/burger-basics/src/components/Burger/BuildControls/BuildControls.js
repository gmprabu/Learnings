import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label:'Salad', type:'salad'},
    { label:'Meat', type:'meat'},
    { label:'Bacon', type:'bacon'},
    { label:'Cheese', type:'cheese'}
]

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p> Current Price: <strong>{props.price}</strong></p>
            { controls.map( (control) =>
            <BuildControl 
                key={control.type} 
                label= {control.label} 
                added = {()=> props.adddedIngredient(control.type)}
                removed= {() => props.removedIngredient(control.type)}
                disable= {props.disabledInfo[control.type]}
                />)}
            <button disabled={!props.purchasable} 
                    className={classes.OrderButton}
                    onClick = {props.ordered}
                > ORDER NOW</button>    
        </div>
    )}

export default buildControls;