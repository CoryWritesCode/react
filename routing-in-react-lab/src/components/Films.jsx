import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'es6-promise';

class Films extends Component {

  constructor(params) {
    super(params)

    this.state = {
      card: []
    }
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
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
          <Fragment key={ card.id }>
           <div className="card text-white bg-dark" style={{ innerWidth: '18rem', margin: '20px' }} >
             <div className="card-body">
               <h5 className="card-title">{ card.title }</h5>
               <h6 className="card-subtitle mb-2 text-muted">{ card.director }</h6>
               <p className="card-text">{ card.description }</p>
               <Link className="btn btn-light" to={ `/films/${card.id}` }>More Info</Link>
             </div>
           </div>
         </Fragment>
        ))
      
    )
  }

}

export default Films;