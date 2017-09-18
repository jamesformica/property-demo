![logo](https://fourrealestate.herokuapp.com/images/logo.png)
[![Build Status](https://travis-ci.org/jamesformica/property-demo.svg?branch=master)](https://travis-ci.org/jamesformica/property-demo)

# [4realestate.com.au](https://fourrealestate.herokuapp.com/)
A simple real estate site by James Formica.

### Tech Stack
- **RequireJs**: Asynchronous Module Definition (AMD) loading
- **Ruby Sinatra**: web app (7 lines of backend code haha)
- **Karma / Jasmine**: frontend test suite

### To Run
1. run `bundle install` to install the required gems
2. run `rackup` to launch the web application
3. open your browser to `localhost:9292`

### To Test
1. run `npm install` to install the required test packages (namely Karma and Jasmine)
2. run `npm test` to run the firefox launcher as a single run
3. (optionally) you can run `karma start` and it will monitor any changes and rerun the tests

### Travis CI
This repository has been setup with [Travis CI](https://travis-ci.org/) to run the tests every commit.