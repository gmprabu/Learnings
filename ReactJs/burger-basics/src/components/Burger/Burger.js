import React from 'react';
import classes from './Burger.css';

import BurgerIngidrient from  './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let transformedIngrdients = Object.keys(props.ingredients).map(
        (ingKey) => {
            return [...Array(props.ingredients[ingKey])].map( (_,index) => {
                return  <BurgerIngidrient  key={ingKey+index} type={ingKey}/>
            })
        }
    ).reduce( (arr, e1) => arr.concat(e1),[]);

    if(transformedIngrdients.length === 0) {
        transformedIngrdients = <p>Please start adding ingredients !!! </p> 
    }

    return (
            <div className={classes.Burger}>   
                <BurgerIngidrient type='bread-top'/>
                    {transformedIngrdients}
                <BurgerIngidrient type='bread-bottom'/>
            </div>
    );
}

export default burger;