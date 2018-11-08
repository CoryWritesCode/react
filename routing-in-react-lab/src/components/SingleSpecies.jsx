import React, { Component, Fragment } from 'react';

class Film extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/species/${this.props.match.params.id}`)
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
            <h4 className="card-title">{ this.state.card.name } <small>({ this.state.card.classification })</small></h4>
            <h6 className="card-subtitle mb-2 text-light">Eye Color: { this.state.card.eye_colors }</h6>
            <h6 className="card-subtitle mb-2 text-light">Hair Color: { this.state.card.hair_colors }</h6>
            {/* <a href={ this.state.card.films } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>Films</a>
            <a href={ this.state.card.people } className='btn btn-primary' style={{ margin: '10px', display: 'inline-block' }}>People</a> */}
          </div>
        </div>
      </Fragment>

    )
  }

}

export default Film;