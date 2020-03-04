import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


const buildControls = (props) => {

  // const ingredients = props.ingredients.map((ingredient) => {
  //   return <BuildControl
  //     label={ingredient.label}
  //     added={() => { props.addOrRemoveIngredient(ingredient.id, "add") }}
  //     removed={() => { props.addOrRemoveIngredient(ingredient.id, "remove") }}
  //     disableRemoving={ingredient.count === 0}
  //     disableAdding={ingredient.count >= ingredient.maxCount}
  //     key={ingredient.id}
  //   />
  // })


  return (
    <div className={classes.BuildControls}>
      {/* <p>Current Price: {props.totalPrice.toFixed(2)} DT</p> */}
      {/* {ingredients} */}
      <BuildControl/>
      <BuildControl/>
      <BuildControl/>
      <button className={classes.OrderButton}>ORDER NOW</button>

    </div>
  )
}


export default buildControls