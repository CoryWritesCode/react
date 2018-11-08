import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import 'es6-promise';
import 'isomorphic-fetch';
import Home from './Home';
import Films from './Films';


class App extends Component {

  render() {
    return (

      <Router>
        <Fragment>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/">Home</Link>
          <Link className="btn btn-primary" style={{ margin: '10px', display: 'inline-block' }} to="/films">Films</Link>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/films" component={ Films } />
            {/* <Route path='/films/:id' component={ Film } /> */}
          </Switch>
        </Fragment>
      </Router>

    );
  }

}

export default App;