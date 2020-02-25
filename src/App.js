import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBulder'
import BuildControls from './components/BurgerBuilder/BuildControls/BuildControls'

function App() {
  return (
    <div>
      <Toolbar />
      <BurgerBuilder />
      <BuildControls />
    </div>
  )
}

export default App;
