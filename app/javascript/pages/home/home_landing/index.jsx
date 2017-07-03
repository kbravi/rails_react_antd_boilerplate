import React from 'react'
import { Link } from 'react-router-dom'

class HomeLanding extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello there! <br />
        <Link to="error"> Error Page</Link>
      </div>
    )
  }
}

export default HomeLanding
