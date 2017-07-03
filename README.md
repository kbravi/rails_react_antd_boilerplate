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
Clone this project and run `bin/setup` The setup will throw errors if dependencies are missing. Just install them and run again.

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
#### 5.Create new Rails Application with webpacker
```
 rails new rails_react_boilerplate --webpack=react --database=postgresql
 cd rails_react_boilerplate
```
#### 6.Set ruby version for the app
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
#### 9.
```

```
#### 
```

```
#### 
```

```
#### 
```

```
#### 
```

```
#### 
```

```
#### 
```

```
#### 
```

```
#### 
```

```
#### 
```

```

