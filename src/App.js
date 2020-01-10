import React from 'react';
import './App.css';
import Contact from './components/contact';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/header';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />


        <Route 
          exact
          path="/"
          component={Contact} 
        />
        <Route 
          exact
          path="/contact"
          component={Contact} 
        />
        <Route 
          exact
          path="/login"
          component={Login} 
        />

        <Route
        exact
        path="/register"
        component={Register}
        />

      </div>
    </BrowserRouter>
  ) 
}



export default App
