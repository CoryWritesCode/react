import React, { Fragment } from 'react';

function NotLoaded(props) {
  return (
    <Fragment>
      <h2>Loading...</h2>
      <button onClick={ props.onClick }></button>
    </Fragment>
  );
}

export default NotLoaded;