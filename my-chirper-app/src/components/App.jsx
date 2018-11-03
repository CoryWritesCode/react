import React, { Component, Fragment } from "react";
import Chirp from './Chirp';
import Form from './Form';

class App extends Component {

  constructor(params) {
    super(params)

    this.state = {
      chirps: [{ text: 'Just type in the box above to add your own Chirps!' }],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleClick() {
    this.setState({
      chirps: this.state.chirps.concat([{ text: this.state.value }]),
      value: ''
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleDoubleClick(e) {
    this.setState({
      chirps: this.state.chirps.filter(el => el !== e)
    });
  }

  render() {

    return (
      <Fragment>
        <Form value={ this.state.value } placeholder='Say Something!' onClick={ this.handleClick } onChange={ this.handleChange } />
        <Chirp text='Hello there!' />
        <Chirp text='Welcome to my Chirper App!' />
        {this.state.chirps.map((chirps, idx) => (
            <Chirp text={ chirps.text } key={ idx.toString() } />
        ))}
      </Fragment>
    );

  }

}

export default App;