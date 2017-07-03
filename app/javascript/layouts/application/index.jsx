// Parent Application Container that can be used to set global props, states, and in some cases contexts such as locale etc.
import React from 'react'

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Application