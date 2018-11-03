import React, { Component, Fragment } from "react";

class Chirp extends Component {

  render(props) {
    return(
      <Fragment>
        <div className="card text-white bg-success mb-3" style={{ margin: '20px', fontWeight: 'bold' }}>
          <div className="card-body">
            { this.props.text }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Chirp;