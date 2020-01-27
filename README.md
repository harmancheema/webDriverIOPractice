# automationPractice

This repo has automation for the website https://the-internet.herokuapp.com/ 

The automation is written in JavaScript using WebDriverIO and mocha framework. `chai` assertions are also used.

The reporter is `spec` and `allure`

All locators can be found inside the `test > pages > herokuapp` folder
All tests can be found inside the `test > specs > herokuapp` folder

After cloning the repo for the first, run `npm install` to install all dependencies

- To run the tests: `npm test`
- To clean up previous results and then run the tests: `npm run automation`
- To generate an allure-report: `npm run report`
