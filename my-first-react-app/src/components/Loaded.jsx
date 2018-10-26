import React, { Fragment } from 'react';
import InputField from './InputField';

function Loaded(props) {
  return (
    <Fragment>
      <h2>Hey</h2>
      <h2>{ props.name }, { props.state.text }</h2>
      <button onClick={ props.onClick }></button>
      <InputField />
    </Fragment>
  );
}

export default Loaded;