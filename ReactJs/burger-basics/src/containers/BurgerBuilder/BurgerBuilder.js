import React, {Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 1,
    cheese: 1.5,
    meat: 2
}

class BurgerBuilder extends React.Component{

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        onPurchase: false
    }

    purchaseHandler = () => {
        console.log('clicked');
        this.setState( {onPurchase : true});
    }

    updatePurchaseState= (ingredients)=> {

       const total = Object.keys(ingredients).map(
            (ingKey) => {
                return ingredients[ingKey]})
                .reduce( (sum, e1) => sum+e1,0);
        this.setState( {purchasable : total>0});
    }

    addIngedientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const updatedIngrdients = { ...this.state.ingredients }
        updatedIngrdients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngrdients})
        this.updatePurchaseState(updatedIngrdients);
    }

    removeIngedientHandler = (type) => {
        if(this.state.ingredients[type] <= 0) {
            return;
        }
        const updatedCount = this.state.ingredients[type] -1;
        const updatedIngrdients = { ...this.state.ingredients }
        updatedIngrdients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngrdients});
        this.updatePurchaseState(updatedIngrdients);
    }

    closeModal = () => {
        this.setState({ onPurchase: false});
    }

    render() {
        const disabledInfo =  { ...this.state.ingredients};

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return (
            <Fragment>
                <Modal modalClosed={this.closeModal} show={this.state.onPurchase}><OrderSummary ingredients={this.state.ingredients}/></Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls adddedIngredient={this.addIngedientHandler}
                   removedIngredient = {this.removeIngedientHandler}
                   disabledInfo={disabledInfo}
                   price={this.state.totalPrice}
                   purchasable= {this.state.purchasable}
                   ordered = {this.purchaseHandler}
                />
            </Fragment>

        );
    }
}

export default BurgerBuilder;
