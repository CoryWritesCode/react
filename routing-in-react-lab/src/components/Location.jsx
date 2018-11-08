import React, { Component, Fragment } from 'react';

class Location extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
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
            <h5 className="card-title">{ this.state.card.name }</h5>
            <h6 className="card-text text-light">Climate: { this.state.card.climate }</h6>
            <h6 className="card-text text-light">Terrain: { this.state.card.terrain }</h6>
            <h6 className="card-text text-light">Surface Water: { this.state.card.surface_water }</h6>
            <a href={ this.state.card.films } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Films</a>
            <a href={ this.state.card.residents } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Residents</a>
          </div>
        </div>
      </Fragment>

    )
  }

}

export default Location;