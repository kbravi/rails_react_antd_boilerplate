import React from 'react'
import BasicLayout from '../../layouts/basic_layout'
import HomeLanding from './home_landing'
import PageNotFound from '../errors/page_not_found'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <BasicLayout>
          <Switch>
            <Route exact path="/" render={props => <HomeLanding />}/>
            <Route path="*" render={props => <PageNotFound />} />
          </Switch>
        </BasicLayout>
      </BrowserRouter>
    )
  }
}

export default Home
