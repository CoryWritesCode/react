import React, { Component, Fragment } from 'react';

class Film extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
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
            <h4 className="card-title">{this.state.card.title} <small>({this.state.card.release_date})</small></h4>
            <h6 className="card-subtitle mb-2 text-info"><u>Directed By:</u> { this.state.card.director }</h6>
            <h6 className="card-subtitle mb-2 text-info"><u>Produced By:</u> { this.state.card.producer }</h6>
            <h6 className="card-subtitle mb-2 text-danger">Rotten Tomatos: { this.state.card.rt_score }</h6>
            <p className="card-text text-light">{ this.state.card.description }</p>
          </div>
        </div>
      </Fragment>

    )
  }
  
}

export default Film;