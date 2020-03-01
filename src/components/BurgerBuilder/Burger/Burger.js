
import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {

  const ingredients = []

  for (let ingredient of props.ingredients)
    for (let i = 0; i < ingredient.count; i++)
      ingredients.push(<BurgerIngredient type={ingredient.label} />)


  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />

      {ingredients}

      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger