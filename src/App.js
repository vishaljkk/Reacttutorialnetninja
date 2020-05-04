import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Pokeball from '../pokeball.png'
class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About} />
          <Route path = "/:post_id" component={Post}/>
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
