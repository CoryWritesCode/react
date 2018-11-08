import React, { Component, Fragment } from 'react';
import 'es6-promise';
import 'isomorphic-fetch';
import Card from './Card';
import FrontPage from './FrontPage';
import Load from './Load';

const GHIBLI_API = 'https://ghibliapi.herokuapp.com';

class App extends Component {
  constructor(params) {
    super(params)

    this.state = {
      card: [],
      displayed: false,
      films: false,
      species: false
    }

    this.handleSpeciesClick = this.handleSpeciesClick.bind(this);
    this.handleFilmsClick = this.handleFilmsClick.bind(this);
  }

  handleSpeciesClick() {
    fetch(`${GHIBLI_API}/species`)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        card: obj,
        displayed: true,
        species: true
      })
    });
  }

  handleFilmsClick() {
    fetch(`${GHIBLI_API}/films`)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        card: obj,
        displayed: true,
        films: true
      })
    });
  }

  render() {
    let isFilms = this.state.films;
    let isSpecies = this.state.species;
    let load;

    if (isFilms) {
      load = this.state.card.map((card) => (
          <Card appear={ this.state.displayed } film={ true } title={ card.title } director={ card.director } description={ card.description } src={ card.url } key={ card.id } />
        ));
    } else if (isSpecies) {
      load = this.state.card.map((card) => (
          <Card appear={ this.state.displayed } film={ false } name={ card.name } classification={ card.classification } eyes={ card.eye_colors } hair={ card.hair_colors } src={ card.url } key={ card.id } />
        ));
    };

    return (
      <Fragment>
        { load }
        <FrontPage appear={ this.state.displayed } src='/logo.png' alt='Studio Ghibli Logo' onClick={ this.handleClick } />
        <Load appear={ this.state.displayed } onClick={ this.handleFilmsClick } text='Load Films' />
        <Load appear={ this.state.displayed } onClick={ this.handleSpeciesClick } text='Load Species' />
      </Fragment>
    );
  }
  
}

export default App;