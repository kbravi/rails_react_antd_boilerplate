import React from 'react'
import { Link } from 'react-router-dom'
import { Button, DatePicker } from 'antd'

class HomeLanding extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello there! <br />
        <DatePicker /> <br />
        <Link to="error"> 
          <Button>
            Error Page
          </Button>
        </Link>
      </div>
    )
  }
}

export default HomeLanding
