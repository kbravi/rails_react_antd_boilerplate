// Parent Application Container that can be used to set global props, states, and in some cases contexts such as locale etc.
import React from 'react'
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <LocaleProvider locale={enUS}>
          {this.props.children}
        </LocaleProvider>
      </div>
    );
  }
}
export default Application