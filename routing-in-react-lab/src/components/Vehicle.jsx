import React, { Component, Fragment } from 'react';

class Vehicle extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/vehicles/${this.props.match.params.id}`)
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
            <h4 className="card-title">{this.state.card.name}  <small>({ this.state.card.vehicle_class })</small></h4>
            <h6 className="card-text text-light">Length: { this.state.card.length }</h6>
            <p className="card-text text-light">{ this.state.card.description }</p>
            <a href={ this.state.card.films } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Films</a>
            <a href={ this.state.card.pilot } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Pilot</a>
          </div>
        </div>
      </Fragment>

    )
  }

}

export default Vehicle;