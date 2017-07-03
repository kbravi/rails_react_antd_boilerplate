Rails-React-Boilerplate
===================
 - Rails 5.1 
 - Ruby 2.4.1 
 - Webpacker gem
 - Hot Module Replacement
 - React-Router
 - Postgresql

This is a basic setup that works out of the box.

----------

Out of the box
-------------
Clone this project and run `bin/setup` The setup will throw errors if dependencies are missing. Just install them and run again. If you'd like to rename this application, just use your IDE to find all occurrences 'rails_react_boilerplate' and 'RailsReactBoilerplate' and give a new name - all before your run `bin/setup`

-------------

DIY
-------------
This boilerplate is a result of these steps:
#### 0. Install [rvm](https://rvm.io) and [brew](https://brew.sh) if necessary
#### 1. Use ruby 2.4.1
```
rvm use 2.4.1
```
#### 2. Install rails 5.1
```
gem install rails
```
#### 3. Install Yarn
```
brew install yarn
```
#### 4. Install Postgresql
```
brew install postgreql
```
#### 5. Create new Rails Application with webpacker
```
 rails new rails_react_boilerplate --webpack=react --database=postgresql
 cd rails_react_boilerplate
```
#### 6. Set ruby version for the app
```
  echo '2.4.1' > .ruby-version
```
#### 7. Install babel-plugin-module-resolver
This helps webpack access assets from the app/assets directories. This is optional.
```
 yarn add babel-plugin-module-resolver
```
Let babel know about this plugin, and edit the .babelrc file
```
"plugins" : [
  ......,
  [
    "module-resolver",
    {
      "root" : ["./app"],
      "alias":
      {
        "assets": "./assets"
      }
    }
  ]
]
```
#### 8. Setup foreman gem and Procfile
This helps run rails server and webpack-dev-server together in one command.
Install foreman gem locally.
```
 gem install foreman
```
Now, create two Procfiles - for production and development
Procfile
```
web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
worker:  bundle exec rake jobs:work
release: bundle exec rake db:migrate
```
Procfile.dev (note --hot flag to enable hot module replacement)
```
web: bundle exec rails s
webpacker: ./bin/webpack-dev-server --inline --hot
```
Create `bin/server` file that can be used to run both servers
```
#!/bin/bash -i
bundle install
foreman start -f Procfile.dev -p 3000
```
#### 9. Update bin/setup for easier setup
Check out the [setup file](./bin/setup)
#### 10. Disable ExtractTextPlugin in development for hot loading
To enable hot loading with Styles, we need to disable ExtractTextPlugin
```
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

if (env.NODE_ENV === 'development'){
  module.exports = {
    test: /\.(scss|sass|css|less)$/i,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true } },
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
      ]
    })
  }
}
```
#### 11. Edit application.html.erb
It is good practice to not render react components to body, so we add a div as a parent
```
<body>
  <div id="root">
    <%= yield %>
   </div>
 </body>
```
#### 12. Add some styling to application.css
```
#root{ height: 100%; }
#root > [data-reactroot] { height: 100% }
```
#### 13. SAMPLES
Created some sample layouts, pages, and packs that will be used in home/index view. Note that since we don't use ExtractTextPlugin in sass loader in development environment, webpack will not emit a stylesheet.
```
<%= javascript_pack_tag 'home' %>
<%= stylesheet_pack_tag 'home' unless Rails.env.development?%>
```
Also, note that we use a application parent component (app/javascript/layouts/application) that can be used to set global props, states, and in some cases contexts such as locale etc.
```
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
```
Check out other files in the app/javascript directory to find a home page layout, a sample error page (that imports image from app/assets), etc.

----------

Just hop on to http://localhost:3000


### LICENSE
MIT

