import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {
  
  const ingredients = props.ingredient.map((ingredient) => {
    return <BuildControl label={ingredient.label} />
  })


  return (
    <div className={classes.BuildControls}>
      <p>Current Price: 4</p>
      {/* <BuildControl/>
      <BuildControl/>
      <BuildControl/>
      <BuildControl/> */}

      {ingredients}
      <button className={classes.OrderButton}>ORDER NOW</button>

    </div>
  )
}

export default buildControls

 // ingredients=[]
  
  //   for(let i=0; i< ingredients.label;i++)
  //   <div className={this.state.BuildControl}>
  //     ingredients.push(<BuildControl type={i.label} />)
  //     </div>