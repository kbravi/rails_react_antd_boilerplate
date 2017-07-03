Rails-React-Antd-Boilerplate
===================
 - Rails 5.1 
 - Ruby 2.4.1 
 - [Webpacker gem](https://github.com/rails/webpacker)
 - [Ant Design](https://ant.design)
 - Hot Module Replacement
 - React-Router
 - Postgresql

This is a basic setup that works out of the box.

----------

Out of the box
-------------
Clone this project and run `bin/setup` The setup will throw errors if dependencies are missing. Just install them and run again. If you'd like to rename this application, just use your IDE to find all occurrences 'rails_react_antd_boilerplate' and 'RailsReactAntdBoilerplate' and replace them with a new name - all before your run `bin/setup`

-------------

DIY
-------------
This was built from [rails_react_boilerplate](https://github.com/kbravi/rails_react_boilerplate). 
#### 0. Follow steps from [rails_react_boilerplate](https://github.com/kbravi/rails_react_boilerplate) to install basic setup.

#### 1. Install Ant design module

```
yarn add antd
```
#### 2. Install babel-import-plugin
This plugin helps antd import component stylesheets along with React components when imported on demand. [Link](https://github.com/ant-design/babel-plugin-import)
```
yarn add babel-plugin-import
```
Now, add this plugin to .babelrc. We want antd to import less styles by setting `style:true` so that we can customize antd theme.
```
plugins: [
  .....,
  [
    "import",
    {
      "libraryName": "antd", "style": true
    }
  ]
]
```
#### 3. Customize Antd theme
Since we load the Antd component stylesheets as less files, it is possible to [customize the theme](https://ant.design/docs/react/customize-theme) by creating a json file at app/javascript/themes/basic.json which we can then import to loaders/sass.js so that webpack will apply these json variables to the output stylesheets.

Add less loader to the project
```
yarn add less less-loader
```
Create a theme json file at app/javascript/themes/basic.json. Note: Changes to this file requires a server restart
```
{
  "primary-color": "blue",
  "font-family": "arial, sans-serif",
  "body-background": "white",
  "font-size-base": "15px"
}
```

Update the loaders/sass.js file to include less loaders and import the theme file to overwrite global style variables
```
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')
const themeOverwrite = require('../../../app/javascript/themes/basic.json')

if (env.NODE_ENV === 'development'){
  module.exports = {
    test: /\.(scss|sass|css|less)$/i,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true } },
      { loader: 'less-loader', options: { sourceMap: true, modifyVars: themeOverwrite } }
    ]
  }
}else{
  module.exports = {
    test: /\.(scss|sass|css|less)$/i,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        { loader: 'css-loader', options: { minimize: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } },
        'resolve-url-loader',
        { loader: 'sass-loader', options: { sourceMap: true } },
        { loader: 'less-loader', options: { sourceMap: true, modifyVars: themeOverwrite } }
      ]
    })
  }
}

```
#### 4. Add LocaleProvider to app/javascript/layouts/application
Ant design's default locale is Chinese, but it is possible and easy to set a global locale using the react's largely experimental context feature. Ant design supports this out of the box, so just modify the application/index.jsx file 
```
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
```
#### 5. SAMPLES
Check out the home page layouts and other files in the app/javascript directory for samples 

----------

Just hop on to `http://localhost:3000`

Run servers with `bin/server`


### LICENSE
MIT

