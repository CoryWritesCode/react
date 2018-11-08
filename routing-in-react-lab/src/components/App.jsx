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
import Location from './Location';
import Species from './Species';
import SingleSpecies from './SingleSpecies';
import Vehicles from './Vehicles';
import Vehicle from './Vehicle';


class App extends Component {

  render() {
    return (

      <Router>
        <Fragment>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/">Go Home</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/films">View Films</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/people">View People</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/locations">View Locations</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/species">View Species</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/vehicles">View Vehicles</Link>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/films" component={ Films } />
            <Route exact path='/films/:id' component={ Film } />
            <Route exact path='/people' component={ People } />
            <Route exact path='/people/:id' component={ Person } />
            <Route exact path='/locations' component={ Locations } />
            <Route exact path='/locations/:id' component={ Location } />
            <Route exact path='/species' component={ Species } />
            <Route exact path='/species/:id' component={ SingleSpecies } />
            <Route exact path='/vehicles' component={ Vehicles } />
            <Route exact path='/vehicles/:id' component={ Vehicle } />
          </Switch>
        </Fragment>
      </Router>

    );
  }

}

export default App;