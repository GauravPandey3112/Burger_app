import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary] Did Update');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        })
        return (
            <Aux>
                <h3>You Order</h3>
                <p>A delicious Burper with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}₹</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.cancel}>
                    Cancel
            </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.continue}>
                    Continue
            </Button>
            </Aux>
        )
    }
}
export default OrderSummary;