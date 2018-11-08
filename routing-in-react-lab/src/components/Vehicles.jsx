import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'es6-promise';

class Vehicles extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/vehicles')
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
              <Link className="btn btn-light" to={`/vehicles/${card.id}`}>More Info</Link>
            </div>
          </div>
        </Fragment>
      ))

    )
  }

}

export default Vehicles;