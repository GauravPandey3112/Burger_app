import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'


const burger = (props) => {
    let ingredientsList = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (ingredientsList.length === 0) {
        ingredientsList = <p>You dont wanna eat bun. Please add something to eat a burger</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsList}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )

}

export default burger;