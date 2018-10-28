import React, { Component } from 'react';
import './App.css';
import AuthPage from "./AuthPage/AuthPage";
import Reactor from "./ReactorPage/Reactor";
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Reactor} />
            <Route path="/auth" exact component={AuthPage} />
        </Switch>

        </BrowserRouter>


    );
  }
}

export default App;
