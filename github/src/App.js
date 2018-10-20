import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Overview from './Components/UserPage/Overview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/users/:user" component={Overview}></Route>
              <Route exact path="/users/:user/repo" component={NotFound}></Route>
              <Route exact path="/users/:user/stars" component={NotFound}></Route>
              <Route exact path="/users/:user/followers" component={NotFound}></Route>
              <Route exact path="/users/:user/following" component={NotFound}></Route>
              <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
