import React from 'react'
import Navigationitems from './Navigationitems/Navigationitems'
import classes from './Toolbar.module.css'
import burgerLogo from '../../assets/images/logo.png'
const toolbar = ()=> {
  return(
    <div className={classes.Toolbar}>
      <div>menu</div>
      <div className={classes.Logo}>
        <img src={burgerLogo} alt='Magic Burger'/>
      </div>
      
      <Navigationitems/>
    </div>
  )
}

export default toolbar