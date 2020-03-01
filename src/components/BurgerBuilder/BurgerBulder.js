import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'

class BurgerBuilder extends Component {

  state = {
    ingredients: [
      {
        label: "salad",
        count: 1
      },
      {
        label: "cheese",
        count: 2
      },
      {
        label: "meat",
        count: 1
      },
      {
        label: "escalope",
        count: 0
      }
    ],
  }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default BurgerBuilder