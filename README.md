
[![Build Status](https://travis-ci.org/jamesformica/property-demo.svg?branch=master)](https://travis-ci.org/jamesformica/property-demo)

# ![logo](https://fourrealestate.herokuapp.com/images/logo.png)[4realestate.com.au](https://fourrealestate.herokuapp.com/)
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
2. run `npm run jstest` to run the Karma tests in a firefox launcher (single run)
3. (optionally) you can run `karma start` and it will monitor any changes and rerun the tests
4. run `npm run uitest` to run the Selenium tests in a chrome webdriver
5. (optionally) you can run `npm test` to run both the Karma tests and the Selenium tests after each other

### Things I've noticed / done
- The result that appears in the Saved Properties by default can never be re-added once deleted
- In 'mobile size' I have made the buttons on the cards always appear as this is a usability issue as 'hover' isn't exactly a thing on mobile devices / touch screens (ideally the buttons should be visible always)
- I've added support for smaller screen sizes (responsive). It isn't the worlds best solution as this is a demo but I felt it important to add in as an example of what _could_ be done
- I have tried to make the site as usable as possible via keyboard navigation. Due to the buttons being only visible on hover this has made this task difficult. I have found an odd issue that if you first click one of the cards, then you can use `tab` to navigate to the button, but if you don't click on a card then it skips the button. Odd.

### ToDo
- Add a CSS minifier to compress the css files into one download

### Travis CI
This repository has been setup with [Travis CI](https://travis-ci.org/) to run the tests every commit.