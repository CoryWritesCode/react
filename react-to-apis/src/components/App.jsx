import React, { Component } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import Card from './Card';

class App extends Component {
  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
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
    console.log(this.state.card);
  }

  render() {
    if (!this.state.card.length)
      return null;

    return (

        this.state.card.map((card, id) => (
          <Card title={ card.title } director={ card.director } description={ card.description } key={ card.id } />
        ))

    );
  }
  
}

export default App;