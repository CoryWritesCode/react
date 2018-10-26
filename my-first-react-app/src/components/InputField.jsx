import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'Who are you?',
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <input placeholder={ this.state.placeholder } onChange={ this.handleChange } />
    );
  }
}

export default InputField;