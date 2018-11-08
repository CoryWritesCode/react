import React, { Component, Fragment } from 'react';
import 'es6-promise';

class Locations extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then(res => res.json())
      .then(obj => {
        this.setState({
          card: obj
        })
      });
  }

  render() {

    return (

      this.state.card.map((card) => (
        <Fragment key={card.id}>
          <div className="card text-white bg-dark" style={{ innerWidth: '18rem', margin: '20px' }} >
            <div className="card-body">
              <h5 className="card-title">{ card.name }</h5>
              <h6 className="card-text text-light">Climate: { card.climate }</h6>
              <h6 className="card-text text-light">Terrain: { card.terrain }</h6>
              <h6 className="card-text text-light">Surface Water: { card.surface_water }</h6>
              <a href={ card.films } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Films</a>
              <a href={ card.residents } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Residents</a>
            </div>
          </div>
        </Fragment>
      ))

    )
  }

}

export default Locations;