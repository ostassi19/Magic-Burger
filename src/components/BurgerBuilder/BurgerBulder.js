import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import axios from 'axios'


class BurgerBuilder extends Component {

  state = {
    ingredients: [],
    totalPrice: 5
  }

  componentDidMount() {
    axios.get('http://51.75.20.206:3100/ingredients')
      .then((response) => {
        console.log(response.data.ingredients);
        this.setState({
          ingredients: response.data.ingredients
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addOrRemoveIngredientHandler = (id, action) => {
    const newIngredients = [...this.state.ingredients]
    let newTotalPrice = this.state.totalPrice

    const i = newIngredients.findIndex(ingredient => {
      return ingredient.id === id
    })

    if (action === "add") {
      newIngredients[i].count++
      newTotalPrice += newIngredients[i].price
    }
    else if (action === "remove") {
      newIngredients[i].count--
      newTotalPrice -= newIngredients[i].price
    }

    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    })
  }


  render() {

    return (
      <div>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls
          ingredients={this.state.ingredients}
          addOrRemoveIngredient={this.addOrRemoveIngredientHandler}
          totalPrice={this.state.totalPrice}
        />
      </div>
    )
  }
}

export default BurgerBuilder