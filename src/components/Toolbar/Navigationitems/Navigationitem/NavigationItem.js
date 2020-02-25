import React from 'react'
import classes from './Navigationitem.module.css'

const navigationitem =(props)=> {
  return (
    <li className={classes.NavigationItem}>
      <a href="/" className={props.active ? classes.active: null}>
        {props.children}

      </a>

    </li>
  )
}

export default navigationitem