import React, { Fragment } from 'react';

function Card(props) {
  return (
    <Fragment>
      <div className="card text-white bg-dark" style={{ display: props.appear ? 'block' : 'none', innerWidth: '18rem', margin: '20px' }}>
        <div className="card-body">
          <h5 className="card-title">{ props.title }</h5>
          <h6 className="card-subtitle mb-2 text-muted">Directed by { props.director }</h6>
          <p className="card-text">{ props.description }</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;