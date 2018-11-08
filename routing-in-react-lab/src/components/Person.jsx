import React, { Component, Fragment } from 'react';

class Person extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(obj => {
        this.setState({
          card: obj
        })
      });
  }

  render() {
    
    return (

      <Fragment>
        <div className="card text-white bg-dark" style={{ innerWidth: '18rem', margin: '20px' }} >
          <div className="card-body">
            <h4 className="card-title">{ this.state.card.name }</h4>
            <h6 className="card-subtitle mb-2 text-info"><u>Gender:</u> { this.state.card.gender }</h6>
            <h6 className="card-subtitle mb-2 text-info"><u>Age:</u> { this.state.card.age }</h6>
            <h6 className="card-subtitle mb-2 text-danger">Eye Color: { this.state.card.eye_color }</h6>
            <h6 className="card-subtitle mb-2 text-danger">Hair Color: { this.state.card.hair_color }</h6>
            <a href={ this.state.card.species } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Species</a>
            <a href={ this.state.card.films } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Films</a>
          </div>
        </div>
      </Fragment>

    )
  }

}

export default Person;