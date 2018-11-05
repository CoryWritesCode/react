import React, { Component, Fragment } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import Card from './Card';
import FrontPage from './FrontPage';

class App extends Component {
  constructor(params) {
    super(params)

    this.state = {
      card: [],
      displayed: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const GHIBLI_API = 'https://ghibliapi.herokuapp.com';

    fetch(`${GHIBLI_API}/films`)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        card: obj
      })
    });
  }

  handleClick() {
    this.setState({
      displayed: true
    })
  }

  render() {

    // if (this.state.displayed === true) {
 
      if (!this.state.card.length)
        return null;

      return (
        <Fragment>
          {this.state.card.map((card) => (
            <Card appear={ this.state.displayed } title={ card.title } director={ card.director } description={ card.description } key={ card.id } />
          ))}
          <FrontPage appear={ this.state.displayed } src='https://ghibliapi.herokuapp.com/images/logo.svg' alt='Studio Ghibli Logo' onClick={ this.handleClick } />
        </Fragment>
      );
    // } else {
      // return (
        
      // )
    // }
  }
  
}

export default App;