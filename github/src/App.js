import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import UserPage from './Components/UserPage';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/user" component={UserPage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
