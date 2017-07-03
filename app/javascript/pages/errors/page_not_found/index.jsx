import React from 'react'
import SampleImage from 'assets/images/sample_image.svg'

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>
          Uh.. ho!
        </h1>
        <img src={ SampleImage } />
        I am not sure where to take you. <br />
        Let us go back to your <a href="/">home page.</a>
      </div>
    );
  }
}

export default PageNotFound
