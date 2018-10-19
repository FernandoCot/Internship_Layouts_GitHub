import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import HomePage from './Components/HomePage';
import UserPage from './Components/UserPage';
import Header from './Components/Header';
import NotFound from './Components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/users/:user" component={UserPage}></Route>
              <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
