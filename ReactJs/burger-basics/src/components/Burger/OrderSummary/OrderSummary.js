import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients?Object.keys(props.ingredients).map( ingKey => {
        return (<li key={ingKey}>
                 <span style={ {textTransform: 'capitalize'}}>{ingKey}</span>: 
                { props.ingredients[ingKey]}
            </li>);
    }): null;

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingrdients !!.</p>
            <ul>
               {ingredientSummary} 
            </ul>
            <p>Continue to checkout !!!!</p>
        </React.Fragment>
    );  
};

export default orderSummary;
