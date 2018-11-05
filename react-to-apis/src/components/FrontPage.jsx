import React from 'react';

function FrontPage(props) {

  return (
    <div style={{ display: props.appear ? 'none' : 'block' }}>
      <img src={ props.src } alt={ props.alt } style={{ display: 'block' }}/>    
      <button style={{ margin: '20px' }} onClick={ props.onClick }>Load Films</button>
    </div>
  );

}

export default FrontPage;