import React from 'react'
import NavigationItem from './Navigationitem/NavigationItem'
import classes from './Navigationitems.module.css'


const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem active>BurgerBuilder</NavigationItem>
      <NavigationItem >Checkout</NavigationItem>
    </ul>
  )
}

export default navigationItems