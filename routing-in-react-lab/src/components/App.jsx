import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import 'es6-promise';
import 'isomorphic-fetch';
import Home from './Home';
import Films from './Films';
import Film from './Film';
import People from './People';
import Person from './Person';
import Locations from './Locations';


class App extends Component {

  render() {
    return (

      <Router>
        <Fragment>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/">Go Home</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/films">View Films</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/people">View People</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/locations">View Locations</Link>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/films" component={ Films } />
            <Route exact path='/films/:id' component={ Film } />
            <Route exact path='/people' component={ People } />
            <Route exact path='/people/:id' component={ Person } />
            <Route exact path='/locations' component={ Locations } />
          </Switch>
        </Fragment>
      </Router>

    );
  }

}

export default App;