import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
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
        <Layout className="basic-layout">
          <Header className="basic-header">Header</Header>
          <Content className="basic-content">{ this.props.children }</Content>
          <Footer className="basic-footer">Footer</Footer>
        </Layout>
      </Application>      
    );
  }
}
export default BasicLayout
