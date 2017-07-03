import React from 'react'
import Application from '../application'
import './style.css'

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Application>
        <div className="basic-layout">
          <div className="basic-header">
            Header
          </div>
          <div className="basic-content">
            { this.props.children }
          </div>
          <div className="basic-footer">
            Footer
          </div>
        </div>
      </Application>
    );
  }
}
export default BasicLayout
