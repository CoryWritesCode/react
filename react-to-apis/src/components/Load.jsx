import React from 'react';

function Load(props) {
  return (
    <div style={{ display: props.appear ? 'none' : 'inline-block' }}>
      <button style={{ margin: '20px' }} onClick={ props.onClick }>{ props.text }</button>
    </div>
  )
}

export default Load;