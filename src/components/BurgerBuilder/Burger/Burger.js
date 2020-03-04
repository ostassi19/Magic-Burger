import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
  const ingredients = []
  for (let ingredient of props.ingredients)
    for (let i = 0; i < ingredient.count; i++)
      ingredients.push(<BurgerIngredient type={ingredient.label} />)

  let message = null

  if (ingredients.length === 0)
    message = <p>Please start adding ingredients !!</p>

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {message}
      {ingredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger