import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Navbar from './navbar'
import About from './about';
import {Homepage , SignUp} from './signup';
import Infinite from './infintescroll'
import Currency from './currency';
import Weather from './weather.jsx'
import Covid from './covid'
import Chat from './chat'
import Todo from './todo'
import Tracker from './tracker'
import Music from './music'
import Crypto from './crypto'
import Gallery from './gallery'
import Calculator from './calculator'
import Birthday from './bday'

const App = () => {
  return (
<>
<main>
  
  <Navbar />
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/signup" component = {SignUp} />
    <Route exact path="/about" component = {About} />
    <Route exact path="/infintescroll" component = {Infinite} />
    <Route exact path="/currency" component = {Currency} />
    <Route exact path="/weather" component = {Weather} />
    <Route exact path="/covid" component = {Covid} />
    <Route exact path="/chat" component = {Chat} />
    <Route exact path="/todo" component = {Todo} />
    <Route exact path="/tracker" component = {Tracker} />
    <Route exact path="/Music" component = {Music} />
    <Route exact path="/crypto" component = {Crypto} />
    <Route exact path="/gallery" component = {Gallery} />
    <Route exact path="/calculator" component = {Calculator} />
    <Route exact path="/bday" component = {Birthday} />
    
  </Switch>

</main>
</>
  )
} 
export default App
